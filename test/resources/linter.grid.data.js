export const marketingBlocks = {
  lessThanOrEqualToHalf: `{
   "block": "grid",
   "mods": {
       "m-columns": "10"
   },
   "content": [
       {
           "block": "grid",
           "elem": "fraction",
           "elemMods": {
               "m-col": "8"
           },
           "content": [
               {
                   "block": "payment"
               }
           ]
       },
       {
           "block": "grid",
           "elem": "fraction",
           "elemMods": {
               "m-col": "2"
           },
           "content": [
               {
                   "block": "offer"
               }
           ]
       }
   ]
}`,

  moreThanHalf: `{
   "block": "grid",
   "mods": {
       "m-columns": "10"
   },
   "content": [
       {
           "block": "grid",
           "elem": "fraction",
           "elemMods": {
               "m-col": "4"
           },
           "content": [
               {
                   "block": "payment"
               }
           ]
       },
       {
           "block": "grid",
           "elem": "fraction",
           "elemMods": {
               "m-col": "6"
           },
           "content": [
               {
                   "block": "offer"
               }
           ]
       }
   ]
}`
};
