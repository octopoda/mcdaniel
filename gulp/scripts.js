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
      return gulp.src(plugins.mainBowerFiles(), { base: conf.bower.directory })
        .pipe(plugins.filter('**/*.js'))
        .pipe(plugins.chmod(666))
        .pipe(plugins.flatten())
        .pipe(plugins.uglify({
          mangleNames: false
        })).on('error',  conf.errorHandler('Uglify Vendor'))
        .pipe(plugins.concat('vendor-file.js'))
        .pipe(gulp.dest(path.join(conf.paths.min, '/tmp')));
});


gulp.task('angular', function () {
    return gulp.src([
        path.join(conf.paths.js, '**/*.module.js'),
        path.join(conf.paths.js, '**/*.js'),
        path.join('!' + conf.paths.js, '**/*.spec.js'),
        path.join('!' + conf.paths.js, '**/*.mock.js')
      ])
      .pipe(plugins.chmod(755))
      .pipe(plugins.ngAnnotate()).on('error',  conf.errorHandler('Angular Annotate'))
      .pipe(plugins.ngAnnotateCheck({
            options: { "single_quotes": true },
            callback: function (diff, fileName) {
                console.log(fileName);
                console.log(diff);
            }
      }))
      .pipe(plugins.jshint())
      .pipe(plugins.concat('angular.js'))
      .pipe(gulp.dest(path.join(conf.paths.min, '/tmp')));
});

gulp.task('templates', function () {
  return gulp.src(path.join(conf.paths.templates, '**/*.html'))
      .pipe(plugins.chmod(755))
      .pipe(plugins.minifyHtml({ quotes: true }))
      .pipe(plugins.angularTemplatecache({
          module: 'mcdaniel.templates',
          standalone: true,
          root: '/templates'
      }))
      // .pipe(plugins.uglify()).on('error', conf.errorHandler('Uglify Templates'))
      .pipe(plugins.concat('templates.js'))
      .pipe(gulp.dest(path.join(conf.paths.min, '/tmp')));
});



/**
 * Build the scripts and send them to S3
*/
gulp.task('build-scripts', ['vendor', 'angular', 'templates'], function () {
    return gulp.src([
        path.join(conf.paths.min, '/tmp/vendor-file.js'),
        path.join(conf.paths.min, '/tmp/angular.js'),
        path.join(conf.paths.min, '/tmp/templates.js')
      ])
      .pipe(plugins.concat('app.min.js'))
      .pipe(plugins.uglify()).on('error', conf.errorHandler('Building Script Files'))
      .pipe(plugins.gzip())
      .pipe(plugins.s3(conf.amazon, conf.awsOptions('scripts'))).on('error', conf.errorHandler('Uploading Scripts'))
      .pipe(gulp.dest(path.join(conf.paths.min, '/assets/scripts')));
});

