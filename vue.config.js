const path = require("path")

module.exports = {
  assetsDir: "assets",
  lintOnSave: true,
  outputDir: "dist",
  parallel: true,
  productionSourceMap: false,
  publicPath: "/",
  runtimeCompiler: false,

  css: {
    extract: process.env.VUE_CLI_MODE === "production",
    sourceMap: true
  },

  devServer: {
    port: 8181,
    https: false,
    hotOnly: false
  }
}
