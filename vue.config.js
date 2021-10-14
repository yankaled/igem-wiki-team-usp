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
    Education: {
      entry: "./src/views/Education/main.js",
      template: "public/index.html",
      title: "Education",
      chunks: ["chunk-vendors", "chunk-common", "Education"],
    },
    Members: {
      entry: "./src/views/Members/main.js",
      template: "public/index.html",
      title: "Members",
      chunks: ["chunk-vendors", "chunk-common", "Members"],
    },
    Description: {
      entry: "./src/views/Description/main.js",
      template: "public/index.html",
      title: "Description",
      chunks: ["chunk-vendors", "chunk-common", "Description"],
    },
    Design: {
      entry: "./src/views/Design/main.js",
      template: "public/index.html",
      title: "Design",
      chunks: ["chunk-vendors", "chunk-common", "Design"],
    },
    Entrepreneurship: {
      entry: "./src/views/Entrepreneurship/main.js",
      template: "public/index.html",
      title: "Entrepreneurship",
      chunks: ["chunk-vendors", "chunk-common", "Entrepreneurship"],
    },
    Contributions: {
      entry: "./src/views/Contributions/main.js",
      template: "public/index.html",
      title: "Contributions",
      chunks: ["chunk-vendors", "chunk-common", "Contributions"],
    },
    Safety: {
      entry: "./src/views/Safety/main.js",
      template: "public/index.html",
      title: "Safety",
      chunks: ["chunk-vendors", "chunk-common", "Safety"],
    },
  },

  devServer: {
    port: 8181,
    https: false,
    hotOnly: false,
  },
};
