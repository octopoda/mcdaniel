<?php 

namespace App\Repositories\Criteria\Product;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class PublishedProducts extends Criteria {

	
	public function apply( $model, Repository $repository ) {
		$model = $model->where('published', '=', 1)->orderBy('updated_at', 'DESC');
		return $model;
	}

}