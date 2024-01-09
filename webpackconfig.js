const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./client",
  },

  modules: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
};