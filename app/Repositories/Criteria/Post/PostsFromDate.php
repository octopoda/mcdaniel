<?php 

namespace App\Repositories\Criteria\Post;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;

use Carbon;

class PostsFromDate extends Criteria {

	public function __construct($year) {
		$this->startYear = \Carbon\Carbon::createFromDate($year, 1, 1)->toDateTimeString();
		$this->endYear = \Carbon\Carbon::createFromDate($year, 12, 31)->toDateTimeString();
	}


	/**
	 * @param $model
	 * @param Repository $repository
	 *
	 * @return mixed
	 */
	public function apply($model, Repository $repository) {
		$model = $model->whereBetween('publish_date', [$this->startYear, $this->endYear])->orderBy('publish_date', 'ASC');
		return $model;
	}
}