<?php 

namespace App\Repositories\Criteria\Post;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class PostsWithAuthor extends Criteria {

	public function apply($model, Repository $repository) {
		$model = $model->with('blog', 'user');
		return $model;
	}
}