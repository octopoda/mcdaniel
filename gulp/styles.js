/*
|--------------------------------------------------------------------------
| CSS/Sass Gulp Tasks
|--------------------------------------------------------------------------
|
*/

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

var browserSync = require('browser-sync');
var plugins = require('gulp-load-plugins')();


/**
 * Create CSS from Libsass complier.
 */
gulp.task('sass', function() {
	//Set Options
	var sassOptions = {
    	style: 'expanded'
    };

    return gulp.src([
       path.join(conf.paths.css, '**/*.scss')
    ])
      .pipe(plugins.chmod(755))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        errLogToConsole:true
      }).on('error', conf.errorHandler('SASS')))
      .pipe(plugins.autoprefixer(['last 4 versions', '> 1%', 'ie 8'], { cascade: true }))
      .pipe(plugins.sourcemaps.write())
      .pipe(plugins.rename('app.min.css'))
      .pipe(gulp.dest(path.join(conf.paths.min, '/assets/css')))
      .pipe(browserSync.reload({stream : true}));
});	



/**
 * Combine minify, and upload CSS
 */
gulp.task('build-css', ['sass'], function() {
    return gulp.src(path.join(conf.paths.min, '/assets/css/app.min.css'))
      .pipe(plugins.chmod(755))
      .pipe(plugins.csso())
      .pipe(plugins.flatten())
      .pipe(plugins.gzip())
      .pipe(plugins.s3(conf.amazon, conf.awsOptions('css'))).on('error', conf.errorHandler('Uploading CSS'));
});








