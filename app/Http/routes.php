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
	Route::resource("categories", "CategoryController");
	Route::resource("users", "UserController");
	Route::resource("roles", "RoleController");
	Route::resource("permissions", "PermissionController");

	//Individual Routes
	Route::get('/roles-permissions', [
		"as" => "dashboard.rolepermission.index",
		"uses" => "RolesPermissionsController@index"
	]);
	Route::post('/roles-pemrissions', "RolesPermissionsController@store");
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


/**
 * Post Routes
 */
Route::group(['prefix'=>'posts'], function () {
	
	//Get all Post Paginated
	Route::get('/', [
		"as" => "allPosts",
		"uses" => "PostController@paginatePost"
	]);
	
	//Get Post By Title
	Route::get('/{title}', [
		"as" => "postByTitle",
		"uses" => "PostController@postByTitleView"
	]);

	//Get Post for Cateogory
	Route::get('/category/{category}', [
		'as' => 'postsbyCategory',
		'uses' => 'PostController@postsFromCategory'
	]);

	//Get Post for Author
	Route::get('/author/{author}', [
		"as" => "postForAuthors",
		"uses" => "PostController@postsForAuthor"
	]);

	
});


/**
 * Blog Legacy Routes
 */
Route::get('/blog', function () {
	return Redirect::route('allPosts', null,  301);
});

Route::get('/blog/{title}.html', function ($title) {
	return Redirect::route('postByTitle', ['title' => $title], 301);
});


Route::get('/categories/{category}', function ($category) {
	return Redirect::route('postsbyCategory', ['category'=>$category], 301);
});

Route::get('/', [
	"as" => "homeRoute",
	"uses" => "PageController@home"
]);




/*
|--------------------------------------------------------------------------
| Landing Page Routes
|--------------------------------------------------------------------------
|
| Routes for the API v1
| 
|
*/



/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
|
| Routes for Authorization of the User
| 
|
*/

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
