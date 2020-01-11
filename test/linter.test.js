import { assert } from "chai";
import { linter } from "../src/linter";

describe("Правила линтинга блока warning", () => {
  it("WARNING.TEXT_SIZES_SHOULD_BE_EQUAL", () => {
    const testJson1 = `{
        "block": "warning",
        "content": [
            { "block": "text", "mods": { "size": "l" } },
            { "block": "text", "mods": { "size": "l" } },
            { "block": "button", "mods": { "size": "xl" } },
            {
              "block": "warning",
              "content": [
                  { "block": "text", "mods": { "size": "l" } },
                  { "block": "text", "mods": { "size": "l" } },
                  { "block": "button", "mods": { "size": "xl" } }
              ]
            }
        ]
    }`;

    assert.deepEqual(linter(testJson1), []);

    const testJson2 = `{
        "block": "warning",
        "content": [
            { "block": "text", "mods": { "size": "l" } },
            { "block": "text", "mods": { "size": "s" } },
            { "block": "button", "mods": { "size": "xl" } },
            {
              "block": "warning",
              "content": [
                  { "block": "text", "mods": { "size": "l" } },
                  { "block": "text", "mods": { "size": "l" } },
                  { "block": "button", "mods": { "size": "xl" } }
              ]
            }
        ]
    }`;

    // assert.deepEqual(JSON.parse(linter(testJson2)), [
    //   {
    //     code: "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
    //     error: "Тексты в блоке warning должны быть одного размера",
    //     location: {
    //       start: { column: 38, line: 5 },
    //       end: { end: 49, line: 5 }
    //     }
    //   }
    // ]);
  });
});
