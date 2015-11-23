<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Blog;

class BlogTest extends ApiTester
{
    /** @test */
    public function it_fetches_blogPosts() 
    {
    	$this->times(3)->makeBlog();
    	$this->getJson('/api/v1/blogs');
    	$this->assertResponseOk();
    }


   	/**
   	 * Make a Blog Post
   	 * @param  array  $blogFields 
   	 * @return App\Blog             
   	 */
   	function makeBlog($blogFields = [])  {
    	$blog = array_merge([
    		'user_id' => '1'
    	], $blogFields);

		while ($this->times--) Blog::create($blog);
    }



}
