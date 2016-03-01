// 'use strict';

// var gulp = require('gulp'),
//     wrench = require('wrench');



 /**
  * This will load all JS files in the gulp directory
  * in order to  load all Gulp Task
  */
//  wrench.readdirSyncRecursive('./gulp').filter(function (file) {
//   return (/\.(js)$/i).test(file);
// }).map(function (file) {
//   require('./gulp/' + file);
// });
// 

var elixir = require('laravel-elixir');
var inProduction = elixir.config.production;

elixir(function (mix) {
	 mix 
	 	.sass('app.scss')
	 	.scripts([
	 		'./resources/components/jquery/dist/jquery.js',
	 		'./resources/components/jquery-ujs/src/rails.js',
	 		'./resources/components/Materialize/dist/js/materialize.js',
	 		'./resources/components/jquery-touch-events/src/1.0.1/jquery.mobile-events.js',
	 	], './public/js/vendor.js')
	 	.scripts([
	 		'./resources/assets/js/site/**/*.js'
		], './public/js/app.js')

	 mix.sass('dashboard.scss')
	 	.scripts([
	 		'./resources/assets/js/dashboard/**/*.js'
		], 'public/js/dashboard.js')
		// .version(['css/dashboard.css', 'js/vendor.js', 'js/app.js', '/js/dashboard.js', 'css/app.css']);
		
		var versionedFiles = ['css/dashboard.css', 'js/vendor.js', 'js/app.js', '/js/dashboard.js', 'css/app.css'];
	    if (inProduction) {
	      versionedFiles.push('css/app.css');
	    }

	    mix.version( versionedFiles );
	

	 mix.browserSync({
	 	proxy: 'mcdaniel.app',
	 });



});