<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\PostRequest;
use App\Http\Controllers\Controller;

use Illuminate\Contracts\Auth\Guard;

use App\Repositories\PostRepository as Post;
use App\Repositories\BlogRepository as Blog;
use App\Repositories\UserRepository as User;
use App\Repositories\CategoryRepository as Category;

use App\Repositories\Criteria\Post\PostsWithAuthor;
use App\Repositories\Criteria\Post\AscendingOrder;
use App\Repositories\Criteria\Post\SearchPosts;
use App\Repositories\Criteria\Post\PostsFromDate;
use App\Repositories\Criteria\Post\RandomPosts;

class PostController extends Controller
{

    /**
     * Post Model
     * @var \App\Post
     */
    protected $post;

    /**
     * Blog Model
     * @var \App\Blog
     */
    protected $blog;


    /**
     * User Model
     * @var \App\User
     */
    protected $user;

    /**
     * Category Model
     * @var \App\Category
     */
    protected $category;


    /**
     * @param Post $post [description]
     * @param Blog $blog [description]
     */
    public function __construct(Post $post, Blog $blog, User $user, Category $category) {
        $this->post = $post;
        $this->blog = $blog;
        $this->user = $user;
        $this->category = $category;
    }


    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = $this->post->pushCriteria(new AscendingOrder())->paginate(10);
        return View('dashboard.posts.index', compact('posts'));
    }  

    
    

    /**
     * Display a crate form
     * @return \Illuminate\Http\Response
     */
    public function create() 
    {
        $post = $this->post;
        $post->postTypes = $this->post->getPostTypes();
        return View('dashboard.posts.create', compact('post'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request, Guard $auth)
    {
        $date = $request->get('publish_date');

        $date = date('Y-m-d H:i:s', strtotime($date));
        

       //Look for Blog from User
       $blog = $this->blog->findBy('user_id', $auth->user()->id);
       
       //If not there add blog 
       if ($blog == false) {
            $request['user_id']= $auth->user()->id;
            $blog = $this->blog->create($request->all());
       }
       
       //Save the Image
       $request['blog_id'] = $blog->id;
       $post = $this->post->create($request->all());


       if ($request->hasfile('post_image')) {
            $filePath = $this->post->saveImageForPost($request, 'post_image');

            $post->post_image = $filePath;
            $post->update();
       }

       if ($request->hasfile('post_thumbnail')) {
            $filePath = $this->post->saveImageForPost($request, 'post_thumbnail');

            $post->post_thumbnail = $filePath;
            $post->update();
       }


       if ($request->hasfile('post_facebook')) {
            $filePath = $this->post->saveImageForPost($request, 'post_facebook');

            $post->post_facebook = $filePath;
            $post->update();
       }

       
       //Show Flash
       flash()->success("", "The Post was Created");
       return view('dashboard.posts.show', compact('post'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = $this->post->find($id);
        return view('dashboard.posts.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = $this->post->find($id);
        $post->postTypes = $this->post->getPostTypes();
        $post->publish_date = date('F d, Y h:m A', strtotime($post->publish_date));
        return view('dashboard.posts.edit', compact('post'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, $id)
    {
        $post = $this->post->find($id);
        $post->update($request->all());
        
        if ($request->hasfile('post_image')) {
            $filePath = $this->post->saveImageForPost($request, 'post_image');
            $post->post_image = $filePath;
            $post->update();
        }

           if ($request->hasfile('post_thumbnail')) {
            $filePath = $this->post->saveImageForPost($request, 'post_thumbnail');

            $post->post_thumbnail = $filePath;
            $post->update();
       }


       if ($request->hasfile('post_facebook')) {
            $filePath = $this->post->saveImageForPost($request, 'post_facebook');

            $post->post_facebook = $filePath;
            $post->update();
       }

       
        flash()->success("", "Your Post is Updated");
        return view('dashboard.posts.show', compact('post'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $this->post->delete($id);
        
        if ($request->ajax()) {
            return $id;
        }
        
        flash()->success("", "Your Post was Deleted"); 
        return redirect('/dashboard/posts');
    }


    /*
    |--------------------------------------------------------------------------
    | Non - Resourse Driven JSON Routes
    |--------------------------------------------------------------------------
    |
    | Route that are not part of the Laravel resouces call
    | And are handed
    |
    */
   
    /**
     * Show Post By the Title
     * @param  string $title 
     * @return JSON
     */
    public function postByTitle($title) {
        $post = $this->post->findBy('direct_link', $title);
        return compact('post');
    }


    /**
     * Search the Post 
     * @param  string $query 
     * @return JSON
     */
    public function searchPosts($query) {
        $posts = $this->post->pushCriteria(new SearchPosts($query))->paginate(25);
        return compact('posts');
    }


    /**
     * Return a number of posts
     * @return JSON
     */
    public function postByNumber($number) {
        $posts = $this->post->pushCriteria(new AscendingOrder())->paginate($number);
        foreach ($posts as $post) {
            $post->author = $post->blog->user->name;
        }
        return $posts;
    }

    /**
     * Upload Image for Post
     * @param  Request $request 
     * @return JSON           
     */
    public function imageUpload(Request $request) {
        $filePath = $this->post->saveImageForPost($request, 'file');

        return ['filelink'=> $filePath ];
    }




     /*
    |--------------------------------------------------------------------------
    | Non - Resourse Driven VIEW Routes
    |--------------------------------------------------------------------------
    |
    | Route that are not part of the Laravel resouces call;
    | And are handled by the View
    |
    */


    /**
     * Get all Post From Pagination
     * @return /Illuminate/Html/Response
     */
    public function paginatePost() {
        $posts = $this->post->pushCriteria(new AscendingOrder())->paginate(20);
        $types = $this->post->getPostTypes();
        $categories = $this->category->all();
        $main = $posts->pull(0);
        $second = $posts->pull(1);
        
        return view('posts.index', compact('posts', 'types', 'categories', 'main', 'second'));
    }

    
    /**
     * Get  Post By Title and Return through View
     * @param  string $title 
     * @return /Illuminate/Html/Response
     */
    public function postByTitleView($title) {
        $post = $this->post->findBy('direct_link', $title);
        $posts = $this->post->all();
        $random = $posts->random(3);
        return view('posts.post', compact('post', 'random'));
    }

    
    /**
     * Get Post By Category and Return through View
     * @param  string $category 
     * @return /Illuminate/Html/Response 
     */
    public function postsFromCategory($category) {
        $posts = $this->post->pushCriteria(new SearchPosts($category))->paginate(25);
        return view('posts.list', compact('posts'));
    }


    /**
     * Get Post For Author and Return through View
     * @param  string $author 
     * @return /Illuminate/Html/Response
     */
    public function postsForAuthor($author) {
        $user = $this->user->findBy('name', str_replace("-", " ", $author));
        $blog = $this->blog->find($user->blog->id);
        $posts = $blog->posts()->paginate(25);
        return view('posts.list', compact('posts'));
    }


    /**
     * Get Post By Year
     * @param  int $year 
     * @return /Illuminate/Html/Response 
     */
    public function postByDate($year) {
        $posts = $this->post->pushCriteria(new PostsFromDate($year))->paginate(25);
        return view('posts.list', compact('posts'));
    }



    
}
