module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/mealplanner/" : "/",
  configureWebpack: {
    devtool: "source-map",
  },
  pwa: {
    name: "Essensplan",
    themeColor: "#302f3d",
    msTileColor: "#302f3d",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
  },
};
