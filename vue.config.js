function createGraphQLRule(config, type, loader) {
  const re = new RegExp(`blockType=(${type})`);

  config.module
    .rule(type)
    .resourceQuery(re)
    .use("babel-loader")
    .loader("babel-loader")
    .options({
      presets: [require.resolve("@vue/babel-preset-app")]
    })
    .end()
    .use(`${type}-loader`)
    .loader(require.resolve(loader))
    .options({
      gridsomeGraphqlEndpoint: "http://localhost:8080/___graphql"
    });
}

module.exports = {
  devServer: {
    port: 3000
  },
  chainWebpack: config => {
    createGraphQLRule(
      config,
      "static-query",
      "gridsome/lib/plugins/vue-components/lib/loaders/static-query.js"
    );
  }
};
