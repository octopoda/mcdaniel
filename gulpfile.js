'use strict';

var gulp = require('gulp'),
    wrench = require('wrench');



 /**
  * This will load all JS files in the gulp directory
  * in order to  load all Gulp Task
  */
 wrench.readdirSyncRecursive('./gulp').filter(function (file) {
  return (/\.(js)$/i).test(file);
}).map(function (file) {
  require('./gulp/' + file);
});