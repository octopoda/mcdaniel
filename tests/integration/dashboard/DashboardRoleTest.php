<?php 

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;


class DashboardRoleTest extends TestCase {

		use DatabaseTransactions;

		public function setup() {
			parent::setup();

			
		}

		/** @test */
		function admin_can_see_a_role()
		{
			 $role = factory(App\Role::class)->create();

			  $this->signIn()
			  	->visit("/dashboard/roles")
			  	->see($role->display_name);  
		}


		/** @test */
		function admin_can_create_a_role()
		{
		    $this->signIn()
		    	->visit("/dashboard/roles/create");
		    
		    $input = [
		    	'name' => 'Edit-person',
	    		'display_name' => 'edit person',
	    		'description' => 'person for editing posts',
	    		'level' => '6',
	    		'permissions' => [1,2,3]
	    	];

	    	$this->submitForm('Create Role', $input);
	    	
			$this->seeInDatabase('roles', [
	    			'name' => 'Edit-person',
	    			'display_name' => 'edit person',
	    			'description' => 'person for editing posts',
	    			'level' => '6'
	    		]);
		}


		/** @test */
		function admin_can_edit_a_role()
		{
		    $role = factory(App\Role::class)->create();

		    $this->signIn()
		    	->visit("/dashboard/roles/{$role->id}/edit")
		    	->type('Monkey', 'name')
		    	->press('Edit Role')
		    	->seeInDatabase('roles', [ 'name' => 'monkey']);
		}


		/** @test */
		function admin_can_delete_a_role()
		{
		    $role = factory(App\Role::class)->create();

		    $this->signIn()
		    	->visit("/dashboard/roles")
		    	->see($role->display_name);

		    $response = $this->call('DELETE', "/dashboard/roles/{$role->id}", ['_token' => csrf_token()]);
		    $this->assertEquals(302, $response->getStatusCode());
		    $this->notSeeInDatabase('roles',  ['id' => $role->id]);
		}
}