import { linter } from "../src/linter";
import { warningBlocks } from "./data";

chai.config.truncateThreshold = 0;
chai.config.includeStack = true;

describe("Правила линтинга блока warning", () => {
  describe("WARNING.TEXT_SIZES_SHOULD_BE_EQUAL", () => {
    const {
      textSizesDifferentOnDeeperLevel,
      textSizesEqualOnDeeperLevel,
      onlyReferenceTextSizeOnDeeperLevel,
      textAndButtonOnDeeperLevel,
      textWithoutSizeAndButtonOnDeeperLevel,
      textWithoutSizeOnDeeperLevel,
      noTexts
    } = warningBlocks;

    it("Размеры у текстовых блоков разные на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(textSizesDifferentOnDeeperLevel), [
        {
          code: "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
          error: "Тексты в блоке warning должны быть одного размера",
          location: {
            start: { column: 1, line: 1 },
            end: { column: 2, line: 22 }
          }
        }
      ]);
    });

    it("Размеры у текстовых блоков одинаковые на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(textSizesEqualOnDeeperLevel), []);
    });

    it("Только эталонный текстовый блок c размером на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(onlyReferenceTextSizeOnDeeperLevel), []);
    });

    it("Текстовые блоки отсутствуют", () => {
      assert.deepEqual(linter(noTexts), []);
    });

    it("Текстовый блок с размером и блок кнопка на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(textAndButtonOnDeeperLevel), []);
    });

    it("Текстовый блок без размера и блок кнопка на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(textWithoutSizeAndButtonOnDeeperLevel), []);
    });

    it("Текстовый блок без размера на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(textWithoutSizeOnDeeperLevel), []);
    });
  });
});
