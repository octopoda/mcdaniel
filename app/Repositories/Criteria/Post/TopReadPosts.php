<?php 

namespace App\Repositories\Criteria\Post;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;

use Carbon\Carbon;

use App\User;

class TopReadPosts extends Criteria {

	public function __construct($number) {
		$this->number = $number;
	}

	public function apply($model, Repository $repository) {
		$model = $model->orderBy('reads', 'DESC');
		return $model;
	}
}


