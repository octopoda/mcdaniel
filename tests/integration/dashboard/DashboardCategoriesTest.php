<?php 

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;


class DashboardCategoriesTest extends TestCase  {

	use DatabaseTransactions;

	/** @test */
	function admin_can_see_categories()
	{
		$category = factory(App\Category::class)->create();

		$this->signIn()
			->visit("/dashboard/categories")
			->see($category->title);
	}


	/** @test */
	function admin_can_create_category()
	{
	    $this->signIn()
	    	->visit("/dashboard/categories/create")
	    	->type('Something something', 'title')
	    	->press('Create Category')
	    	->seeInDatabase('categories', ['title'=> 'Something something', 'direct_link' => 'something-something']);
	}


	/** @test */
	function admin_can_edit_category()
	{
		
		$category = factory(App\Category::class)->create();

		$this->signIn()
			->visit("/dashboard/categories/{$category->id}/edit")
			->type('Something else', 'title')
			->press('Edit Category')
			->seeInDatabase('categories', ['title' => 'Something else', 'direct_link' => 'something-else']);
	}


	/** @test */
	function admin_can_delete_category() {
		$category = factory(App\Category::class)->create();

		$this->signIn()
			->visit("/dashboard/categories")
			->see($category->title);

		$response = $this->call('DELETE', "/dashboard/categories/{$category->id}", ['_token' => csrf_token()]);	
		$this->assertEquals(302, $response->getStatusCode());	
		$this->notSeeInDatabase('categories',  ['id' => $category->id]);
	}


	/** @test */
	// function admin_can_publish_categories()
	// {
	//     $category = factory(App\Category::class)->create(['published' => 0]);

	//     $this->signIn()
	//     	->get("api/v1/publish/category/{$category->id}")
	//     	->seeJson([
	//     		"id" => $category->id, 
	//     		"published" => 'published'
	//     	]);
	// }

}