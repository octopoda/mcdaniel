<?php 

namespace App\Repositories\Criteria\Role;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;

class UsersWithAppearances extends Criteria {


	/**
	 * Find Users with Roles
	 * @param $model
	 * @param Repository $repository
	 *
	 * @return mixed
	 */
	public function apply($model, Repository $repository )
	{
		$model = $model->with('users')->where('name', "=",  'appearance');
		return $model;
	}

}
