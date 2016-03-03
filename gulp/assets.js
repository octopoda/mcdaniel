/*
|--------------------------------------------------------------------------
| Tasks to Optimize Images
|--------------------------------------------------------------------------
|
*/
'use strict';


var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

var imagemin = require('gulp-imagemin');
var optipng = require('imagemin-optipng');
var pngquant = require('imagemin-pngquant');
var mozjpeg = require('imagemin-mozjpeg');

var plugins = require('gulp-load-plugins')();


/**
 * Optimize images in /assets/images and place in min/image
*/
gulp.task('images', function() {
    return gulp.src(path.join(conf.paths.images, '/**/*.{png,jpg,jpeg,gif,svg}'))
      .pipe(plugins.chmod(755))
      .pipe(optipng({ optimizationLevel: 3 })())
      .pipe(pngquant({quality: '65-80', speed: 4})())
      .pipe(mozjpeg({quality: 60})())
      .pipe(gulp.dest(path.join(conf.paths.min, '/assets/images')))
      .pipe(plugins.size({showFiles: true}));
});


gulp.task('build-images', function () {
  return gulp.src(path.join(conf.paths.min, '/assets/images/**/*.{png,jpg,jpeg,gif,svg}'))
    .pipe(plugins.gzip())
    .pipe(plugins.s3(conf.amazon, conf.awsOptions('images'))).on('error', conf.errorHandler('Uploading Images'));
});


gulp.task('build-videos', function () {
  return gulp.src(path.join(conf.paths.min, '/assets/videos/**/*.{mp4,ogv,webm}'))
    .pipe(plugins.s3(conf.amazon, conf.awsOptions('videos'))).on('error', conf.errorHandler('Uploading Videos'));
});


gulp.task('build-assets', ['build-images', 'build-videos']);