const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    linter: "./src/linter.js"
  },
  devServer: {
    index: "linter.html"
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve("dist")
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { cacheDirectory: true }
      }
    ]
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
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ["dist"] })
  ]
};
