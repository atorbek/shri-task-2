import jsonToAst from "json-to-ast";
import { warningBlocks } from "./warningBlocks";
import { headerBlocks } from "./headerBlocks";
import { marketingBlocks } from "./marketingBlocks";

export const linter = json =>
  (ast => [
    ...warningBlocks(ast),
    ...headerBlocks(ast),
    ...marketingBlocks(ast)
  ])(
    jsonToAst(json, {
      loc: true
    })
  );

globalThis.lint = linter;

// const m1 = new Date().getMilliseconds();
//
// console.log(linter(json));
//
// console.log("linter", new Date().getMilliseconds() - m1, "ms");
