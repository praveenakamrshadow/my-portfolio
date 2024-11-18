// config-overrides.js
module.exports = {
    // You can override Webpack configurations here, if needed.
    // For example:
    webpack: function (config, env) {
      // Example of adding a new plugin
      config.plugins.push(new MyCustomPlugin());
      return config;
    },
  };
  