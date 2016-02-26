<?php 

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DashboardPermissionsTest extends TestCase  {

	use DatabaseTransactions;


	/** @test */
	function admin_can_see_permissions()
	{
	    $permission = factory(App\Permission::class)->create();

	    $this->signIn()
	   		->visit('/dashboard/permissions')
	   		->click('2')
	   		->see($permission->display_name);
	}


	/** @test */
	function admin_can_create_permissions()
	{
	    $this->signIn()
	    	->visit('/dashboard/permissions/create')
	    	->type('manage-faqs', 'name')
	    	->type('Manage Faqs', 'display_name')
	    	->type('User can Manage Faqs', 'description')
	    	->type('/route/permissions', 'route')
	    	->press('Create Permission')
	    	->seeInDatabase('permissions', ['display_name' => 'Manage Faqs']);
	}


	/** @test */
	function admin_can_edit_permissions()
	{
	    $permission = factory(App\Permission::class)->create();

	    $this->signIn()
	    	->visit("/dashboard/permissions/{$permission->id}/edit")
	    	->type('Manage the Monkey', 'display_name')
	    	->press('Edit Permission')
	    	->seeInDatabase('permissions', ['display_name' => 'Manage The Monkey']);
	}


	/** @test */
	function admin_can_delete_permissions()
	{
		$permission = factory(App\Permission::class)->create();


		$this->signIn()
			->visit('/dashboard/permissions')
			->click("2")
			->see($permission->display_name);

		$response = $this->call("DELETE", "/dashboard/permissions/{$permission->id}", ['_token' => csrf_token()]);
		$this->assertEquals(302, $response->getStatusCode());
		$this->notSeeInDatabase('permissions', ['id' => $permission->id]);
	}

}