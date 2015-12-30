<?php 

namespace App\Repositories\Criteria\Post;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class SearchPosts extends Criteria {

	public function __construct($query) {
		$this->query = $query;
	}

	public function apply($model, Repository $repository) {
		$model = $model->where('searchable', 'LIKE', "%{$this->query}%")->orWhere('title', 'LIKE', "%{$this->query}%")->orderBy('publish_date', 'desc');
		return $model;
	}
}