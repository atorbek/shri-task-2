const walk = (astJson, cb, { findFirst } = { findFirst: false }) => {
  let ast = astJson;

  const stack = [];
  stack.push(ast);

  const visited = new Set();
  visited.add(ast);

  let parent = ast;

  while (stack.length !== 0) {
    ast = stack[stack.length - 1];
    let unvisited = true;

    parent = ast;
    if (ast.type === "Property" && ast.value.type === "Literal") {
      ast = [ast];
    } else if (ast.type === "Object" || ast.type === "Array") {
      ast = ast.children;
    } else {
      ast = ast.value.children;
    }

    for (let i = 0; i < ast.length; i++) {
      if (!visited.has(ast[i])) {
        stack.push(ast[i]);
        visited.add(ast[i]);
        unvisited = false;

        const res = cb({
          node: ast[i],
          parent
        });

        const isFindFirst = findFirst && typeof res === "boolean";

        if (findFirst && !isFindFirst) {
          throw "Callback function should return boolean!";
        }

        if (!res) return;

        break;
      }
    }

    if (unvisited) {
      stack.pop();
    }
  }
};

const findProperty = (
  astJson,
  { key, values = [], parent = false, findFirst = false }
) => {
  const blocks = [];

  walk(
    astJson,
    ({ node, parent: parentNode }) => {
      if (
        node.type === "Property" &&
        node.key.value === key &&
        (!values.length || values.includes(node.value.value))
      ) {
        blocks.push(parent ? parentNode : node);
        if (findFirst) {
          return false;
        }
      }

      return true;
    },
    { findFirst }
  );

  return blocks;
};

export { walk, findProperty };
