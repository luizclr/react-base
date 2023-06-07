const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    ...common.plugins,
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, "..", "public", "favicon.ico"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "..", "public", "_redirects"),
          to: path.resolve(__dirname, "..", "dist"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      ...common.module.rules,
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.prod.json",
        },
      },
    ],
  },
});
