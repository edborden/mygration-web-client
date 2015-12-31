/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mygration-web-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {FEATURES: {}},
    APP: {},
    firebase: 'https://mygration-testing.firebaseio.com/',
    torii: {
      sessionServiceName: 'session'
    },
    contentSecurityPolicy: {
      'connect-src': "'self' wss://*.firebaseio.com https://worker-aws-us-east-1.iron.io",
      'frame-src': "'self' https://*.firebaseio.com",
      'script-src': "'self' 'unsafe-eval' https://*.firebaseio.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.environment = 'production';
    firebase: 'https://crackling-heat-9174.firebaseio.com/';
  }

  if (environment === 'production') {
    firebase: 'https://mygration.firebaseio.com/';
  }

  return ENV;
};
