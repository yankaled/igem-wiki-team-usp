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
    Contribution: {
      entry: "./src/views/Contribution/main.js",
      template: "public/index.html",
      title: "Contributions",
      chunks: ["chunk-vendors", "chunk-common", "Contribution"],
    },
    Safety: {
      entry: "./src/views/Safety/main.js",
      template: "public/index.html",
      title: "Safety",
      chunks: ["chunk-vendors", "chunk-common", "Safety"],
    },
    Medals: {
      entry: "./src/views/Medals/main.js",
      template: "public/index.html",
      title: "Medals",
      chunks: ["chunk-vendors", "chunk-common", "Medals"],
    },
    Parts: {
      entry: "./src/views/Parts/main.js",
      template: "public/index.html",
      title: "Parts",
      chunks: ["chunk-vendors", "chunk-common", "Parts"],
    },
    Attributions: {
      entry: "./src/views/Attributions/main.js",
      template: "public/index.html",
      title: "Attributions",
      chunks: ["chunk-vendors", "chunk-common", "Attributions"],
    },
    Sponsors: {
      entry: "./src/views/Sponsors/main.js",
      template: "public/index.html",
      title: "Sponsors",
      chunks: ["chunk-vendors", "chunk-common", "Sponsors"],
    },
    Collaborations: {
      entry: "./src/views/Collaborations/main.js",
      template: "public/index.html",
      title: "Collaborations",
      chunks: ["chunk-vendors", "chunk-common", "Collaborations"],
    },
    Proof_Of_Concept: {
      entry: "./src/views/Proof_Of_Concept/main.js",
      template: "public/index.html",
      title: "Proof_Of_Concept",
      chunks: ["chunk-vendors", "chunk-common", "Proof_Of_Concept"],
    },
  },

  devServer: {
    port: 8181,
    https: false,
    hotOnly: false,
  },
};
