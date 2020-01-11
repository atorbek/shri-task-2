import { linter } from "../src/linter";
import { warningBlocks } from "./data";

chai.config.truncateThreshold = 0;
chai.config.includeStack = true;

describe("Правила линтинга блока warning", () => {
  describe("WARNING.TEXT_SIZES_SHOULD_BE_EQUAL", () => {
    const {
      sizesDifferentOnDeeperLvl,
      sizesEqualOnDeeperLvl,
      onlyRefTextSizeOnDeeperLvl,
      textAndButtonOnDeeperLvl,
      textWithoutSizeAndButtonOnDeeperLvl,
      textWithoutSizeOnDeeperLvl,
      noTextsAndButtons,
      sizesDifferentAtDifferentLvl,
      sizesEqualAtDifferentLvl
    } = warningBlocks;

    it("Размеры текстовых блоков разные на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(sizesDifferentOnDeeperLvl), [
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

    it("Размеры текстовых блоков одинаковы на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(sizesEqualOnDeeperLvl), []);
    });

    it("Только эталонный текстовый блок c размером на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(onlyRefTextSizeOnDeeperLvl), []);
    });

    it("Текстовые блоки отсутствуют", () => {
      assert.deepEqual(linter(noTextsAndButtons), []);
    });

    it("Текстовый блок с размером и блок кнопка на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(textAndButtonOnDeeperLvl), []);
    });

    it("Текстовый блок без размера и блок кнопка на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(textWithoutSizeAndButtonOnDeeperLvl), []);
    });

    it("Текстовый блок без размера на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(textWithoutSizeOnDeeperLvl), []);
    });

    it("Текстовые блоки разных размеров на разных уровнях вложенности", () => {
      assert.deepEqual(linter(sizesDifferentAtDifferentLvl), [
        {
          code: "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
          error: "Тексты в блоке warning должны быть одного размера",
          location: {
            start: { column: 1, line: 1 },
            end: { column: 2, line: 18 }
          }
        }
      ]);
    });
    it("Текстовые блоки одинакового размера на разных уровнях вложенности", () => {
      assert.deepEqual(linter(sizesEqualAtDifferentLvl), []);
    });
  });

  describe("WARNING.INVALID_BUTTON_SIZE", () => {
    const {
      sizeIsOneStepLargerRef,
      sizeIsEqualToRef,
      onlyRefButtonSizeOnDeeperLvl,
      sizeIsOneStepLargerRefAtDifferentLvl,
      sizeIsEqualToRefAtDifferentLvl,
      noTextsAndButtons
    } = warningBlocks;

    it("Размер кнопки на 1 шаг больше размера эталонного блока", () => {
      assert.deepEqual(linter(sizeIsOneStepLargerRef), []);
    });

    it("Размер кнопки равен размеру эталонного блока", () => {
      assert.deepEqual(linter(sizeIsEqualToRef), [
        {
          code: "WARNING.INVALID_BUTTON_SIZE",
          error:
            "Размер кнопки блока warning должен быть на 1 шаг больше эталонного",
          location: {
            start: { column: 9, line: 5 },
            end: { column: 55, line: 5 }
          }
        }
      ]);
    });

    it("Размер кнопки на 1 шаг больше размера эталонного блока на разных уровнях вложенности", () => {
      assert.deepEqual(linter(sizeIsOneStepLargerRefAtDifferentLvl), []);
    });

    it("Размер кнопки равен размеру эталонного блока на разных уровнях вложенности", () => {
      assert.deepEqual(linter(sizeIsEqualToRefAtDifferentLvl), [
        {
          code: "WARNING.INVALID_BUTTON_SIZE",
          error:
            "Размер кнопки блока warning должен быть на 1 шаг больше эталонного",
          location: {
            start: { column: 17, line: 8 },
            end: { column: 63, line: 8 }
          }
        }
      ]);
    });

    it("Только эталонный блок кнопки с размером на более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(onlyRefButtonSizeOnDeeperLvl), []);
    });

    it("Кнопки отсутствуют", () => {
      assert.deepEqual(linter(noTextsAndButtons), []);
    });

    describe("WARNING.INVALID_BUTTON_POSITION", () => {
      const {
        placeholderBeforeButton,
        placeholderAfterButton,
        placeholderBeforeButtonAtDifferentLvl,
        placeholderAfterButtonAtDifferentLvl,
        onlyPlaceholder,
        placeholderBetweenButtons,
        placeholderBetweenButtonsAtDifferentLvl,
        buttonsBeforePlaceholder,
        buttonsAfterPlaceholder,
        buttonsBeforePlaceholderAtDifferentLvl,
        buttonsAfterPlaceholderAtDifferentLvl
      } = warningBlocks;

      it("Placeholder до button", () => {
        assert.deepEqual(linter(placeholderBeforeButton), []);
      });

      it("Placeholder после button", () => {
        assert.deepEqual(linter(placeholderAfterButton), [
          {
            code: "WARNING.INVALID_BUTTON_POSITION",
            error:
              "Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности",
            location: {
              start: { column: 9, line: 4 },
              end: { column: 59, line: 4 }
            }
          }
        ]);
      });

      it("Placeholder до button на разных уровнях вложенности", () => {
        assert.deepEqual(linter(placeholderBeforeButtonAtDifferentLvl), []);
      });

      it("Placeholder после button на разных уровнях вложенности", () => {
        assert.deepEqual(linter(placeholderAfterButtonAtDifferentLvl), [
          {
            code: "WARNING.INVALID_BUTTON_POSITION",
            error:
              "Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности",
            location: {
              start: { column: 17, line: 7 },
              end: { column: 67, line: 7 }
            }
          }
        ]);
      });

      it("Только placeholder", () => {
        assert.deepEqual(linter(onlyPlaceholder), []);
      });

      it("Placeholder между buttons", () => {
        assert.deepEqual(linter(placeholderBetweenButtons), [
          {
            code: "WARNING.INVALID_BUTTON_POSITION",
            error:
              "Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности",
            location: {
              start: { column: 9, line: 4 },
              end: { column: 59, line: 4 }
            }
          }
        ]);
      });

      it("Placeholder между buttons на разных уровнях вложенности", () => {
        assert.deepEqual(linter(placeholderBetweenButtonsAtDifferentLvl), [
          {
            code: "WARNING.INVALID_BUTTON_POSITION",
            error:
              "Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности",
            location: {
              start: { column: 17, line: 7 },
              end: { column: 67, line: 7 }
            }
          }
        ]);
      });

      it("Buttons до placeholder", () => {
        assert.deepEqual(linter(buttonsBeforePlaceholder), [
          {
            code: "WARNING.INVALID_BUTTON_POSITION",
            error:
              "Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности",
            location: {
              start: { column: 9, line: 4 },
              end: { column: 59, line: 4 }
            }
          },
          {
            code: "WARNING.INVALID_BUTTON_POSITION",
            error:
              "Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности",
            location: {
              start: { column: 9, line: 5 },
              end: { column: 59, line: 5 }
            }
          }
        ]);
      });

      it("Buttons после placeholder", () => {
        assert.deepEqual(linter(buttonsAfterPlaceholder), []);
      });

      it("Buttons до placeholder на разных уровнях вложенности", () => {
        assert.deepEqual(linter(buttonsBeforePlaceholderAtDifferentLvl), [
          {
            code: "WARNING.INVALID_BUTTON_POSITION",
            error:
              "Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности",
            location: {
              start: { column: 17, line: 7 },
              end: { column: 67, line: 7 }
            }
          },
          {
            code: "WARNING.INVALID_BUTTON_POSITION",
            error:
              "Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности",
            location: {
              start: { column: 17, line: 8 },
              end: { column: 67, line: 8 }
            }
          }
        ]);
      });

      it("Buttons после placeholder на разных уровнях вложенности", () => {
        assert.deepEqual(linter(buttonsAfterPlaceholderAtDifferentLvl), []);
      });
    });

    describe("WARNING.INVALID_PLACEHOLDER_SIZE", () => {
      const {
        validPlaceholderSizes,
        invalidPlaceholderSizes,
        validPlaceholderSizesOnDeeperLvl,
        invalidPlaceholderSizesOnDeeperLvl
      } = warningBlocks;

      it("Валидные размеры placeholder", () => {
        assert.deepEqual(linter(validPlaceholderSizes), []);
      });

      it("Не валидные размеры placeholder", () => {
        assert.deepEqual(linter(invalidPlaceholderSizes), [
          {
            code: "WARNING.INVALID_PLACEHOLDER_SIZE",
            error:
              "Допустимые размеры для блока placeholder в блоке warning (значение модификатора size): s, m, l",
            location: {
              start: { column: 9, line: 4 },
              end: { column: 61, line: 4 }
            }
          }
        ]);
      });

      it("Валидные размеры placeholder на более глубоком уровне вложенности", () => {
        assert.deepEqual(linter(validPlaceholderSizesOnDeeperLvl), []);
      });

      it("Не валидные размеры placeholder на более глубоком уровне вложенности", () => {
        assert.deepEqual(linter(invalidPlaceholderSizesOnDeeperLvl), [
          {
            code: "WARNING.INVALID_PLACEHOLDER_SIZE",
            error:
              "Допустимые размеры для блока placeholder в блоке warning (значение модификатора size): s, m, l",
            location: {
              start: { column: 17, line: 7 },
              end: { column: 69, line: 7 }
            }
          }
        ]);
      });
    });
  });
});
