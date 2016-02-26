<?php 

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;


class DashboardUserTest extends TestCase  {

	use DatabaseTransactions;

	/** @test */
	function admin_can_see_users() {
		$this->user = factory(App\User::class)->create();
		
		$this->signIn($this->user)
			 ->visit('/dashboard/users')
			->see($this->user->email);
	}


	
	/** @test */
	function admin_can_create_user()
	{
	    $this->user = factory(App\User::class)->create();
		
		$this->signIn($this->user)
	    	  ->visit('/dashboard/users/create');
	    	

	    	$input = [
	    		'name' => 'John Doe',
	    		'email' => 'john@2721west.com',
	    		'password' => '12345',
	    		'password_confirmation' => '12345',
	    	];
	    	

	    	$this->submitForm('Create User', $input)
	    		 ->seeInDatabase('users', ['name' => 'John Doe']);
	}


	/** @test */
	function admin_can_edit_user()
	{
	    $user = factory(App\User::class)->create();
	    $this->user = factory(App\User::class)->create();
	    $this->signIn($this->user)
	    	  ->visit('/dashboard/users/create');
	    
	    $this->seeInDatabase('users', ['name' => $user->name, 'email' => $user->email]);

	    $this->visit('/dashboard/users/'. $user->id . '/edit')
	    	->type('bobDavis@2721west.com', 'email')
	    	->press('Edit User')
	    	->seeInDatabase('users', ['name'=> $user->name, 'email' => 'bobDavis@2721west.com']);
	}


	/** @test */
	function admin_can_delete_user()
	{
	    $user = factory(App\User::class)->create();

	    $this->signIn()
	     	->visit('/dashboard/users')
	    	->see($user->email);

		$response = $this->call('DELETE', "/dashboard/users/{$user->id}", ['_token' => csrf_token()]);
	    
	    $this->assertEquals(302, $response->getStatusCode());
	    $this->notSeeInDatabase('users', ['id' => $user->id]);
	    	
	}
}