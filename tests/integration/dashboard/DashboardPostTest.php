<?php 

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DashboardPostTest extends TestCase  {

	use DatabaseTransactions;


	/** @test */
	function admin_can_see_post()
	{
	    $post = factory(App\Post::class)->create();


	    $this->signIn()
	    	->visit("/dashboard/posts")
	    	->see($post->title)
	    	->click($post->title)
	    	->seePageIs("/dashboard/posts/{$post->id}")
	    	->see($post->title);
	}


	/** @test */
	function admin_can_create_post()
	{
		$post = factory(App\Post::class)->make();

		$this->signIn()
			->visit("/dashboard/posts/create")
			->type($post->title, "title") 
			->type($post->content, "content")
			->type($post->summary, "summary") 
			->attach(storage_path( '/tests/files/image-test.jpg' ), "post_image")
			->type('February 18, 2016 5:00 PM', "publish_date") 
			->press("Create Post")
			->seeInDatabase('posts', [
				"title" => $post->title,
				"content" => $post->content,
				"summary" => $post->summary,
				"searchable" => strip_tags($post->content),
				"publish_date" => '2016-02-18 17:00:00',
				"post_image" => "https://s3-us-west-2.amazonaws.com/mcdaniel-staging/posts/image-test.jpg"		
			]);

	}



	/** @test */
	function admin_can_edit_a_post()
	{
	    $post = factory(App\Post::class)->create();

	    $this->signIn()
	    	->visit("/dashboard/posts/{$post->id}/edit")
	    	->type('New Post Title', 'title')
	    	->attach(storage_path( '/tests/files/image-test.jpg' ), "post_image")
	    	->type('February 18, 2016 5:00 PM', "publish_date") 
	    	->press('Edit Post')
	    	->seeInDatabase('posts', [
				"title" => 'New Post Title',
				// "content" => $post->content,
				"summary" => $post->summary,
				// "searchable" => strip_tags($post->content),
				"direct_link" => 'new-post-title',
				"publish_date" => '2016-02-18 17:00:00',
				"post_image" => "https://s3-us-west-2.amazonaws.com/mcdaniel-staging/posts/image-test.jpg"		
			]);
	}


	/** @test */
	function admin_can_delete_a_post()
	{
	    $post = factory(App\Post::class)->create();

	    $this->signIn()
	    	->visit("/dashboard/posts")
	    	->see($post->title);

	    $response = $this->call("DELETE", "/dashboard/posts/{$post->id}", ['_token' => csrf_token()]);
	    $this->assertEquals(302, $response->getStatusCode());
	    $this->notSeeInDatabase("posts", ["id" => $post->id]);
	}


	/** @test */
	// function admin_can_publish_a_post()
	// {
	//     $post = factory(App\Post::class)->create(['published' => 0 ]);

	//     $this->signIn()
	//     	->get("api/v1/publish/post/{$post->id}")
	//     	->seeJson([
	//     		"id" => $post->id, 
	//     		"published" => 'published'
	//     	]);

	// }
}