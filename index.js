module.exports = {
  name: "ember-select-2",

  included: function (app) {
    this._super.included(app);

    app.import("node_modules/select2/dist/js/select2.js");

    // include assets if there are no options or includeAssets IS NOT false
    var includeAssets =
      app.options.select2 === undefined ||
      app.options.select2.includeAssets !== false;

    if (includeAssets) {
      app.import("node_modules/select2/dist/css/select2.css");
      // app.import("node_modules/select2/select2-bootstrap.css");
      // app.import("node_modules/select2/select2.png", { destDir: "assets" });
      // app.import("node_modules/select2/select2x2.png", { destDir: "assets" });
      // app.import("node_modules/select2/select2-spinner.gif", {
      //   destDir: "assets",
      // });
    }
  },
};
