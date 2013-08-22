Package.describe({
  summary: "Tiny ~1200 byte Express-inspired client-side router"
});

Package.on_use(function (api, where) {
  // support Meteor v0.6.5
  api.use('HTML5-History-API', 'client');
  api.add_files('page-js/index.js', 'client');
});
