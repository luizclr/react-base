const path = require("path");

const {
  override,
  addWebpackAlias,
  addWebpackPlugin,
} = require("customize-cra");
const Obfuscator = require("webpack-obfuscator");

const jestConfig = require("./jest.config");
const obfuscatorConfig = require("./obfuscator.config");

const overrides = [
  addWebpackAlias({
    "~": path.resolve(__dirname, "./src/"),
    "#": path.resolve(__dirname, "./tests/"),
  }),
];

if (process.env.WEBPACK_ENABLE_JS_OBFUSCATOR === "true") {
  overrides.push(addWebpackPlugin(new Obfuscator(obfuscatorConfig)));
}

module.exports = {
  webpack: override(...overrides),
  jest: function (config) {
    return { ...config, ...jestConfig };
  },
};
