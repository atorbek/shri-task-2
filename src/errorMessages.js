const warnings = {
  textSizesShouldBeEqual: {
    code: "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
    error: "Тексты в блоке warning должны быть одного размера"
  },
  invalidButtonSize: {
    code: "WARNING.INVALID_BUTTON_SIZE",
    error: "Размер кнопки блока warning должен быть на 1 шаг больше эталонного"
  },
  invalidButtonPosition: {
    code: "WARNING.INVALID_BUTTON_POSITION",
    error:
      "Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности"
  },
  invalidPlaceholderSize: {
    code: "WARNING.INVALID_PLACEHOLDER_SIZE",
    error:
      "Допустимые размеры для блока placeholder в блоке warning (значение модификатора size): s, m, l"
  }
};

const headers = {
  severalH1: {
    code: "TEXT.SEVERAL_H1",
    error:
      "Заголовок первого уровня (блок text с модификатором type h1) на странице должен быть единственным"
  },
  invalidH2Position: {
    code: "TEXT.INVALID_H2_POSITION",
    error:
      "Заголовок второго уровня (блок text с модификатором type h2) не может находиться перед заголовком первого уровня на том же или более глубоком уровне вложенности"
  },
  invalidH3Position: {
    code: "TEXT.INVALID_H3_POSITION",
    error:
      "Заголовок третьего уровня (блок text с модификатором type h3) не может находиться перед заголовком второго уровня на том же или более глубоком уровне вложенности"
  }
};

const marketings = {
  tooMuchMarketingBlocks: {
    code: "GRID.TOO_MUCH_MARKETING_BLOCKS",
    error:
      "Маркетинговые блоки должны занимать не больше половины от всех колонок блока grid"
  }
};

export { warnings, headers, marketings };
