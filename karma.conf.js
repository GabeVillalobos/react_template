const path = require('path');
module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: [
      // 'node_modules/babel-polyfill/dist/polyfill.js',
      'test/**/*.js'
    ],
    preprocessors: {
      'lib/mainContainer.jsx': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['es2015', 'es2016', 'react']
            }
          }, {
            test: /\.json$/,
            loader: 'json-loader',
          }, {
            test   : /\.(less|css)$/,
            loader : 'null-loader'
          }
        ]
      },
      externals: {
        cheerio: 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
        'react-addons-test-utils': 'react-dom', // <- added this
      }
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['nyan'],
    nyanReporter: {
      suppressErrorHighlighting: true,
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
  });
};
