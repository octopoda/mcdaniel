<?php 

namespace App\Repositories\Criteria\Post;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class RandomPosts extends Criteria {

	public function apply($model, Repository $repository) {
		$model = $model->all()->random(1);
		return $model;
	}
}