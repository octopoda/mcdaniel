<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/**
 * User
 */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});


// $factory->define(App\Blog::class, function (Faker\Generator $faker) {
//     return [
//         'user_id' => factory(User::class, 1)->user_iod,
//         'email' => $faker->email,
//         'password' => bcrypt(str_random(10)),
//         'remember_token' => str_random(10),
//     ];
// });



/**
 * Post
 */
$factory->define(App\Post::class, function (Faker\Generator $faker) {
    $title = $faker->sentence;
    $content = $faker->paragraphs(6, true);

    return [
        'title' => $faker->sentence,
        'content' => $content,
        'searchable' => strip_tags($content),
        'summary' => $content,
        'publish_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'published' => 1,
        'direct_link' => str_replace(" ", "-", $title),
        'post_image' => $faker->imageUrl,
        'video' => 1,
        'video_url' => $faker->imageUrl,
        'blog_id' => 1
    ];
});



/**
 * FAQ Factory
 */
$factory->define(App\Faq::class, function (Faker\Generator $faker) {
    return [
        'question' => $faker->sentence,
        'answer' => $faker->paragraphs(3, true),
        "published" => $faker->numberBetween(0,1),
        "stared" => $faker->numberBetween(0,1)
    ];
});


/** 
 * Prodcuts
 */
$factory->define(App\Product::class, function (Faker\Generator $faker) {
    $title = $faker->sentence;
    $desc = $faker->paragraphs(3, true);
    
    return [
        'title' => $title,
        'description'=> $desc,
        'searchable' => $desc,
        'price' => $faker->randomFloat(2, 0, 100),
        'product_image' => $faker->imageUrl(640, 480),
        'direct_link' => str_replace(' ', '-', $title),
        'published' => $faker->numberBetween(0, 1)
    ];
});


/**
 * Appearance
 */
$factory->define(App\Appearance::class, function (Faker\Generator $faker) {
    $title = $faker->sentence;
    $link = str_replace(" ", "-", $title);
    return [
        'link' => $faker->url,
        'video_url' => $faker->imageUrl($width = 640, $height = 480),
        'title' => $link,
        'published' => 1,
        'appearance_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'user_id' => 2
    ];
});


/**
 * Role
 */
$factory->define(App\Role::class, function (Faker\Generator $faker) {
    return  [
        "name" => $faker->word,
        "display_name" => $faker->word,
        "description" => $faker->sentence,
        "level" => $faker->numberBetween(1,10)
    ];
});


/**
 * Permissions
 */
$factory->define(App\Permission::class, function (Faker\Generator $faker) {
    $word = $faker->word;
    
    return [
        "name" => $word,
        "display_name" => $word,
        "description" => $faker->sentence,
        "route" => '/route/permission',
    ];
});

/**
 * Category
 */
$factory->define(App\Category::class, function (Faker\Generator $faker) {
    $word = $faker->word;
    
    return [
        'title' => $word,
        'direct_link' => $word,
        'published' => 1 
    ];
});
