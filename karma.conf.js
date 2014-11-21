/**
 * Created by bob on 20-11-14.
 */
module.exports = function(config) {
  config.set({
    // at a minimum need requirejs + traceur
    frameworks: ['jasmine', 'requirejs','traceur'],

    preprocessors: {
      'src/**/*.es6': ['traceur']
    },

    browsers: ['Chrome'],

    files: [
      {pattern: 'src/**/*.es6', included: false},
//      {pattern: 'test/**/*.js', included: false},
      {pattern: 'test/**/*Spec.js', included: false},
      {pattern: 'src/**/*', included: false},
      'test/test-main.js'

    ],

    // default configuration, not required
    traceurPreprocessor: {
      // options passed to the traceur-compiler
      // see traceur --longhelp for list of options
      options: {
        sourceMaps: false,
        modules: 'amd'
      },
      // custom filename transformation function
      transformPath: function(path) {
        return path.replace(/\.es6$/, '.js');
      }
    },
    singleRun: true

  });
};