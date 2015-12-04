<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\PostRequest;
use App\Http\Controllers\Controller;

use Illuminate\Contracts\Auth\Guard;

use App\Repositories\PostRepository as Post;
use App\Repositories\BlogRepository as Blog;

use App\Repositories\Criteria\Post\PostsWithAuthor;


class PostController extends Controller
{
    
    /**
     * Post Model
     * @var /App/Post
     */
    protected $post;

    /**
     * Blog Model
     * @var /App/Blog
     */
    protected $blog;

    /**
     * @param Post $post [description]
     * @param Blog $blog [description]
     */
    public function __construct(Post $post, Blog $blog) {
        $this->post = $post;
        $this->blog = $blog;
    }


    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = $this->post->paginate(20);
        return View('dashboard.posts.index', compact('posts'));
    }  

    
    function deliverPresents($workerCount, $directioins, $start = [0,0]) {

    }


    /**
     * Display a crate form
     * @return \Illuminate\Http\Response
     */
    public function create() 
    {
        return View('dashboard.posts.create');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request, Guard $auth)
    {
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
            $filePath = $this->post->saveImageForPost($request);

            $post->post_image = $filePath;
            $post->update();
       }

       
       return view('dashboard.posts.show', compact('newpost'));
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
            $filePath = $this->post->saveImageForPost($request);
            $post->post_image = $filePath;
            $post->update();
        }

        return view('dashboard.posts.show', compact('post'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->post->delete($id);
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
        // return $this->repository->postByTitle($title);
    }


    /**
     * Search the Post 
     * @param  string $query 
     * @return JSON
     */
    public function searchPosts($query) {
        // return $this->repository->searchPosts($query);
    }


    /**
     * Get the Categories for Post
     * @param  int $id 
     * @return JSON     
     */
    public function getCategoriesForPost($id) {
        // return $this->repository->categoriesForPost($id);
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
        // $paginationNumber = 10;

        // $posts = DB::table('posts')->paginate($paginationNumber);
        // return view('posts.index', compact('posts'));
    }

    
    /**
     * Get  Post By Title and Return through View
     * @param  string $title 
     * @return /Illuminate/Html/Response
     */
    public function postByTitleView($title) {
        // $post = $this->repository->postByTitle($title);
        // return view('posts.post', compact('post'));
    }

    
    /**
     * Get Post By Category and Return through View
     * @param  string $category 
     * @return /Illuminate/Html/Response 
     */
    public function postsFromCategory($category) {
        // $posts = $this->repository->postsFromCategory($category);
        // return view('posts.list', compact('posts'));
    }


    /**
     * Get Post For Author and Return through View
     * @param  string $author 
     * @return /Illuminate/Html/Response
     */
    public function postsForAuthor($author) {
        // $posts = $this->repository->postsFromAuthor($author);
        // return view('posts.list', compact('posts'));
    }


    public function postByYear($year) {
        
    }

    
}
