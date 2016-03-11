<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;



class ContactFormTest extends TestCase {

	use DatabaseTransactions, SendEmailAssertions;

	/** @test */
	function user_can_send_contact_form()
	{
	  
	  $this->signIn();

	  $this->visit('/testing/contact-test')
	  	->type('Zack Davis', 'full_name')
	  	->type('zack@2721west.com', 'email')
	  	->type('What is my Question', 'contact_message')
	  	->press('Contact McDaniel Nutrition');

	  $this->seeInDatabase('contacts', ['email' => "zack@2721west.com"]);
	  $this->seeEmailWasSent();

	}

}