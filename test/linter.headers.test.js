import { linter } from "../src/linter";
import { headerBlocks } from "./resources/linter.headers.data";

chai.config.truncateThreshold = 0;
chai.config.includeStack = true;

describe("Правила линтинга заголовков на странице", () => {
  describe("TEXT.SEVERAL_H1", () => {
    const {
      h1ShouldBeOnlyOne,
      h1ShouldBeOnlyOneOnDeeperLvl,
      h1NotAlone,
      h1NotAloneOnDeeperLvl
    } = headerBlocks;

    it("h1 должен быть один", () => {
      assert.deepEqual(linter(h1ShouldBeOnlyOne), []);
    });

    it("h1 должен быть один на том же или более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(h1ShouldBeOnlyOneOnDeeperLvl), []);
    });

    it("h1 не один", () => {
      assert.deepEqual(linter(h1NotAlone), [
        {
          code: "TEXT.SEVERAL_H1",
          error:
            "Заголовок первого уровня (блок text с модификатором type h1) на странице должен быть единственным",
          location: {
            start: { column: 38, line: 5 },
            end: { column: 50, line: 5 }
          }
        }
      ]);
    });

    it("h1 не один на том же или более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(h1NotAloneOnDeeperLvl), [
        {
          code: "TEXT.SEVERAL_H1",
          error:
            "Заголовок первого уровня (блок text с модификатором type h1) на странице должен быть единственным",
          location: {
            start: { column: 53, line: 11 },
            end: { column: 65, line: 11 }
          }
        }
      ]);
    });
  });

  describe("TEXT.INVALID_H2_POSITION", () => {
    const {
      h1BeforeH2Block,
      h1AfterH2Block,
      h1BeforeH2Blocks,
      h1AfterH2Blocks,
      h1BeforeH2AtDifferentLvl,
      h2AfterH1AtDifferentLvl,
      h1BeforeH2BlocksAtDifferentLvl,
      h1AfterH2BlocksAtDifferentLvl
    } = headerBlocks;

    it("h1 до h2", () => {
      assert.deepEqual(linter(h1BeforeH2Block), []);
    });

    it("h1 после h2", () => {
      assert.deepEqual(linter(h1AfterH2Block), [
        {
          code: "TEXT.INVALID_H2_POSITION",
          error:
            "Заголовок второго уровня (блок text с модификатором type h2) не может находиться перед заголовком первого уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 38, line: 4 },
            end: { column: 50, line: 4 }
          }
        }
      ]);
    });

    it("h1 до h2 блоков", () => {
      assert.deepEqual(linter(h1BeforeH2Blocks), []);
    });

    it("h1 после h2 блоков", () => {
      assert.deepEqual(linter(h1AfterH2Blocks), [
        {
          code: "TEXT.INVALID_H2_POSITION",
          error:
            "Заголовок второго уровня (блок text с модификатором type h2) не может находиться перед заголовком первого уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 38, line: 4 },
            end: { column: 50, line: 4 }
          }
        },
        {
          code: "TEXT.INVALID_H2_POSITION",
          error:
            "Заголовок второго уровня (блок text с модификатором type h2) не может находиться перед заголовком первого уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 38, line: 5 },
            end: { column: 50, line: 5 }
          }
        }
      ]);
    });

    it("h1 до h2 на том же или более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(h1BeforeH2AtDifferentLvl), []);
    });

    it("h2 до h1 на том же или более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(h2AfterH1AtDifferentLvl), [
        {
          code: "TEXT.INVALID_H2_POSITION",
          error:
            "Заголовок второго уровня (блок text с модификатором type h2) не может находиться перед заголовком первого уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 46, line: 7 },
            end: { column: 58, line: 7 }
          }
        }
      ]);
    });

    it("h1 до h2 блоков на том же или более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(h1BeforeH2BlocksAtDifferentLvl), []);
    });

    it("h2 блоки до h1 на том же или более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(h1AfterH2BlocksAtDifferentLvl), [
        {
          code: "TEXT.INVALID_H2_POSITION",
          error:
            "Заголовок второго уровня (блок text с модификатором type h2) не может находиться перед заголовком первого уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 46, line: 7 },
            end: { column: 58, line: 7 }
          }
        },
        {
          code: "TEXT.INVALID_H2_POSITION",
          error:
            "Заголовок второго уровня (блок text с модификатором type h2) не может находиться перед заголовком первого уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 53, line: 11 },
            end: { column: 65, line: 11 }
          }
        }
      ]);
    });
  });

  describe("TEXT.INVALID_H3_POSITION", () => {
    const {
      h2BeforeH3Block,
      h2AfterH3Block,
      h2BlocksBeforeH3Blocks,
      h2BlocksAfterH3Blocks,
      h2BlocksBeforeH3AtDifferentLvl,
      h2AfterH3BlocksAtDifferentLvl,
      onlyH3AtDifferentLvl,
      onlyH2AtDifferentLvl
    } = headerBlocks;

    it("h2 до h3", () => {
      assert.deepEqual(linter(h2BeforeH3Block), []);
    });

    it("h2 после h3", () => {
      assert.deepEqual(linter(h2AfterH3Block), [
        {
          code: "TEXT.INVALID_H3_POSITION",
          error:
            "Заголовок третьего уровня (блок text с модификатором type h3) не может находиться перед заголовком второго уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 38, line: 4 },
            end: { column: 50, line: 4 }
          }
        }
      ]);
    });

    it("h2 блоки до h3 блоков", () => {
      assert.deepEqual(linter(h2BlocksBeforeH3Blocks), []);
    });

    it("h2 блоки после h3 блоков", () => {
      assert.deepEqual(linter(h2BlocksAfterH3Blocks), [
        {
          code: "TEXT.INVALID_H3_POSITION",
          error:
            "Заголовок третьего уровня (блок text с модификатором type h3) не может находиться перед заголовком второго уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 38, line: 4 },
            end: { column: 50, line: 4 }
          }
        },
        {
          code: "TEXT.INVALID_H3_POSITION",
          error:
            "Заголовок третьего уровня (блок text с модификатором type h3) не может находиться перед заголовком второго уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 38, line: 5 },
            end: { column: 50, line: 5 }
          }
        },
        {
          code: "TEXT.INVALID_H3_POSITION",
          error:
            "Заголовок третьего уровня (блок text с модификатором type h3) не может находиться перед заголовком второго уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 38, line: 4 },
            end: { column: 50, line: 4 }
          }
        },
        {
          code: "TEXT.INVALID_H3_POSITION",
          error:
            "Заголовок третьего уровня (блок text с модификатором type h3) не может находиться перед заголовком второго уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 38, line: 5 },
            end: { column: 50, line: 5 }
          }
        }
      ]);
    });

    it("h2 блоки до h3 на том же или более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(h2BlocksBeforeH3AtDifferentLvl), []);
    });

    it("h2 до h3 блоков на том же или более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(h2AfterH3BlocksAtDifferentLvl), [
        {
          code: "TEXT.INVALID_H3_POSITION",
          error:
            "Заголовок третьего уровня (блок text с модификатором type h3) не может находиться перед заголовком второго уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 46, line: 7 },
            end: { column: 58, line: 7 }
          }
        },
        {
          code: "TEXT.INVALID_H3_POSITION",
          error:
            "Заголовок третьего уровня (блок text с модификатором type h3) не может находиться перед заголовком второго уровня на том же или более глубоком уровне вложенности",
          location: {
            start: { column: 53, line: 11 },
            end: { column: 65, line: 11 }
          }
        }
      ]);
    });

    it("Только h3 на том же или более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(onlyH3AtDifferentLvl), []);
    });

    it("Только h2 на том же или более глубоком уровне вложенности", () => {
      assert.deepEqual(linter(onlyH2AtDifferentLvl), []);
    });
  });
});
