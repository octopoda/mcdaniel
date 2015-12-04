<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\BlogRepository;

use App\Blog;

class BlogController extends Controller
{
    
    protected $repository;

    public function __construct(BlogRepository $repository) {
        $this->repository = $repository;
    }


    /**
     * Display List of Blogs.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Blog::all();
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Blog::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Blog::findorFail($id);
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
        return Blog::findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Blog::destroy($id);
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
     * Display a list of the Post for the Blog
     * @param  int $id 
     * @return \JSON
     */
    public function allPosts($id) {
        return $this->repository->getAllPostsForBlog($id);
    }

    
   
    /**
     * List the Authors
     * @return JSON
     */
    public function listAuthors() {
        return $this->repository->listAuthors();
    }


    /**
     * Search The Post in a Blog
     * @param  int $id    
     * @param  string $query 
     * @return JSON        
     */
    public function searchPosts($id, $query) {
        return $this->repository->searchPosts($id, $query);
    }   


}
