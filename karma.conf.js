process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "chai"],
    files: ["test/**/*.js"],
    preprocessors: {
      "test/**/*.js": ["webpack", "sourcemap"]
    },
    webpack: require("./webpack.config.test"),
    webpackMiddleware: {
      stats: "errors-only"
    },
    reporters: ["mocha"],
    port: 9876,
    browsers: ["ChromeHeadless"],
    captureTimeout: 20000,
    singleRun: true,
    plugins: [
      require("karma-mocha"),
      require("karma-chai"),
      require("karma-webpack"),
      require("karma-mocha-reporter"),
      require("karma-sourcemap-loader"),
      require("karma-chrome-launcher")
    ]
  });
};
