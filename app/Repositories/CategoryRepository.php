<?php 

namespace App\Repositories;

use Bosnadev\Repositories\Contracts\RepositoryInterface;
use Bosnadev\Repositories\Eloquent\Repository;

use App\Repositories\ImageRepository;

class CategoryRepository extends Repository {

	/**
	 * Set Modal
	 * @return \App\Post
	 */
	public function model()
	{
		return 'App\Category';
	}

	
	

}