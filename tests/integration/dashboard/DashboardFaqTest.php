<?php 

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;


class DashboardFaqTest extends TestCase  {

	use DatabaseTransactions;


	/** @test */
	function admin_can_see_a_question()
	{
	    $faq = factory(App\Faq::class)->create();
		
		$this->signIn()
			 ->visit('/dashboard/faqs')
			 ->see($faq->question);
	}


	/** @test */
	function admin_can_create_a_question()
	{
		$this->signIn()
			 ->visit('/dashboard/faqs/create')
			 ->type('What is this test', 'question')
			 ->type('This is the answer', 'answer')
			 ->select('1', 'published')
			 ->press('Create Question')
			 ->seeInDatabase('faqs', ['question'=> 'What is this test']);
	}


	/** @test */
	function admin_can_edit_a_question()
	{
		$faq = factory(App\Faq::class)->create();

		$this->signIn()
			->visit("/dashboard/faqs/{$faq->id}/edit")
			->type('Ask Another Question', 'question')
			->press('Edit Question')
			->seeInDatabase('faqs', ['question' => 'Ask Another Question']);    
	}


	/** @test */
	function admin_can_delete_a_question()
	{

		$faq = factory(App\Faq::class)->create();

		$this->signIn()
			->visit('/dashboard/faqs')
	    	->see($faq->question);

	    $response = $this->call('DELETE', "/dashboard/faqs/{$faq->id}", ['_token' => csrf_token()]);
	    
	    $this->assertEquals(302, $response->getStatusCode());
	    $this->notSeeInDatabase('faqs', ['id' => $faq->id]);

	}


	/** @test */
	// function admin_can_publish_faq()
	// {
	//     $faq = factory(App\Faq::class)->create(['published' => 0]);

	//     $this->signIn()
	//     	->get("api/v1/publish/faq/{$faq->id}")
	//     	->seeJson([
	//     		"id" => $faq->id, 
	//     		"published" => 'published'
	//     	]);
	// }

}