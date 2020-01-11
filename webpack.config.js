const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const rules = require("./webpack.config.rules");

module.exports = {
  entry: {
    linter: "./src/linter.js"
  },
  devServer: {
    index: "linter.html"
  },
  output: {
    filename: "linter.js",
    path: path.resolve("build")
  },
  devtool: "source-map",
  module: {
    rules: [...rules]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: "Linter",
      filename: "linter.html"
    }),
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ["build"] })
  ]
};
