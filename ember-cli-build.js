/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
      optional: ['es7.decorators']
    },
    'ember-cli-qunit': {
      useLintTree: false
    },
    inlineContent: {
      favicon: { content: "<link rel='icon' href='/assets/images/favicon.ico'>" }
    }
  });

  var pickFiles = require('broccoli-funnel');
  var mergeTrees = require('broccoli-merge-trees');

  // Font-Awesome
  var fontAwesomeFonts = pickFiles('bower_components/components-font-awesome/fonts', {
    destDir: '/fonts'
  });

  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Thin.woff2', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Thin.woff', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Thin.ttf', { destDir: 'font/roboto' });

  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Light.woff2', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Light.woff', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Light.ttf', { destDir: 'font/roboto' });

  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Regular.woff2', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Regular.woff', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Regular.ttf', { destDir: 'font/roboto' });

  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Medium.woff2', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Medium.woff', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Medium.ttf', { destDir: 'font/roboto' });

  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Bold.woff2', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Bold.woff', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Bold.ttf', { destDir: 'font/roboto' });

  return mergeTrees([app.toTree(),fontAwesomeFonts]);
};