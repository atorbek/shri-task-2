const path = require("path");
const rules = require("./webpack.config.rules");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [...rules]
  }
};
