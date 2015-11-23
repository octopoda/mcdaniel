<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\PostRequest;
use App\Http\Controllers\Controller;

use App\Post;

use App\Repositories\PostRepository;
use App\Repositories\BlogRepository;

class PostController extends Controller
{
    
    /**
     * Post Respository
     * @var App\Respositories\PostRepository
     */
    protected $repository;
    
    /**
     * Blog Respository
     * @var App\Respositories\BlogRepository
     */
    protected $blog_repository;

    public function __construct(PostRepository $post_repository, BlogRepository $blog_repository) {
        $this->repository = $post_repository;
        $this->blog_repository = $blog_repository;
    }


    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts =  Post::all();
        return View('dashboard.posts.index', compact('posts'));
    }   


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
    public function store(PostRequest $request)
    {
        
       $post = $this->repository->preparePostForDatabase($request);
       $newPost = Post::create($post);
       return $newPost;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::with('blog', 'categories')->findOrFail($id);
        $post->content = stripcslashes($post->content);
        $author = $this->blog_repository->listBlogAuthor($post->blog->id);
        return view('dashboard.posts.view', compact('post','author'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::with('categories', 'blog')->findOrFail($id);
        return view('dashboard.posts.edit', compact('post'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Post::findOrFail($id);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    /*
    |--------------------------------------------------------------------------
    | Non - Resourse Driven Route
    |--------------------------------------------------------------------------
    |
    | Route that are not part of the Laravel resouces call;
    |
    */
   
    /**
     * Show Post By the Title
     * @param  string $title 
     * @return   \Illuminate\Http\Response      
     */
    public function postByTitle($title) {
        return $this->repository->postByTitle($title);
    }


    public function searchPosts($query) {
        return $this->repository->searchPosts($query);
    }


    public function getCategoriesForPost($id) {
        return $this->repository->categoriesForPost($id);
    }


    
}
