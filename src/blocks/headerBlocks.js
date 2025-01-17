import { findProperty } from "../utils/findUtils";
import { locationFormat, compareLocation } from "../utils/utils";
import { headers as headerErrors } from "../constants/errorMessages";

const headerBlocks = ast => {
  const textBlocks = findProperty(ast, {
    key: "block",
    values: ["text"],
    parent: true
  });

  const headerBlocks = (textBlocks => {
    const hMods = {
      h1: [],
      h2: [],
      h3: []
    };

    textBlocks.forEach(textBlock => {
      const header = findProperty(textBlock, {
        key: "type",
        values: ["h1", "h2", "h3"]
      });

      if (header.length && header[0].value.value === "h1") {
        hMods.h1.push(header[0]);
      } else if (header.length && header[0].value.value === "h2") {
        hMods.h2.push(header[0]);
      } else if (header.length && header[0].value.value === "h3") {
        hMods.h3.push(header[0]);
      }
    });
    return hMods;
  })(textBlocks);

  return [
    ...severalH1(headerBlocks),
    ...invalidH2Position(headerBlocks),
    ...invalidH3Position(headerBlocks)
  ];
};

const severalH1 = ({ h1 }) => {
  const errors = [];
  if (h1.length && h1.length > 1) {
    h1.reduce((acc, h1) =>
      errors.push({
        ...headerErrors.severalH1,
        ...locationFormat(h1)
      })
    );
  }

  return errors;
};

const invalidH2Position = ({ h1, h2 }) => {
  const errors = [];
  if (h1.length) {
    h2.forEach(h2 => {
      compareLocation(h2, h1[0]) &&
        errors.push({
          ...headerErrors.invalidH2Position,
          ...locationFormat(h2)
        });
    });
  }

  return errors;
};
const invalidH3Position = ({ h2, h3 }) => {
  const errors = [];
  if (h2.length) {
    h2.forEach(h2 => {
      h3.forEach(h3 => {
        compareLocation(h3, h2) &&
          errors.push({
            ...headerErrors.invalidH3Position,
            ...locationFormat(h3)
          });
      });
    });
  }
  return errors;
};

export { headerBlocks };
