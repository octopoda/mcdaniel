<?php 
	namespace App\Repositories;

	use App\Repositories\ImageRepository;

	use App\Blog;
	use App\Post;
	use App\Category;

	use Storage;

	class PostRepository {


		/*
		|--------------------------------------------------------------------------
		| Working with Relationships and 
		|--------------------------------------------------------------------------
		|
		|
		*/
		
		/**
		 * Get the Post by A  Direct Link
		 * @param  string $title 
		 * @return App\Post
		 */
		public function postByTitle($title)  {
			return Post::where('direct_link', $title)->get();
		}

	
		/**
		 * Search the Post
		 * @param  string $query 
		 * @return App\Post        
		 */
		public function searchPosts($query) {
			return Post::where('searchable', 'LIKE', "%{$query}%")->orWhere('title', 'LIKE', "%{$query}%")->with('categories')->get();
		}

		/**
		 * Return the Categories for a Post
		 * @param  int $id 
		 * @return App\Post
		 */
		public function categoriesforPost($id) {
			return Post::findOrFail($id)->categories()->get();
		}



		/*
		|--------------------------------------------------------------------------
		| CRUD Methods
		|--------------------------------------------------------------------------
		|
		|
		*/
		

		public function preparePostForDatabase($request) {
			$imageRepository = new ImageRepository();
			$filename = $imageRepository->storeImage($request, 'posts', 'post_image');

			$post = [
				"title" => $request->input('title'),
				"content" => $request->input('content'),
				"searchable" => strip_tags($request->input('content')),
				"publish_date" => $request->input('publish_date'),
				"draft" => "1",
				"direct_link" => str_replace(" ", "-", $request->input('title')),
				"blog_id" => "1",
				"post_image" => $filename
			];
			
			return $post;
		}




	}