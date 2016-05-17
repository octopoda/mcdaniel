<?php 

namespace App\Repositories\Criteria\Transaction;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;

class SearchProducts extends Criteria {

	protected $id;
	
	public function __contrust($id) {
		$this->id = $id;

	}

	public function apply( $model, Repository $repository ) {
		$model = $model->where('items', 'REGEXP',  '[^"'.$this->id.'"$]')->orderBy('updated_at', 'DESC');
		return $model;
	}

}