var webpack = require("webpack");

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.js"],

  output: {
    path: __dirname + "/public/",
    filename: "bundle.js"
  },

  devServer: {
    hot: true,
    inline: true,
    port: 7777,
    contentBase: __dirname + "/public/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["es2015", "stage-0", "react"],
          plugins: ["react-hot-loader/babel"]
        }
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
};
