module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/mealplanner/" : "/",
  configureWebpack: {
    devtool: "source-map",
  },
  pwa: {
    name: "Meal Planner",
    themeColor: "#03a9f4",
    msTileColor: "#3b3b3b",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "public/service-worker.js",
      // ...other Workbox options...
    },
  },
};
