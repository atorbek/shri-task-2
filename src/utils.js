const locationFormat = ({ loc: { start, end } }) => ({
  location: {
    start: { column: start.column, line: start.line },
    end: { column: end.column, line: end.line }
  }
});

const compareLocation = (block1, block2) => {
  if (block1.loc.start.line !== block2.loc.start.line) {
    return block1.loc.start.line < block2.loc.start.line;
  } else {
    return block1.loc.start.column < block2.loc.start.column;
  }
};

export { locationFormat, compareLocation };
