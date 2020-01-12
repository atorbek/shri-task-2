export const headerBlocks = {
  h1ShouldBeOnlyOne: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "type": "h1" } }
    ]
}`,

  h1ShouldBeOnlyOneOnDeeperLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "text", "mods": { "type": "h1" } }
            ]
        }
    ]
}`,

  h1NotAlone: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "type": "h1" } },
        { "block": "text", "mods": { "type": "h1" } }
    ]
}`,

  h1NotAloneOnDeeperLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "text", "mods": { "type": "h1" } },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h1" } }
                    ]
                }
            ]
        }
    ]
}`,
  h1BeforeH2Block: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "type": "h1" } },
        { "block": "text", "mods": { "type": "h2" } }
    ]
}`,

  h1AfterH2Block: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "type": "h2" } },
        { "block": "text", "mods": { "type": "h1" } }
    ]
}`,

  h1BeforeH2Blocks: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "type": "h1" } },
        { "block": "text", "mods": { "type": "h2" } },
        { "block": "text", "mods": { "type": "h2" } }
    ]
}`,

  h1AfterH2Blocks: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "type": "h2" } },
        { "block": "text", "mods": { "type": "h2" } },
        { "block": "text", "mods": { "type": "h1" } }
    ]
}`,
  h1BeforeH2AtDifferentLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "text", "mods": { "type": "h1" } },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h2" } }
                    ]
                }
            ]
        }
    ]
}`,

  h2AfterH1AtDifferentLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "text", "mods": { "type": "h2" } },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h1" } }
                    ]
                }
            ]
        }
    ]
}`,

  h1BeforeH2BlocksAtDifferentLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "text", "mods": { "type": "h1" } },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h2" } }
                    ]
                },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h2" } }
                    ]
                }
            ]
        }
    ]
}`,

  h1AfterH2BlocksAtDifferentLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "text", "mods": { "type": "h2" } },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h2" } }
                    ]
                },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h1" } }
                    ]
                }
            ]
        }
    ]
}`,

  h2BeforeH3Block: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "type": "h2" } },
        { "block": "text", "mods": { "type": "h3" } }
    ]
}`,

  h2AfterH3Block: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "type": "h3" } },
        { "block": "text", "mods": { "type": "h2" } }
    ]
}`,

  h2BlocksBeforeH3Blocks: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "type": "h2" } },
        { "block": "text", "mods": { "type": "h2" } },
        { "block": "text", "mods": { "type": "h3" } },
        { "block": "text", "mods": { "type": "h3" } }
    ]
}`,

  h2BlocksAfterH3Blocks: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "type": "h3" } },
        { "block": "text", "mods": { "type": "h3" } },
        { "block": "text", "mods": { "type": "h2" } },
        { "block": "text", "mods": { "type": "h2" } }
    ]
}`,

  h2BlocksBeforeH3AtDifferentLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "text", "mods": { "type": "h2" } },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h2" } }
                    ]
                },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h3" } }
                    ]
                }
            ]
        }
    ]
}`,

  h2AfterH3BlocksAtDifferentLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "text", "mods": { "type": "h3" } },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h3" } }
                    ]
                },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h2" } }
                    ]
                }
            ]
        }
    ]
}`,

  onlyH3AtDifferentLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "text", "mods": { "type": "h3" } },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h3" } }
                    ]
                }
            ]
        }
    ]
}`,

  onlyH2AtDifferentLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "text", "mods": { "type": "h2" } },
                {
                    "elem": "content",
                    "content": [
                       { "block": "text", "mods": { "type": "h2" } }
                    ]
                }
            ]
        }
    ]
}`
};
