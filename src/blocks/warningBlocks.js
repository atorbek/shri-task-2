import { findProperty } from "../utils/findUtils";
import { warnings as warningErrors } from "../constants/errorMessages";
import { locationFormat } from "../utils/utils";
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

  const warningObjectBlocks = warningBlocks.map(it => ({
    warning: it,
    content: it.children.filter(
      it => it.type === "Property" && it.key.value === "content"
    )[0]
  }));

  return [
    ...textSizesShouldBeEqual(warningObjectBlocks),
    ...invalidButtonSize(warningObjectBlocks),
    ...invalidButtonPosition(warningBlocks),
    ...invalidPlaceholderSize(warningBlocks)
  ];
};

const textSizesShouldBeEqual = warningObjectBlocks => {
  let errors = [];
  const textBlocks = warningObjectBlocks
    .map(blocks => ({
      warning: blocks.warning,
      content: findProperty(blocks.warning, {
        key: "block",
        values: ["text"],
        parent: true
      })
    }))
    .filter(blocks => blocks.content.length);

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

const invalidButtonSize = warningObjectBlocks => {
  let errors = [];
  const refAndButtonBlocks = warningObjectBlocks
    .map(blocks => ({
      warning: blocks.warning,
      content: findProperty(blocks.warning, {
        key: "block",
        values: ["text", "button"],
        parent: true
      })
    }))
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

  refAndButtonBlocks.forEach(blocks => {
    const block = findProperty(blocks[0], { key: "size", findFirst: true });
    if (block.length) {
      const {
        value: { value: ref }
      } = block[0];

      blocks.forEach((block, i) => {
        if (i > 0) {
          const {
            value: { value: prop }
          } = findProperty(block, { key: "size", findFirst: true })[0];

          const diff = sizes[prop] - sizes[ref];
          if (diff <= 0 || diff > 1) {
            errors.push({
              ...warningErrors.invalidButtonSize,
              ...locationFormat(block)
            });
          }
        }
      });
    }
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
      })
    )
    .filter(block => block.length);

  placeholderAndButtonBlocks.forEach(blocks => {
    blocks.forEach((block, j) => {
      if (block.children[0].value.value === "button") {
        for (let l = j; l < blocks.length; l++) {
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

      if (size.length) {
        const {
          value: { value }
        } = size[0];

        if (![3, 4, 5].includes(sizes[value])) {
          errors.push({
            ...warningErrors.invalidPlaceholderSize,
            ...locationFormat(placeholder)
          });
        }
      }
    });
  });

  return errors;
};
export { warningBlocks };
