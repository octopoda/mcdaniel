<?php 

namespace App\Repositories\Criteria\Transaction;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;

class LatestTransactions extends Criteria {

	protected $number;
	
	public function __contrust($number) {
		$this->id = $number;
	}

	public function apply( $model, Repository $repository ) {
		$model = $model->orderBy('created_at', 'DESC')->take($this->number);
		return $model;
	}

}