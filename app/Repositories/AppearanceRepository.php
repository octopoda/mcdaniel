<?php 

namespace App\Repositories;

use Bosnadev\Repositories\Contracts\RepositoryInterface;
use Bosnadev\Repositories\Eloquent\Repository;

class AppearanceRepository extends Repository {

	public function model()
	{
		return 'App\Appearance';
	}

	/**
	 * Store an image on s3 for Post
	 * @param  ImageRepository $image   
	 * @param  \App\Http\Request  $request 
	 * @return string - image path
	 */
	public function saveImageForAppearance($request, $name) {
		$image = new ImageRepository();
		return $image->storeImage($request, 'appearances', $name);
	}


}