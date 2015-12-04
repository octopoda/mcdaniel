<?php 
	namespace App\Repositories;

	use App\Repositories\ImageRepository;

	use App\Blog;
	use App\Post;
	use App\Category;
	use App\User;

	use Storage;

	class OldPostRepository {


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
			return Post::with('categories')->where('direct_link', $title)->first();
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


		/**
		 * Return the Posts assocaited with a cateogry
		 * @param  string $category 
		 * @return App\Post
		 */
		public function postsFromCategory($category) {
			$category =  Category::with('Posts')->where('title', "=", $category)->first();
			return $category->posts;
		}

		/**
		 * Return the Posta Associated with a user
		 * @param  string $author 
		 * @return App\Post
		 */
		public function postsFromAuthor($author) {
			$name = str_replace("-", " ", $author);
			$user = User::where("name",  "=" , $name)->with('blog')->first();
			$blog = Blog::with('posts')->findOrFail($user->blog->id);
			return $blog->posts;
		}



		/*
		|--------------------------------------------------------------------------
		| CRUD Methods
		|--------------------------------------------------------------------------
		|
		|
		*/
		

		public function saveImageForPost($request) {
			$imageRepository = new ImageRepository();
			return $imageRepository->storeImage($request, 'posts', 'post_image');
		}




	}