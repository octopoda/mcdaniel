<?php 

namespace App\Repositories\Criteria\Post;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class SearchCategory extends Criteria {

	public function __construct($query) {
		$this->query = $query;
	}

	public function apply($model, Repository $repository) {
		$model = $model->where('direct_link', "=", $this->title);
		return $model;
	}
}