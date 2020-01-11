import { findProperty } from "./findUtils";
import { warnings as warningErrors } from "./errorMessages";
import { locationFormat } from "./utils";

const sizes = {
  xxxs: 0,
  xxs: 1,
  xs: 2,
  s: 3,
  m: 4,
  l: 5,
  xl: 6,
  xxl: 7,
  xxxl: 8,
  xxxxl: 9
};

const warningBlocks = ast => {
  const warningBlocks = findProperty(ast, {
    key: "block",
    values: ["warning"],
    parent: true
  });

  console.log("ast", ast);
  console.log("warningBlocks", warningBlocks);

  const warningObjectBlocks = warningBlocks.map(it => ({
    warning: it,
    content: it.children.filter(
      it => it.type === "Property" && it.key.value === "content"
    )[0]
  }));

  console.log("warningObjectBlocks", warningObjectBlocks);

  const contentBlocks = warningObjectBlocks
    .map(blocks => ({
      warning: blocks.warning,
      content: blocks.content.value.children.filter(
        block => block.children[0].key.value === "block"
      )
    }))
    .filter(block => block.content.length);

  console.log("contentBlocks", contentBlocks);

  const textBlocks = contentBlocks
    .map(blocks => ({
      warning: blocks.warning,
      content: blocks.content.filter(
        block =>
          block.children[0].key.value === "block" &&
          block.children[0].value.value === "text"
      )
    }))
    .filter(blocks => blocks.content.length);

  console.log("textBlocks", textBlocks);

  const refAndButtonBlocks = contentBlocks
    .map(blocks =>
      blocks.content.filter(
        (block, i) =>
          i === 0 ||
          (i > 0 &&
            block.children[0].key.value === "block" &&
            block.children[0].value.value === "button")
      )
    )
    .filter(block => block.length);

  console.log("refAndButtonBlocks", refAndButtonBlocks);

  return [
    ...textSizesShouldBeEqual(textBlocks),
    ...invalidButtonSize(refAndButtonBlocks),
    // Правильно понял правило ?
    ...invalidButtonPosition(warningBlocks),
    // Правильно понял правило ?
    ...invalidPlaceholderSize(warningBlocks)
  ];
};

const textSizesShouldBeEqual = textBlocks => {
  let errors = [];

  for (let blocks of textBlocks) {
    const textBlock = findProperty(blocks.content[0], {
      key: "size",
      findFirst: true
    });

    if (textBlock.length) {
      const {
        value: { value: ref }
      } = textBlock[0];

      for (let block of blocks.content) {
        const firstBlock = findProperty(block, {
          key: "size",
          findFirst: true
        });

        if (firstBlock.length) {
          const {
            value: { value: prop }
          } = findProperty(block, {
            key: "size",
            findFirst: true
          })[0];

          if (sizes[ref] !== sizes[prop]) {
            errors.push({
              ...warningErrors.textSizesShouldBeEqual,
              ...locationFormat(blocks.warning)
            });

            break;
          }
        }
      }
    }
  }

  return errors;
};

const invalidButtonSize = refAndButtonBlocks => {
  let errors = [];

  refAndButtonBlocks.forEach(blocks => {
    const {
      value: { value: ref }
    } = findProperty(blocks[0], { key: "size", findFirst: true })[0];

    blocks.forEach((block, i) => {
      if (i > 0) {
        const {
          value: { value: prop }
        } = findProperty(block, { key: "size", findFirst: true })[0];

        if (sizes[ref] >= sizes[prop]) {
          errors.push({
            ...warningErrors.invalidButtonSize,
            ...locationFormat(block)
          });
        }
      }
    });
  });

  return errors;
};
const invalidButtonPosition = warningBlocks => {
  let errors = [];

  const placeholderAndButtonBlocks = warningBlocks
    .map(blocks =>
      findProperty(blocks, {
        key: "block",
        values: ["placeholder", "button"],
        parent: true
      }).sort(
        (a, b) => a.children[0].loc.start.line - b.children[0].loc.start.line
      )
    )
    .filter(block => block.length);

  console.log("placeholderAndButtonBlocks", placeholderAndButtonBlocks);

  placeholderAndButtonBlocks.forEach(blocks => {
    blocks.forEach((block, j) => {
      if (block.children[0].value.value === "button") {
        for (let l = j; l < blocks.length - 1; l++) {
          if (blocks[l].children[0].value.value === "placeholder") {
            errors.push({
              ...warningErrors.invalidButtonPosition,
              ...locationFormat(block)
            });

            break;
          }
        }
      }
    });
  });

  return errors;
};
const invalidPlaceholderSize = warningBlocks => {
  let errors = [];

  const placeholderBlocks = warningBlocks.map(blocks =>
    findProperty(blocks, {
      key: "block",
      values: ["placeholder"],
      parent: true
    })
  );

  placeholderBlocks.forEach(placeholderBlocks => {
    placeholderBlocks.forEach(placeholder => {
      let size = findProperty(placeholder, {
        key: "size",
        findFirst: true
      });

      if ([3, 4, 5].includes(sizes[size])) {
        errors.push({
          ...warningErrors.invalidPlaceholderSize,
          ...locationFormat(placeholder)
        });
      }
    });
  });

  return errors;
};
export { warningBlocks };
