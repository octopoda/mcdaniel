<?php 

namespace App\Repositories\Criteria\Faq;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class SearchFAQs extends Criteria {

	public function __construct($query) {
		$this->query = $query;
	}

	public function apply($model, Repository $repository) {
		$model = $model->where('question', 'LIKE', "%{$this->query}%");
		return $model;
	}
}