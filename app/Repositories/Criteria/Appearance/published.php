<?php 

namespace App\Repositories\Criteria\Appearance;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;

class published extends Criteria {

	/**
	 * @param $model
	 * @param Repository $repository
	 *
	 * @return mixed
	 */
	public function apply( $model, Repository $repository ) {
		$model = $model->where('published', "=", 1)->orderBy('created_at', 'desc');
		return $model;
	}

}
