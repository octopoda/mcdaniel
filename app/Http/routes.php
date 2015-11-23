<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


/*
|--------------------------------------------------------------------------
| API routes
|--------------------------------------------------------------------------
|
| Routes for the API v1
| 
|
*/


Route::group(["prefix" => "api/v1"], function () {
	

	//Blog Routes
	Route::get("blogs/{id}/posts", [
		"as" => "postForBlog",
		"uses" => "BlogController@allPosts"
	]);

	Route::get('blog/{id}/search/{query}',  [
		"as" => "searchPost",
		"uses" => "BlogController@searchPosts"
	]);


	//Post Routes
	Route::get('posts/byTitle/{title}', [
		"as" => "postByTitle",
		"uses" => "PostController@postByTitle"
	]);

	Route::get('posts/search/{query}', [
		"as" => "searchAllPosts",
		"uses" => "Postcontroller@searchPosts"
	]);

	Route::get('posts/{id}/categories/', [
		"as" => "categoriesForPost",
		"uses" => "PostController@getCategoriesForPost"
	]);

});





/*
|--------------------------------------------------------------------------
| Dashboard Routes
|--------------------------------------------------------------------------
|
| Routes for the API v1
| 
|
*/

Route::group(['prefix'=>'dashboard'], function () {
	//Resources
	Route::resource("blogs", "BlogController");
	Route::resource("posts", "PostController");
	Route::resource("appearances", "AppearanceController");

	//Blogs

});



/*
|--------------------------------------------------------------------------
| Front End Routes
|--------------------------------------------------------------------------
|
| Routes for the API v1
| 
|
*/




/*
|--------------------------------------------------------------------------
| Landing Page Routes
|--------------------------------------------------------------------------
|
| Routes for the API v1
| 
|
*/