<?php 

namespace App\Repositories;

use Bosnadev\Repositories\Contracts\RepositoryInterface;
use Bosnadev\Repositories\Eloquent\Repository;

use App\Repositories\ImageRepository;


class ProductRepository extends Repository {

	/**
	 * Set Modal
	 * @return \App\Post
	 */
	public function model()
	{
		return 'App\Product';
	}



	/**
	 * Store an image on s3 for Post
	 * @param  ImageRepository $image   
	 * @param  \App\Http\Request  $request 
	 * @return string - image path
	 */
	public function saveProductToAmazon($request, $name) {
		$image = new ImageRepository();
		return $image->storeImage($request, 'products', $name);
	}



}