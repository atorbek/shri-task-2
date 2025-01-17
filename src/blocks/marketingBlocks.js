import { findProperty } from "../utils/findUtils";
import { locationFormat } from "../utils/utils";
import { marketings as marketingErrors } from "../constants/errorMessages";

const marketingBlocks = ast => {
  return [...tooMuchMarketingBlocks(ast)];
};

const tooMuchMarketingBlocks = ast => {
  const errors = [];
  const gridBlocks = findProperty(ast, {
    key: "block",
    values: ["grid"],
    parent: true
  });

  const gridObjBlocks = gridBlocks
    .map(gridBlock => {
      const mColumns = findProperty(gridBlock, {
        key: "m-columns",
        findFirst: true
      });
      let obj = {};

      if (mColumns.length) {
        obj = {
          block: gridBlock,
          mColumns: +mColumns[0].value.value,
          content: gridBlock.children.filter(
            it => it.type === "Property" && it.key.value === "content"
          )[0].value.children
        };
      }

      return obj;
    })
    .filter(it => Object.keys(it).length !== 0 && it.constructor === Object);

  const gridMarketingBlocks = gridObjBlocks.map(it => ({
    ...it,
    content: it.content.filter(
      it =>
        findProperty(it, {
          key: "block",
          values: ["offer", "commercial"],
          findFirst: true
        }).length
    )
  }));

  gridMarketingBlocks.forEach(it => {
    const sum = it.content.reduce(
      (sum, it) =>
        sum +
        +findProperty(it, {
          key: "m-col",
          findFirst: true
        })[0].value.value,
      0
    );

    if (it.mColumns / 2 <= sum) {
      errors.push({
        ...marketingErrors.tooMuchMarketingBlocks,
        ...locationFormat(it.block)
      });
    }
  });

  return errors;
};

export { marketingBlocks };
