<?php 
	namespace App\Repositories;

	use App\User;
	use App\Blog;
	use App\Post;
	


	class BlogRepository {


		public function getBlogsForUser($user_id) {

		}

		/**
		 * List the Authors of the Blog
		 * @return object 
		 */
		public function listBlogAuthors() {
			return Blog::with('User')->all();
		}

		public function listBlogAuthor($id) {
			$user = Blog::find($id)->user;
			return $user; 
		}

	
		/*
		|--------------------------------------------------------------------------
		| Post Methods
		|--------------------------------------------------------------------------
		|
		| Methods to the Posts for the blog in its different forms
		*/

		/**
		 * Get the Post for a Blog
		 * @param  int $id
		 * @return object     
		 */
		public function getAllPostsForBlog($id) {
			return Blog::findOrFail($id)->posts()->orderBy('publish_date')->get();
		}


		/**
		 * Get on the Published Post for Blog
		 * @param  [type] $id [description]
		 * @return [type]     [description]
		 */
		public function getPublishedPostsForBlog($id) {

		}


		/**
		 * Get Paginated List of Post for Blog
		 * @param  int $blog_id
		 * @param  int $howMany 
		 * @return App\Posts
		 */
		public function getPaginated($blog_id, $howMany) {
			return Blog::findOrFail($blog_id)->posts()->orderBy('publish_date')->simplePagniate($howMany);
		}



		/**
		 * Search the Post
		 * @param  string $query 
		 * @return App\Post        
		 */
		public function searchPosts($id, $query) {
			return Blog::findOrFail($id)->posts()->where('searchable', 'LIKE', "%{$query}%")->orWhere('title', 'LIKE', "%{$query}%")->with('categories')->get();
		}



		/*
		|--------------------------------------------------------------------------
		| CRUD Methods
		|--------------------------------------------------------------------------
		|
		| 
		*/
	
		/**
		 * Crate A Blog
		 * @param  [type] $request [description]
		 * @return [type]          [description]
		 */
		public function creteBlog($request) {
			return Blog::create($request->all());
		}

		
		/**
		 * Edit A Blog 
		 * @param  [type] $id      [description]
		 * @param  [type] $request [description]
		 * @return [type]          [description]
		 */
		public function editBlog($id, $request) {
			
		}


		/**
		 * Destory a Blog
		 * @param  [type] $id [description]
		 * @return [type]     [description]
		 */
		public function destoryBlog($id) {
			
		}

	}