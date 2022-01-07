const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const cssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s?css$/i,
        use: [cssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new cssExtractPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
