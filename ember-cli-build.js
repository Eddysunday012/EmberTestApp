'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      // config: 'postcss.config.js',
      compile: {
        enabled: true,
        cacheInclude: [/.*\.(css|scss|sass|less)$/],
        plugins: [
          { module: require('postcss-import') }, // If you installed postcss-import
          require('tailwindcss')('./tailwind.config.js'), // If you have a Tailwind config file.
        ],
      },
      // filter: {
      //   enabled: false, // defaults to false
      //   map: false, // defaults to inline, false in production
      //   browsers: ['last 3 versions'], // this will override config found in config/targets.js
      //   include: ['styles/*.css'],
      //   exclude: ['vendor/bootstrap/**/*'],
      //   processTrees: ['css'],
      // },
    }, // Add options here
  });

  return app.toTree();
};
