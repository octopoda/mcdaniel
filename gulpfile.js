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


elixir(function (mix) {
	 mix 
	 	.sass('dashboard.scss')
	 	.sass('app.scss')
	 	.scripts([
	 		'./resources/components/jquery/dist/jquery.js',
	 		'./resources/components/jquery-ujs/src/rails.js',
	 		'./resources/components/Materialize/dist/js/materialize.js',
	 	], './public/js/vendor.js')
	 	.scripts([
	 		'./resources/assets/js/dashboard/**/*.js'
		])
		.version(['css/dashboard.css', 'js/vendor.js', 'js/all.js', 'css/app.css']);
		

	 mix.browserSync({
	 	proxy: 'mcdaniel.app',
	 });



});