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

    /**
     * About Routes
     * @return [type] [description]
     */
    public function about() {
    	return view('pages.about');
    }

    public function jennifer() {
        return view('pages.team.jennifer');
    }

    public function getStarted() {
        return view('pages.get-started');
    }

    public function weightLoss() {
        return view('pages.individual.weightloss');
    }


    public function sports() {
        return view('pages.individual.sports');
    }


    public function maternal() {
        return view('pages.individual.maternal');
    }

    public function rmr() {
        return view('pages.individual.rmr');
    }


    public function corporate() {
        return view('pages.corporate.corporate');
    }


   
    public function contact() {
        return view('pages.contact');
    }
}

