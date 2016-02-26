/*
|--------------------------------------------------------------------------
| Script Gulp Task
|--------------------------------------------------------------------------
|
| Gulp tasks to handle the angular and other scripts 
| of the site. 
| 
|
*/
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');
var merge = require('merge-stream');

//Browserify shit.
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babel = require('babelify');
var pathmod = require('pathmodify');

var browserSync = require('browser-sync');
var plugins = require('gulp-load-plugins')({
   pattern: ['gulp-*', 'main-bower-files', 'del']
});



/*
|--------------------------------------------------------------------------
| Build the Scripts for the Files
|--------------------------------------------------------------------------
|
|
*/




gulp.task('vendor', function () {
      return gulp.src(plugins.mainBowerFiles(), { base: conf.bower.directory })
        .pipe(plugins.filter('**/*.js'))
        .pipe(plugins.chmod(666))
        .pipe(plugins.flatten())
        .pipe(plugins.uglify({
          mangleNames: false
        })).on('error',  conf.errorHandler('Uglify Vendor'))
        .pipe(plugins.concat('vendor-file.js'))
        .pipe(gulp.dest(path.join(conf.paths.min, '/assets/js/vendor')));
});


gulp.task('scripts', function () {
    return gulp.src([
        path.join(conf.paths.js, '**/*.js'),
        path.join('!' + conf.paths.js, '**/*.spec.js'),
        path.join('!' + conf.paths.js, '**/*.mock.js')
      ])
      .pipe(plugins.chmod(755))
      .pipe(plugins.babel({
            presets: ['es2015']
        }))
      .pipe(plugins.jshint()).on('error',  conf.errorHandler('Scripts'))
      .pipe(plugins.concat('app.js'))
      .pipe(gulp.dest(path.join(conf.paths.min, '/tmp')));
});



// gulp.task('dashboard-scripts', function () {


//     return gulp.src([
//         path.join(conf.paths.dashboard, '**/*.js'),
//         path.join('!' + conf.paths.dashboard, '**/*.spec.js'),
//         path.join('!' + conf.paths.dashboard, '**/*.mock.js')
//       ])
      
      
//       // .pipe(plugins.babel({
//       //       presets: ['es2015']
//       // })).on('error',  conf.errorHandler('Dashboard Babel'))
//       .pipe(browserify().bundle().on('error', conf.errorHandler('Dashboard')))
//       .pipe(source('dashboard.js'))
      
//     //   // .pipe(plugins.jshint()).on('error',  conf.errorHandler('Dashboard JsHINE'))
      
//     //   .pipe(browserified)
//     //   .pipe(plugins.concat('dashboard.js'))
//       .pipe(gulp.dest(path.join(conf.paths.min, '/assets/js')));
// });




function compile(filename, newName, watch) {
    var bundler = watchify(
      browserify(filename, { 
        debug: true 
      })
      .transform(babel)
      .plugin(pathmod(),  {
        mods: [
          pathmod.mod.dir('<name>', '<abs-path-to-directory>'),
        ]
      })
    );

    function rebundle () {
      bundler.bundle()
        .on('error', conf.errorHandler('Broswerify Compile'))
        .pipe(source(newName))
        .pipe(buffer())
        .pipe(gulp.dest(path.join(conf.paths.min, '/assets/js')));
    }

    if (watch) {
      bundler.on('update', function() {
        console.log('-> bundling...');
        rebundle();
      });
    }

    rebundle();
}


function watch(filename, newName) {
  return compile(filename, newName, true);
}

function bundle(filename, newName) {
  return compile(filename, newName, false);
}

gulp.task('dashboard-scripts', function () {
  return watch(path.join(conf.paths.dashboard, 'dashboard.js'), 'dashboard.js');
})



