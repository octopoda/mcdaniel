<?php 

namespace App\Repositories\Criteria\Post;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;

use Carbon\Carbon;

use App\User;

class TrendingPosts extends Criteria {

	public function __construct($number) {
		$this->number = $number;
	}

	public function apply($model, Repository $repository) {
		$model = $model->where('created_at', '>=', Carbon::now()->subDays(90))->orderBy('reads', 'DESC')->take($this->number);
		return $model;
	}
}


