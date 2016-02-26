<?php 

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DashboardProductTest extends TestCase  {


	use DatabaseTransactions;

	/** @test */
	function admin_can_see_product()
	{
	    $product = factory(App\Product::class)->create();

	    $this->signIn()
	    	->visit('/dashboard/products')
	    	->see($product->title);

	}


	/** @test */
	function admin_can_create_products()
	{
		$this->signIn()
			 ->visit("/dashboard/products/create")
			 ->type('Other Product', 'title')
			 ->type('<p>This is the Other products</p>', 'description')
			 ->type('29.99', 'price')
			 ->type('https://paypal.com/Other-product', 'paypal_url')
			 ->attach(storage_path( '/tests/files/image-test.jpg' ), 'product_image')
			 ->attach(storage_path( '/tests/files/file-test.pdf' ), 'url')
			 ->press('Create Product')
			 ->seeInDatabase('products', [
				"title" => "Other Product",
				"description" => "<p>This is the Other products</p>",
				"price" => '29.99',
				"paypal_url" => "https://paypal.com/Other-product",
				"direct_link" => "other-product",
				"product_image" => "https://s3-us-west-2.amazonaws.com/mcdaniel-staging/products/image-test.jpg",
				'url' => 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/products/file-test.pdf'
			]);
	}


	/** @test */
	function admin_can_edit_a_product()
	{
	    $product = factory(App\Product::class)->create();

		$this->signIn()
			->visit("/dashboard/products/{$product->id}/edit")
	    	->type('New Product Title', 'title')
	    	->type('https://paypay.com/new-product-title', 'paypal_url')
	    	->press('Edit Product')
	    	->seeInDatabase('products',  [
	    		"title" => "New Product Title",
	    		"paypal_url" => "https://paypay.com/new-product-title",
	    		"direct_link" => "new-product-title"
	    	]);
	}



	/** @test */
	function admin_can_delete_a_product()
	{
	    $product = factory(App\Product::class)->create();

	    $this->signIn()
	    	->visit("/dashboard/products")
	    	->see($product->title);

	    $response = $this->call("DELETE", "/dashboard/products/{$product->id}", ['_token' => csrf_token()]);
	    $this->assertEquals(302, $response->getStatusCode());
	    $this->notSeeInDatabase('products', ['id' => $product->id]);
	}


	/** @test */
	// function admin_can_publish_product()
	// {
	//     $product = factory(App\Product::class)->create(['published' => 0]);

	//     $this->signIn()
	//     	->get("api/v1/publish/product/{$product->id}")
	//     	->seeJson([
	//     		"id" => $product->id, 
	//     		"published" => 'published'
	//     	]);
	// }
}