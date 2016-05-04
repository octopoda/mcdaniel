<?php 

namespace App\Repositories\Criteria\Blog;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class BlogWithAuthor extends Criteria {

	public function apply($model, Repository $repository) {
		$model = $model->with('user');
		return $model;
	}
}