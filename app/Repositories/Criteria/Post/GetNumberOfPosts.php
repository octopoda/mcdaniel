<?php 

namespace App\Repositories\Criteria\Post;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class GetNumberOfPosts extends Criteria {

	public function __construct($number) {
		$this->number = $number;
	}

	public function apply($model, Repository $repository) {
		$model = $model->take($this->number);
		return $model;
	}
}


