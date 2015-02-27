/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'smhw-admin',
    podModulePrefix: 'smhw-admin/pods',
    environment: environment,
    baseURL: '/',
    host: 'http://localhost:4200',
    locationType: 'auto',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' data: cloud.typography.com maxcdn.bootstrapcdn.com",
      'connect-src': "'self' localhost:3000",
      'img-src': "'self' www.facebook.com p.typekit.net",
      'style-src': "'self' 'unsafe-inline'  maxcdn.bootstrapcdn.com",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        "new-computed-syntax": null
      }
    },

    APP: {
      defaultLocale: 'en'
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: '/api/v1/oauth/token?client_id=ec1f8f758294ef3838d5e178cc7c45454dd9fa75843dda5a131179c42accdca3&client_secret=e460aac4c862e5452ec34f230c12dbacd15284a2fab3e5eeb4b6a6f73289ae65'
    }
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      routeAfterAuthentication: 'schools',
      routeIfAlreadyAuthenticated: 'schools',
      crossOriginWhitelist: ['http://localhost:3000']
    }
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    // ENV.APP.LOG_RESOLVER = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    ENV['simple-auth'] = {
      store: 'simple-auth-session-store:ephemeral'
    }
    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: 'https://staging2.showmyhomework.co.uk/api/v1/oauth/token?client_id=ec1f8f758294ef3838d5e178cc7c45454dd9fa75843dda5a131179c42accdca3&client_secret=e460aac4c862e5452ec34f230c12dbacd15284a2fab3e5eeb4b6a6f73289ae65'
    }
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      routeAfterAuthentication: 'schools',
      routeIfAlreadyAuthenticated: 'schools',
      crossOriginWhitelist: ['https://staging2.showmyhomework.co.uk']
    }
  }

  return ENV;
};
