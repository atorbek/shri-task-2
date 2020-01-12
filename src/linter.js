import jsonToAst from "json-to-ast";
import { warningBlocks } from "./blocks/warningBlocks";
import { headerBlocks } from "./blocks/headerBlocks";
import { marketingBlocks } from "./blocks/marketingBlocks";

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
