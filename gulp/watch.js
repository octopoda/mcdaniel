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
  gulp.watch('bower.json', function (event) {
    gulp.start('vendor')
    browserSync.reload(event.path);
  });
  


  //CSS and SCSS
  gulp.watch([
    path.join(conf.paths.css, '/**/*.css'),
    path.join(conf.paths.css, '/**/*.scss'),
    // !path.join(conf.paths.css, 'dashboard/')
  ], function (event) {
    if(isOnlyChange(event)) {
      gulp.start('sass');
    }
  });


  gulp.watch([
    path.join(conf.paths.css, 'dashboard.scss'),
    path.join(conf.paths.css, 'dashboard/**/*.scss')
  ], function (event) {
    if (isOnlyChange(event)) {
      gulp.start('sass-dashboard')
    }
  })

 //JS
  gulp.watch(path.join(conf.paths.js, 'site/**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('js');
      browserSync.reload(event.path);
    } 
  });

  //Js Dashboard
  gulp.watch(path.join(conf.paths.js, 'dashboard/**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('js-dashboard');
      browserSync.reload(event.path);
    } 
  });

  //Mustache Templates
  gulp.watch(path.join(conf.paths.js, '/site/**/*.mst'), function (event) {
    if (isOnlyChange(event)) {
      gulp.start('templates')
      browserSync.reload(event.path);
    }
  })

});


