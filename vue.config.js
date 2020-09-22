module.exports = {
  transpileDependencies: ["vuetify"],
  pages: {
    index: {
      entry: "src/main.js",
      title: "俺のホッピー居酒屋管理帳",
      keyword: "ホッピー居酒屋",
    },
  },
  pwa: {
    iconPaths: {
      favicon32: "img/icons/favicon.ico",
      favicon16: "img/icons/favicon.ico",
    },
  },
};
