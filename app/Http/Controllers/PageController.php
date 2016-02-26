<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Repositories\PostRepository as Post;
use App\Repositories\Criteria\Post\AscendingOrder;

class PageController extends Controller
{
    
    /**
     * Post Model
     * @var App\Post
     */
    protected $post;

    
    public function __construct(Post $post) {
        $this->post = $post;
    }

    /**
     * Home Page Route
     * @return \Illuminate\Http\Response
     */
    public function home() {
        $posts = $this->post->pushCriteria(new AscendingOrder())->paginate(6);
        return view('pages.index', compact('posts'));
    }



    public function patients() {
    	return view('pages.patients');
    }


    public function corporate() {
    	return view('pages.corporate');
    }

    public function about() {
    	return view('pages.about');
    }
}

