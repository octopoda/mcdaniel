<?php 

namespace App\Repositories\Criteria\Faq;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class StaredFAQs extends Criteria {

	
	public function apply($model, Repository $repository) {
		$model = $model->where('stared', "=", 1);
		return $model;
	}
}