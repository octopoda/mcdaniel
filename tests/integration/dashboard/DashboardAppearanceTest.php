<?php 

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DashboardAppearanceTest extends TestCase  {

	use DatabaseTransactions;

	/** @test */
	function admin_can_see_appearance()
	{
		$appearance = factory(App\Appearance::class)->create();

		$this->signIn()
			->visit("/dashboard/appearances")
			->see($appearance->title);
	}

	/** @test */
	function admin_can_show_appearance()
	{
	    $appearance = factory(App\Appearance::class)->create();

		$this->signIn()
			->visit("/dashboard/appearances/{$appearance->id}")
			->see($appearance->title);
	}


	/** @test */
	function admin_can_create_appearance()
	{
	 	$this->signIn()
			->visit("/dashboard/appearances/create")
			->select('2', 'user_id')
			->type('Fox News 2', 'publication')
			->type('Eating Mom', 'title')
			->type('http://fox2now.com/2012/12/04/jen-mcdaniels-eat-or-drink-your-calories/#ooid=FteWRlNzrWHPxnYIdHBJL0-3pIMoAeLq', 'link')
			->type('February 18, 2016 5:00 PM', 'appearance_date')
			->check('video', 1)
			->type('<script src="http://player.ooyala.com/player.js?height=360&embedCode=FteWRlNzrWHPxnYIdHBJL0-3pIMoAeLq&deepLinkEmbedCode=FteWRlNzrWHPxnYIdHBJL0-3pIMoAeLq&video_pcode=d2b3E6s5rDofer9uw9hhgMxCRs6U&width=640"></script>', 'video_url')
			->press('Create Appearance')
			->seeInDatabase('appearances', [
				'title' => 'Eating Mom',
				'appearance_date' => '2016-02-18 17:00:00'
			]);
	}


	/** @test */
	function admin_can_change_appearance()
	{
	    $appearance = factory(App\Appearance::class)->create();

		$this->signIn()
			->visit("/dashboard/appearances/{$appearance->id}/edit")
			->type('Something Different', 'title')
			->type('NBC5', 'publication')
			->type('http://fox2now.com/2012/12/04/jen-mcdaniels-eat-or-drink-your-calories/#ooid=FteWRlNzrWHPxnYIdHBJL0-3pIMoAeLq', 'link')
			->type('February 18, 2016 5:00 PM', 'appearance_date')
			->press('Edit Appearance')
			->seeInDatabase('appearances', [
				'title' => 'Something Different',
				'publication' => 'NBC5',
				'appearance_date' => '2016-02-18 17:00:00'
			]);
	}


	/** @test */
	function admin_can_delete_an_appearance()
	{
		$appearance = factory(App\Appearance::class)->create();

		$this->signIn()
			->visit("/dashboard/appearances")
			->see($appearance->title);

		$response = $this->call('DELETE', "/dashboard/appearances/{$appearance->id}", ['_token' => csrf_token()]);	
		$this->assertEquals(302, $response->getStatusCode());
		$this->notSeeInDatabase('appearances', ['id'=> $appearance->id]);
	}


	/** @test */
	// function admin_can_publish_appearance()
	// {
	// 	$appearance = factory(App\Appearance::class)->create(['published' => 0 ]);

 //    	$this->signIn();
    	
 //    	$response = $this->call("POST", "/api/v1/publish/appearance/{$appearance->id}", ['_token' => csrf_token()] );
 //    	$this->assertEquals(302, $response->getStatusCode());
	// }
}