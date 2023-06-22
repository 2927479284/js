const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // assetModuleFilename: "img/[name]_[hash:6][ext]"
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // { loader: "style-loader" },
          // { loader: "css-loader" },
          // { loader: "postcss-loader" }
          "style-loader", "css-loader", 
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
          "postcss-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 40 * 1024
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}