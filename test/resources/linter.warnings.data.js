export const warningBlocks = {
  sizesDifferentOnDeeperLvl: `{
    "block": "warning",
    "content": [
        {
            "block": "button",
            "mods": { "size": "m" }
        },
        {
            "elem": "content",
            "content": [
                {
                    "block": "text",
                    "mods": { "size": "m" }
                },
                {
                    "block": "text",
                    "mods": { "size": "l" }
                }
            ]
        }
    ]
}`,
  sizesEqualOnDeeperLvl: `{
    "block": "warning",
    "content": [
        {
            "block": "button",
            "mods": { "size": "m" }
        },
        {
            "elem": "content",
            "content": [
                {
                    "block": "text",
                    "mods": { "size": "l" }
                },
                {
                    "block": "text",
                    "mods": { "size": "l" }
                }
            ]
        }
    ]
}`,
  onlyRefTextSizeOnDeeperLvl: `{
    "block": "warning",
    "content": [
        {
            "block": "button",
            "mods": { "size": "m" }
        },
        {
            "elem": "content",
            "content": [
                {
                    "block": "text",
                    "mods": { "size": "l" }
                }
            ]
        }
    ]
}`,
  noTextsAndButtons: `{
    "block": "warning",
    "content": [
        {
            "block": "input",
            "mods": { "size": "m" }
        }
    ]
}`,
  textAndButtonOnDeeperLvl: `{
    "block": "warning",
    "content": [
        {
            "block": "input",
            "mods": { "size": "m" }
        },
        {
            "elem": "content",
            "content": [
                {
                    "block": "button",
                    "mods": { "size": "s" }
                },
                {
                    "block": "text",
                    "mods": { "size": "l" }
                }
            ]
        }
    ]
}`,
  textWithoutSizeAndButtonOnDeeperLvl: `{
    "block": "warning",
    "content": [
        {
            "block": "input",
            "mods": { "size": "m" }
        },
        {
            "elem": "content",
            "content": [
                {
                    "block": "text",
                    "mods": { "size": "s" }
                },
                {
                    "block": "text",
                    "mods": { "type": "h1" }
                }
            ]
        }
    ]
}`,
  textWithoutSizeOnDeeperLvl: `{
    "block": "warning",
    "content": [
        {
            "block": "input",
            "mods": { "size": "m" }
        },
        {
            "elem": "content",
            "content": [
                {
                    "block": "text",
                    "mods": { "type": "h1" }
                }
            ]
        }
    ]
}`,
  sizesDifferentAtDifferentLvl: `{
    "block": "warning",
    "content": [
        {
            "block": "text",
            "mods": { "size": "l" }
        },
        {
            "elem": "content",
            "content": [
                {
                    "block": "text",
                    "mods": { "size": "s" }
                }
            ]
        }
    ]
}`,
  sizesEqualAtDifferentLvl: `{
    "block": "warning",
    "content": [
        {
            "block": "text",
            "mods": { "size": "l" }
        },
        {
            "elem": "content",
            "content": [
                {
                    "block": "text",
                    "mods": { "size": "l" }
                }
            ]
        }
    ]
}`,

  sizeIsOneStepLargerRef: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "size": "l" } },
        { "block": "button", "mods": { "size": "xl" } }
    ]
}`,
  sizeIsEqualToRef: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "size": "l" } },
        { "block": "button", "mods": { "size": "l" } }
    ]
}`,

  sizeIsTwoStepLargerRef: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "size": "l" } },
        { "block": "button", "mods": { "size": "xxl" } }
    ]
}`,

  sizeIsTwoStepLargerRefAtDifferentLvl: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "size": "l" } },
        {
            "elem": "content",
            "content": [
                { "block": "button", "mods": { "size": "xxl" } }
            ]
        }
    ]
}`,

  sizeIsOneStepLargerRefAtDifferentLvl: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "size": "l" } },
        {
            "elem": "content",
            "content": [
                { "block": "button", "mods": { "size": "xl" } }
            ]
        }
    ]
}`,

  sizeIsEqualToRefAtDifferentLvl: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "size": "l" } },
        {
            "elem": "content",
            "content": [
                { "block": "button", "mods": { "size": "l" } }
            ]
        }
    ]
}`,

  onlyRefButtonSizeOnDeeperLvl: `{
    "block": "warning",
    "content": [
        {
            "elem": "content",
            "content": [
                { "block": "button", "mods": { "size": "l" } }
            ]
        }
    ]
}`,

  placeholderBeforeButton: `{
    "block": "warning",
    "content": [
        { "block": "placeholder", "mods": { "view": "primary" } },
        { "block": "button", "mods": { "width": "full" } }
    ]
}`,

  placeholderAfterButton: `{
    "block": "warning",
    "content": [
        { "block": "button", "mods": { "width": "full" } },
        { "block": "placeholder", "mods": { "view": "primary" } }
    ]
}`,

  placeholderBeforeButtonAtDifferentLvl: `{
    "block": "warning",
    "content": [
        { "block": "placeholder", "mods": { "view": "primary" } },
        {
            "elem": "content",
            "content": [
                { "block": "button", "mods": { "width": "full" } }
            ]
        }
    ]
}`,

  placeholderAfterButtonAtDifferentLvl: `{
    "block": "warning",
    "content": [
        {
            "elem": "content",
            "content": [
                { "block": "button", "mods": { "width": "full" } }
            ]
        },
        { "block": "placeholder", "mods": { "view": "primary" } }
    ]
}`,

  onlyPlaceholder: `{
    "block": "warning",
    "content": [
        { "block": "placeholder", "mods": { "view": "primary" } }
    ]
}`,

  placeholderBetweenButtons: `{
    "block": "warning",
    "content": [
        { "block": "button", "mods": { "width": "full" } },
        { "block": "placeholder", "mods": { "view": "primary" } },
        { "block": "button", "mods": { "width": "full" } }
    ]
}`,

  placeholderBetweenButtonsAtDifferentLvl: `{
    "block": "warning",
    "content": [
        {
            "elem": "content",
            "content": [
                { "block": "button", "mods": { "width": "full" } }
            ]
        },
        { "block": "placeholder", "mods": { "view": "primary" } },
        {
            "elem": "content",
            "content": [
                { "block": "button", "mods": { "width": "full" } }
            ]
        }
    ]
}`,

  buttonsBeforePlaceholder: `{
    "block": "warning",
    "content": [
        { "block": "button", "mods": { "width": "full" } },
        { "block": "button", "mods": { "width": "full" } },
        { "block": "placeholder", "mods": { "view": "primary" } }
    ]
}`,

  buttonsAfterPlaceholder: `{
    "block": "warning",
    "content": [
        { "block": "placeholder", "mods": { "view": "primary" } },
        { "block": "button", "mods": { "width": "full" } },
        { "block": "button", "mods": { "width": "full" } }
    ]
}`,

  buttonsBeforePlaceholderAtDifferentLvl: `{
    "block": "warning",
    "content": [
        {
            "elem": "content",
            "content": [
                { "block": "button", "mods": { "width": "full" } },
                { "block": "button", "mods": { "width": "full" } }
            ]
        },
         {
            "elem": "content",
            "content": [
                { "block": "placeholder", "mods": { "view": "primary" } }
            ]
        }
    ]
}`,
  buttonsAfterPlaceholderAtDifferentLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "placeholder", "mods": { "view": "primary" } }
            ]
        },
        {
            "elem": "content",
            "content": [
                { "block": "button", "mods": { "width": "full" } },
                { "block": "button", "mods": { "width": "full" } }
            ]
        }
    ]
}`,

  validPlaceholderSizes: `{
    "block": "warning",
    "content": [
        { "block": "placeholder", "mods": { "size": "s" } },
        { "block": "placeholder", "mods": { "size": "m" } },
        { "block": "placeholder", "mods": { "size": "l" } }
    ]
}`,

  invalidPlaceholderSizes: `{
    "block": "warning",
    "content": [
        { "block": "placeholder", "mods": { "size": "xl" } }
    ]
}`,

  validPlaceholderSizesOnDeeperLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "placeholder", "mods": { "size": "s" } },
                { "block": "placeholder", "mods": { "size": "m" } },
                { "block": "placeholder", "mods": { "size": "l" } }
            ]
        }
    ]
}`,

  invalidPlaceholderSizesOnDeeperLvl: `{
    "block": "warning",
    "content": [
         {
            "elem": "content",
            "content": [
                { "block": "placeholder", "mods": { "size": "xl" } }
            ]
        }
    ]
}`
};
