<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;



class CorporteWellness extends TestCase {

	use DatabaseTransactions, SendEmailAssertions;

	/** @test */
	function user_can_send_corporate_wellness()
	{
	  
	  $this->signIn();

	  $this->visit('/corporate-wellness')
	  	->click('Signup Today')
	  	->type('Zack Davis', 'full-name')
	  	->type('zack@2721west.com', 'email')
	  	->type('octopoda interactive', 'company')
	  	->type('test message', 'contact-message')
	  	->click('Sign Up Now');



	  $this->seeInDatabase('contacts', ['email' => "zack@2721west.com"]);
	  $this->seeEmailWasSent();

	}

}