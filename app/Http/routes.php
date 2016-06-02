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

	Route::post('posts/search', [
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

	Route::post('/imageUpload', [
		"as" => 'imageUpload',
		"uses" => 'PostController@imageUpload'
	]);


	//FAQ Routes
	Route::post('/faqs/search', [
		"as" => 'faqSearch',
		"uses" =>  'FaqController@searchFaqs'
	]);

	Route::get('/faqs/stared', [
		'as' => 'allFAQsAPI',
		'uses' => 'FaqController@staredFAQs'
	]);

	Route::put('/faqs/star/{id}', [
		'as' => 'faqStar',
		'uses' => 'FaqController@toggleStar'
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

	Route::post('/mailchimp/subscribe', [
		"as" => "mailChimpSubscribe",
		"uses" => "MailChimpController@subscribeToMailChimp"
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
	Route::get('/', [
		'as' => 'dashboard.index',
		'uses' => 'DashboardController@index'
	]);

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

	Route:get('/transactions/{id}', [
		"as" => "transactionDetail",
		"uses" => "StoreController@transactionDetail"
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

	Route::get('/recipes', [
		'as' => 'recipePosts',
		'uses' => "PostController@recipesOnly"
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

	
	Route::get('/types/{type}', [
		"as" => "postTypes",
		"uses" => "PostController@postFromType"
	]);
	
});


Route::group(['prefix' => 'p'], function () {
	Route::get('/{tiny}', [
		"as" => "tinyUrl",
		"uses" => "PostController@tinyUrl"
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

Route::get('/rss.xml', [
	"as" => "rssFeed",
	"uses" => "PostController@setupFeed"
]);


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
		'uses' => 'FaqController@staredFAQsWithView'
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

	//List Downloads
	Route::Get('/downloads/{transaction_id}', [
		'as' => 'getDownloads',
		'uses' => 'StoreController@getDownloads'
	]);

	//Product Routes
	Route::get('/download/{transaction_id}/{id}',  [
		"as" => 'downloadProduct',
		"uses" => "StoreController@downloadProduct"
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
| Get Started Routes
|--------------------------------------------------------------------------
|
|
*/

Route::group(['prefix' => 'get-started'], function () {
	Route::get('/',  [
		'as' => 'get-started',
		'uses' => 'GetStartedController@index'
	]);

	Route::get('/weight-loss', [
		'as' => 'get-started-weight',
		'uses' =>  'GetStartedController@weight'
	]);

	Route::get('/sports-nutrition', [
		'as' => 'get-started-sports',
		'uses' =>  'GetStartedController@sports'
	]);

	Route::get('/maternal-nutrition', [
		'as' => 'get-started-maternal',
		'uses' =>  'GetStartedController@maternal'
	]);

	Route::get('/corporate-wellness', [
		'as' => 'get-started-corporate',
		'uses' =>  'GetStartedController@corporate'
	]);

	Route::get('/rmr-testing', [
		'as' => 'get-started-rmr',
		'uses' =>  'GetStartedController@rmr'
	]);

	Route::get('/thank-you', [
		'as' => 'get-started-thanks',
		'uses' =>  'GetStartedController@thanks'
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

	Route::get('/transaction', [
		"as" => "transactionTest",
		"uses" => "StoreController@transactionTest"
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


Route::get('/search', [
	"as" => "search",
	"uses" => "PostController@searchPostWithView"
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
