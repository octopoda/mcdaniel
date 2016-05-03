<?php 

namespace App\Repositories\Criteria\Post;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class PostTypes extends Criteria {

	/**
	 * Type
	 * @var String
	 */
	protected $type;

	public function __construct($type) {
		$this->type = $type;
	}

	public function apply($model, Repository $repository) {
		$key = array_search(ucwords($this->type), $model->post_types);
		$model = $model->where('post_type', '=', $key)->orderBy('publish_date', 'desc');
		return $model;
	}
}