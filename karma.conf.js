var istanbul = require('browserify-istanbul');
var isparta = require('isparta');
var threshold = require('karma-threshold-reporter');

module.exports = function (config) {
  config.set({
    client: {
      args: ['--autoWatch', config.autoWatch],
      jasmine: {
        API_KEY: process.env.npm_config_apikey,
      }
    }
  });

  config.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    files: [
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      './node_modules/promise-polyfill/promise.js',
      'node_modules/jasmine-promises/dist/jasmine-promises.js',
      'src/scripts/model/api.js',
      'spec/api.spec.js'
    ],
    included: false,
    browserify: {
      debug: true,
      transform: [istanbul({
        instrumenter: isparta,
        instrumenterConfig: { embedSource: true },
        ignore: ['**/node_modules/**']
      }),
      ['babelify']],
      configure: function (bundle) {
        bundle.on('prebundle', function () {
          bundle.external('react/addons');
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      },
      extensions: ['.js', '.jsx'],
      bundleDelay: 1000
    },
    preprocessors: {
      'src/scripts/model/api.js': ['sourcemap', 'babel', 'browserify'],
      'spec/api.spec.js': ['sourcemap', 'babel', 'browserify']
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {
          type: 'lcov',
          subdir: 'report-lcov'
        }
      ]
    },
    plugins: [
      'karma-coverage',
      'karma-browserify',
      'karma-webpack',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-threshold-reporter',
      'karma-sourcemap-loader',
      'karma-remap-coverage',
      'karma-babel-preprocessor',
      'karma-phantomjs-launcher',
      'karma-coveralls'
    ],
    reporters: ['spec', 'coverage', 'remap-coverage', 'threshold', 'coveralls'],
    thresholdReporter: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    },
    port: 9876,
    colors: true,
    browserNoActivityTimeout: 60000,
    logLevel: config.LOG_ERROR,
    autoWatch: config.autoWatch,
    browsers: ['PhantomJS'],
    singleRun: !config.autoWatch,
    concurrency: Infinity
  })
}
