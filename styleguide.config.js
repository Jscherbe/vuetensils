const vueLoader = require("vue-loader")

module.exports = {
  components: "src/components/**/[A-Z]*.vue",
  // defaultExample: true,
  // version: "1.1.1",
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  usageMode: "expand",
  exampleMode: "expand",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [new vueLoader.VueLoaderPlugin()]
  }
}
