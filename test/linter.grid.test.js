import { linter } from "../src/linter";
import { marketingBlocks } from "./resources/linter.grid.data";

chai.config.truncateThreshold = 0;
chai.config.includeStack = true;

describe("Правила линтинга пропорции функциональных и рекламных блоков", () => {
  describe("GRID.TOO_MUCH_MARKETING_BLOCKS", () => {
    const { lessThanOrEqualToHalf, moreThanHalf } = marketingBlocks;

    it("Маркетиновые блоки занимают не больше половины от всех колонок в grid", () => {
      assert.deepEqual(linter(lessThanOrEqualToHalf), []);
    });

    it("Маркетиновые блоки занимают больше половины от всех колонок в grid", () => {
      assert.deepEqual(linter(moreThanHalf), [
        {
          code: "GRID.TOO_MUCH_MARKETING_BLOCKS",
          error:
            "Маркетинговые блоки должны занимать не больше половины от всех колонок блока grid",
          location: {
            start: { column: 1, line: 1 },
            end: { column: 2, line: 32 }
          }
        }
      ]);
    });
  });
});
