<?php 

namespace App\Repositories;

use Bosnadev\Repositories\Contracts\RepositoryInterface;
use Bosnadev\Repositories\Eloquent\Repository;

class BlogRepository extends Repository {

	public function model()
	{
		return 'App\Blog';
	}

	

}