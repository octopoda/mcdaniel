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

	Route::get('posts/byNumber/{number}', [
		"as" => "postByNumber",
		"uses" => "PostController@postByNumber"
	]);

	Route::get('posts/search/{query}', [
		"as" => "searchAllPosts",
		"uses" => "Postcontroller@searchPosts"
	]);

	Route::get('posts/{id}/categories/', [
		"as" => "categoriesForPost",
		"uses" => "PostController@getCategoriesForPost"
	]);

	Route::put('/publish/{class}/{id}', [
		"as" => 'ajaxPublish',
		"uses" => 'AjaxController@publish'
	]);


	//FAQ Routes
	Route::post('/faqs/search', [
		"as" => 'faqSearch',
		"uses" =>  'FAQController@searchFaqs'
	]);

	Route::get('/faqs/stared', [
		'as' => 'allFAQsAPI',
		'uses' => 'FaqController@staredFAQs'
	]);

	
	//Form Routes
	Route::post('/contact/formSubmit', [
		"as" => 'ajaxFormSubmit',
		"uses" => 'ContactController@store'
	]);

	Route::get('/fireContactEvent',  [
		'as' => 'fireContactEvent',
		"uses" => "AjaxController@fireEvent"
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

Route::group(['prefix'=>'dashboard',  'middleware'=>['auth']], function () {
	//Resources
	Route::resource("blogs", "BlogController");
	Route::resource("posts", "PostController");
	Route::resource("appearances", "AppearancesController");
	Route::resource("categories", "CategoryController");
	Route::resource("users", "UserController");
	Route::resource("roles", "RoleController");
	Route::resource("permissions", "PermissionController");
	Route::resource("faqs", "FaqController");
	Route::resource("products", "ProductController");

	//Individual Routes
	Route::get('/roles-permissions', [
		"as" => "dashboard.rolepermission.index",
		"uses" => "RolesPermissionsController@index"
	]);
	
	Route::post('/roles-permissions', "RolesPermissionsController@store");
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

	Route::get('/archive/{year}', [
		"as" => "postByDate",
		"uses" => "PostController@postByDate"
	]);

	Route::get('/explore/{query}', [
		"as" => "searchPost",
		"uses" => "PostController@searchPosts"
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


/*
|--------------------------------------------------------------------------
| Media Routes
|--------------------------------------------------------------------------
|
|
*/
Route::group(['prefix' => 'appearances'], function () {
	Route::get('/', [
		'as' => 'allAppearances',
		'uses' => 'AppearancesController@topVideoAppearances'
	]);	

	Route::get('/archive', [
		"as" => 'appearancesArchive',
		"uses" => "AppearancesController@getPaginatedAppearances"
	]);

	Route::get('/{title}',  [
		'as' => 'appearanceByTitle',
		'uses' => 'AppearancesController@appearanceByTitle'
	]);

});


/*
|--------------------------------------------------------------------------
| FAQ Routes
|--------------------------------------------------------------------------
|
|
*/

Route::group(['prefix' => 'faqs'], function () {
	Route::get('/', [
		'as' => 'allFAQs',
		'uses' => 'FaqController@staredFAQs'
	]);

	Route::get('/{title}', [
		'as' => 'faqByTitle',
		'uses' => 'FaqController@faqByTitle'
	]);

});


/*
|--------------------------------------------------------------------------
| Store Routes
|--------------------------------------------------------------------------
|
|
*/
Route::group(['prefix' => 'store'], function () {
	Route::get('/', [
		'as' => 'allProducts',
		'uses' => 'StoreController@getAllProducts'
	]);

	
	Route::get('/transaction-complete', [
		'as' => 'transitionComplete',
		'uses' => 'StoreController@transactionComplete'
	]);


	Route::get('/transaction-error', [
		'as' => 'transactionError',
		'uses' => 'StoreController@transactionError'
	]);

	
	Route::Get('/downloads/{transaction_id}', [
		'as' => 'getDownloads',
		'uses' => 'StoreController@getDownloads'
	]);


	//Needs to be last
	Route::get('/{title}',[
		'as' => 'productByTitle',
		'uses' => 'StoreController@productByTitle'
	]);

});



/*
|--------------------------------------------------------------------------
| Indivdaul Routes
|--------------------------------------------------------------------------
|
*/
Route::group(['prefix' => 'individuals'], function () {

	Route::get('/weight-loss', [
		'as' => 'weight-loss',
		'uses' => 'PageController@weightLoss'
	]);

	Route::get('/sports-nutrition',  [
		'as' => 'sports-nutrition',
		"uses" => 'PageController@sports'
	]);

	Route::get('/maternal-nutrition', [
		'as' => 'maternal-nutrition',
		"uses" => 'PageController@maternal'
	]);

	Route::get('/rmr-testing', [
		"as" => "rmr",
		"uses" => "PageController@rmr"
	]);
});




/*
|--------------------------------------------------------------------------
| About/Team Routes
|--------------------------------------------------------------------------
| 
|
*/

Route::group(['prefix' => "about-mcdaniel-nutrition"], function () {
	Route::get('/', [
		"as" => "about",
		"uses" => "PageController@about"
	]);

	Route::get('/jennifer-mcdaniel', [
		"as" => "jennifer",
		"uses" => "PageController@jennifer" 
	]);
});





/*
|--------------------------------------------------------------------------
| Corporate Routes
|--------------------------------------------------------------------------
| 
|
*/

Route::group(['prefix' => 'corporate-wellness'], function () {
	Route::get('/',  [
		"as" => "corporate",
		"uses" => "PageController@corporate"
	]);
});




/*
|--------------------------------------------------------------------------
| Testing Routes
|--------------------------------------------------------------------------
| 
|
*/



Route::group(['prefix' => 'testing',   'middleware'=>['auth']], function () {
	Route::get('/contact-test', [
		"as" => "contact-test",
		"uses" => "ContactController@testContact"
	]);

	Route::post('/contact-test', [
		"as" => "contact-test",
		"uses" => "ContactController@store"
	]);
});




/*
|--------------------------------------------------------------------------
| Single Page Routes
|--------------------------------------------------------------------------
| 
|
*/	


Route::get('/contact-mcdaniel-nutrition', [
	"as" => "contact",
	"uses" => "PageController@contact"
]);

Route::get('/get-started', [
	"as" => "getStarted",
	"uses" => "PageController@getStarted"
]);

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
