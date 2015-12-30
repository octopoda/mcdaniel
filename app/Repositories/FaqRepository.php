<?php 

namespace App\Repositories;

use Bosnadev\Repositories\Contracts\RepositoryInterface;
use Bosnadev\Repositories\Eloquent\Repository;


class FaqRepository extends Repository {

	/**
	 * Set Modal
	 * @return \App\Post
	 */
	public function model()
	{
		return 'App\Faq';
	}


}