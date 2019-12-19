const gridsome = require("./node_modules/gridsome/lib/explore");

class GridsomePlugin {
  async waitForGridsome(params, callback) {
    await gridsome(process.cwd());
    callback();
  }
  apply(compiler) {
    compiler.hooks.beforeRun.tapAsync(
      "Gridsome Plugin Build",
      this.waitForGridsome
    );
    compiler.hooks.watchRun.tapAsync(
      "Gridsome Plugin Serve",
      this.waitForGridsome
    );
  }
}

module.exports = api => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.plugin("gridsome").use(GridsomePlugin);
  });
};
