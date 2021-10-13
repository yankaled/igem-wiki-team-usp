module.exports = {
  assetsDir: "assets",
  lintOnSave: true,
  outputDir: "dist",
  productionSourceMap: false,
  publicPath: "/",

  pages: {
    index: {
      entry: "./src/views/Home/main.js",
      template: "public/index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    education: {
      entry: "./src/views/Education/main.js",
      template: "public/index.html",
      title: "Education",
      chunks: ["chunk-vendors", "chunk-common", "education"],
    },
    members: {
      entry: "./src/views/Members/main.js",
      template: "public/index.html",
      title: "Members",
      chunks: ["chunk-vendors", "chunk-common", "members"],
    },
    Description: {
      entry: "./src/views/Description/main.js",
      template: "public/index.html",
      title: "Description",
      chunks: ["chunk-vendors", "chunk-common", "Description"],
    },
  },

  devServer: {
    port: 8181,
    https: false,
    hotOnly: false,
  },
};
