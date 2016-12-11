/// <binding AfterBuild='default' ProjectOpened='default' />
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var color = require('gulp-color');
var webpack = require('webpack');
var path = require('path');
const config = require('./build.config.js');

const argv = require('minimist')(process.argv.slice(2));
const ENV = argv.env === 'prod' ? 'prod' : 'dev';
console.log(color(ENV.toUpperCase() + ' CONFIGURATION', 'RED'));

// get paths from build.config
const paths = config.paths;
const webpackConfig = config.webpack;

// get webpack config from build.config
if (ENV === 'prod') {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        properties: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        booleans: true,
        unused: true,
        loops: true,
        hoist_funs: true,
        cascade: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true,
        unsafe: true,
        hoist_vars: true,
        negate_iife: true,
        side_effects: true
      },
      mangle: {
        toplevel: true,
        sort: true,
        eval: true,
        properties: true
      },
      output: {
        space_colon: false,
        comments: function (node, comment) {
          return false;
        }
      },
      comments: function (node, comment) {
        return false;
      }
    })
  ]);
  webpackConfig.devtool = 'source-map';
}


// Check the source for format rules
gulp.task('lint',
  function () {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src([paths.js.source + '**/*.js'])
      // eslint() attaches the lint output to the "eslint" property
      // of the file object so it can be used by other modules.
      .pipe(eslint({
        rules: {
          'quotes': 2
        }
      }))
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failAfterError last.
      .pipe(eslint.failAfterError());
  });


gulp.task('bundle-scripts', done => {
    console.log(`Updating javascript...`);
    webpack(webpackConfig).run((err, stats) => {
        console.log(err ? err : stats.toString({
            chunks: false,
            hash: false,
            assets: false,
            timings: false,
            version: false,
            warnings: false
        }));
        done();
    });
});

gulp.task('build', ['bundle-scripts', 'watch']);

// The Watcher
gulp.task('watch', [],
  function () {
    gulp.watch([paths.js.source + '**/*.{js,jsx}'],['bundle-scripts']);
  });

gulp.task('default', ['bundle-scripts']);

// global error formatting
function errorHandeling(_taskName, _err) {
  console.log('\n' + color('---', 'RED') + '\n' + color('OOPS!!! ' + _taskName + ' ran into an erorr!', 'RED') +'\n' + _err.toString() + '\n' + color('---', 'RED'));
}
