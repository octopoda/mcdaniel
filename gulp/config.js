var gutil = require('gulp-util');

/**
 * Paths to Project
 * @type {object}
 */
exports.paths = {
  css: './resources/assets/sass/',
  js: './resources/assets/scripts',
  fonts: './resources/assets/fonts/',
  images: './resources/assets/images/',
  min: 'public',
  templates: './resources/assets/templates',
  videos: './resources/assets/videos',
  views: './resources/views'

};


/**
 * Bower Folder
 */
exports.bower = {
  directory: './resources/components'
};

exports.amazon =  {
   "key": "AKIAI7J5UIPZYQF64CGA",
   "secret": "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",
  "bucket" : "mcdaniel-staging"
}

exports.sitemap = {
  url: 'https://assetbuilder.com/sitemap.xml'
}




/**
 *  Error Handler
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};


/**
 * Upload to AWS
 * @param  {string} aws_folder -aws folder name
 * @return {object}            
 */
exports.awsOptions = function(aws_folder) {
    return {
        headers: {
            'Cache-Control': 'max-age=315360000, no-transform, public',
            'Vary': 'Accept-Encoding'
        },
        uploadPath: '/' + aws_folder + '/',
        gizippedOnly: true
    }
}




