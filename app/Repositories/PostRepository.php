<?php 

namespace App\Repositories;

use Bosnadev\Repositories\Contracts\RepositoryInterface;
use Bosnadev\Repositories\Eloquent\Repository;

use App\Repositories\ImageRepository;

class PostRepository extends Repository {

	/**
	 * Set Modal
	 * @return \App\Post
	 */
	public function model()
	{
		return 'App\Post';
	}

	
	/**
	 * Store an image on s3 for Post
	 * @param  ImageRepository $image   
	 * @param  \App\Http\Request  $request 
	 * @return string - image path
	 */
	public function saveImageForPost($request) {
		$image = new ImageRepository();
		return $image->storeImage($request, 'posts', 'post_image');
	}


	public function getPostTypes() {
		return ['Nutrition 101', 'Recipes', 'Nutrition News', 'Personal'];
	}


}