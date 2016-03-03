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
      return gulp.src([
            path.join(conf.bower.directory, 'jquery/dist/jquery.js'),
            path.join(conf.bower.directory, 'jquery-touch-events/src/1.0.1/jquery.mobile-events.js'),
            path.join(conf.bower.directory, 'jquery-ujs/src/rails.js'),
            path.join(conf.bower.directory, 'jquery/moment/src/moment.js'),
            path.join(conf.bower.directory, 'materialize/dist/js/materialize.js'),
            path.join(conf.bower.directory, 'mustache.js/mustache.js')
        ])
        .pipe(plugins.chmod(666))
        .pipe(plugins.flatten())
        // .pipe(plugins.uglify({
        //   mangleNames: false
        // })).on('error',  conf.errorHandler('Uglify Vendor'))
        .pipe(plugins.concat('vendor.min.js'))
        .pipe(gulp.dest(path.join(conf.paths.min, '/js')));
});


gulp.task('js', function () {
  return gulp.src([
      path.join(conf.paths.js, '/site/**/*.js')
    ])
    .pipe(plugins.chmod(755))
    .pipe(plugins.flatten())
    .pipe(plugins.sourcemaps.init())
    // .pipe(plugins.uglify()).on('error', conf.errorHandler('compiling site Script Files'))
    .pipe(plugins.concat('app.min.js'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.min, '/js')))
});


gulp.task('js-dashboard', function () {
  return gulp.src([
      path.join(conf.paths.js, '/dashboard/**/*.js')
    ])
    .pipe(plugins.chmod(755))
    .pipe(plugins.flatten())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.uglify()).on('error', conf.errorHandler('compiling dashboard script Files'))
    .pipe(plugins.concat('dashboard.min.js'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.min, '/js')))
});



gulp.task('templates', function () {
    return gulp.src([
        path.join(conf.paths.js, '/site/templates/**/*.mst')
    ])
    .pipe(plugins.minifyHtml())
    .pipe(gulp.dest(path.join(conf.paths.min, '/js/templates/')))
})


/**
 * Build the scripts and send them to S3
*/
// gulp.task('build-scripts', ['vendor', 'js', 'js-dashboard'], function () {
//       .pipe(plugins.concat('app.min.js'))
//       .pipe(plugins.uglify()).on('error', conf.errorHandler('Building Script Files'))
//       .pipe(plugins.gzip())
//       .pipe(plugins.s3(conf.amazon, conf.awsOptions('scripts'))).on('error', conf.errorHandler('Uploading Scripts'))
//       .pipe(gulp.dest(path.join(conf.paths.min, '/assets/scripts')));
// });

