<?php 

use App\Post;

use Illuminate\Foundation\Testing\DatabaseTransactions;


class PostTest extends TestCase 
{
	
	use DatabaseTransactions;

	function setUp() {
		parent::setup();
		$this->post = factory(App\Post::class)->make();	
	}


	/** @test */
	function user_can_create_post()
	{
	    $post = Post::create($this->post->toArray());

	    $this->seeInDatabase('posts', ['id' => $post->id]);
	}

	
	/** @test  */
	function user_can_update_post() {
		$post = Post::create($this->post->toArray());
		$post->title = "This is new title";
		$post->save();

		$this->seeInDatabase('posts', ['id' => $post->id, 'title' => $post->title]);
	}


	/** @test */
	function user_can_delete_post()
	{
	    $post = Post::create($this->post->toArray());
	    $post->delete();

	    $this->dontSeeInDatabase('posts', ['id' => $post->id]);
	}


	/** @test */
	function post_has_an_author()
	{
	    
	}

	
}