/*
|--------------------------------------------------------------------------
| Task to Run the Server
|--------------------------------------------------------------------------
|
|
*/
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

var browserSync = require('browser-sync');
var util = require('gulp-util');


/**
 * Start Browser Sync
 * @type {string} Base Directory 
 * @type {string} Browser to use
*/
function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  browserSync.instance = browserSync.init({
    startPath: '/',
    browser: browser,
    proxy: 'http://mcdaniel.app/',
    reloadDelay: 1000
  });
}


gulp.task('serve', ['watch'], function () {
  browserSyncInit('/');
});


