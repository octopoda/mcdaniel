<?php 

use App\Post;
use Illuminate\Foundation\Testing\DatabaseTransactions;



class PostTest extends TestCase 
{
	
	use DatabaseTransactions;

	function setUp() {
		
	}
	

	/** @test */
	function it_fetch_trending_articles()
	{
	    // Given
	    // factory(Article::class, 5)->create();
	    
	    // When
	    // Then
	}
	
}