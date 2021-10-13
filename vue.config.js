module.exports = {
  assetsDir: "assets",
  lintOnSave: true,
  outputDir: "dist",
  productionSourceMap: false,
  publicPath: '/',

  pages: {
    'index': {
      entry: './src/views/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'members': {
      entry: './src/views/Members/main.js',
      template: 'public/index.html',
      title: 'Members',
      chunks: [ 'chunk-vendors', 'chunk-common', 'members' ]
    }
  },

  devServer: {
    port: 8181,
    https: false,
    hotOnly: false
  }
}
