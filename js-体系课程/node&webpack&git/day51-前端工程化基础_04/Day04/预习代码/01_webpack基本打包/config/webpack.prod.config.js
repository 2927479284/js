const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { merge } = require("webpack-merge")

const webpackCommonConfig = require("./webpack.comm.config")

module.exports = merge(webpackCommonConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin()
  ]
})
