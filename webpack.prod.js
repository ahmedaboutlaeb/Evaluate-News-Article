const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/client/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s?css$/i,
        use: [CssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    //documentation
    new CssExtractPlugin(),

    new WorkboxPlugin.GenerateSW({
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],

      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

          handler: "CacheFirst",
          options: {
            cacheName: "images",

            expiration: {
              maxEntries: 10,
            },
          },
        },
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
