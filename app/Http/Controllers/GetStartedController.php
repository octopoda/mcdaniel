<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Repositories\CategoryRepository as Category;
use App\Repositories\PostRepository as Post;

use App\Repositories\Criteria\Post\SearchPosts;
use App\Repositories\Criteria\Post\GetNumberOfPosts;

class GetStartedController extends Controller
{
   
    /**
     * Cateogry Model
     * @var /App/Category
     */
    protected $category;

    /**
     * Post Model
     * @var /App/Post
     */
    protected $post;

    /**
     * Initialize the Class
     * @param Category $category 
     */ 
    public function __construct(Category $category, Post $post) {
        $this->category = $category;
        $this->post = $post;
    }

    /**
     * Index Pages (No services selected);
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('getstarted.index');
    }


    /**
     * Weight Loss View
     * @return \Illuminate\Http\Response
     */
   public function weight() {
       $posts = $this->grabPosts('weight loss');
       $faqs = null;
       return view('getstarted.weight', compact('posts', 'faqs'));
   }

   /**
    * Sports View
    * @return \Illuminate\Http\Response
    */
   public function sports() {
        $posts = $this->grabPosts('sports nutrition');
        $faqs = null;
        return view('getstarted.sports', compact('posts', 'faqs'));
   } 

   
   /**
    * Maternal Nutrition View
    * @return \Illuminate\Http\Response 
    */
   public function maternal() {
        $posts = $this->grabPosts('maternal nutrition');
        $faqs = null;
        return view('getstarted.maternal', compact('posts', 'faqs'));
   }

   /**
    * Coporate Wellness View
    * @return \Illuminate\Http\Response
    */
   public function corporate() {
        $posts = $this->grabPosts('corporate wellness');
        $faqs = null;
        return view('getstarted.corporate', compact('posts', 'faqs'));
   }

   /**
    * RMR Testing View
    * @return \Illuminate\Http\Response 
    */
   public function rmr() {
        return view('getstarted.rmr');
   }

   /**
    * Thank You View
    * @return \Illuminate\Http\Response 
    */
   public function thanks() {
        return view('getstarted.thanks'); 
   }


   /*
   |--------------------------------------------------------------------------
   | Helper Methods
   |--------------------------------------------------------------------------
   |
   */
  
    /**
     * Get Post Associated with Category Search Terms   
     * @param  string $link  directLink of Category
     * @return /Illminate/Collection
     */
    private function grabPosts($link) {
        $category = $this->category->findBy('title', $link);

        if (empty($category)) {
            $posts = $this->post->pushCriteria(new SearchPosts($link))->pushCriteria(new GetNumberOfPosts(4))->all();
        } elseif ($category->search_terms == null) {
            $posts = $this->post->pushCriteria(new SearchPosts($category->title))->pushCriteria(new GetNumberOfPosts(4))->all();
        } else {
            $posts = $this->post->pushCriteria(new SearchPosts($category->search_terms))->pushCriteria(new GetNumberOfPosts(4))->all();
        }

        return $posts;
    }

}
