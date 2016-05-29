<?php 

namespace App\Repositories\Criteria\Transaction;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;

class TotalIncome extends Criteria {

	public function apply( $model, Repository $repository ) {
		$model = $model->sum('total');
		return $model;
	}

}