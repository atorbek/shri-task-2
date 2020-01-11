const locationFormat = ({ loc: { start, end } }) => ({
  location: {
    start: { column: start.column, line: start.line },
    end: { end: end.column, line: end.line }
  }
});

const compareLocation = (block1, block2) => {
  return block1.loc.start.line !== block1.loc.start.line
    ? block1.loc.start.line < block2.loc.start.line
    : block1.loc.start.column < block2.loc.start.column;
};

export { locationFormat, compareLocation };
