<?php

use Illuminate\Database\Seeder;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

		DB::table('products')->truncate();
        
        $input = [
            "title" => 'Test Product',
            "description" => '<p>This is the test product in which I will run test from</p>',
            "searchable" => 'This is the test product in which I will run test from',
            'price' => 10.00,
            'paypal_url' => 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H58MKJCEF8BZY',
            'product_image' => 'http://lorempixel.com/640/480/?80650',
            'direct_link' => 'test-product',
            'url' => 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/products/file-test.pdf',
            'published' => 1
        ];
            
            
        DB::table('products')->insert($input);

        // $products = factory(App\Product::class, 5)->create()->toArray();
    }
}
