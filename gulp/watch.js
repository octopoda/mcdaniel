/*
|--------------------------------------------------------------------------
| Task to watch the files
|--------------------------------------------------------------------------
|
| These task are creepy
| 
|
*/
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', function () {

  //Watch Views
  gulp.watch(path.join(conf.paths.views, '/**/*.php'), function (event) {
    if(isOnlyChange(event)) {
      console.log('updated blade');
      browserSync.reload();
    }
  });
  

  //Vendor Files
  gulp.watch('bower.json', function () {
    gulp.start('vendor')
    browserSync.reload(event.path);
  });
  


  //CSS and SCSS
  gulp.watch([
    path.join(conf.paths.css, '/**/*.css'),
    path.join(conf.paths.css, '/**/*.scss')
  ], function (event) {
    if(isOnlyChange(event)) {
      gulp.start('sass');
      
    }
  });

 //JS
  gulp.watch(path.join(conf.paths.js, '**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('angular');
      browserSync.reload(event.path);
    } 
  });


  //Templates
  gulp.watch(path.join(conf.paths.templates, '**/*.html'), function(event) {
    gulp.start('templates');
    browserSync.reload({stream: true})
  });

});


