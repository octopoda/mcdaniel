<?php 

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use Faker\Factory as Faker;

class ApiTester extends TestCase {

	protected $fake;
	protected $times = 1;

	function __constructor() {
		$this->fake = Faker::crate();
	}

	protected function times($count) {
    	$this->times = $count;
    	return $this;
    }
}