<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Repositories\PostRepository as Post;
use App\Repositories\BlogRepository as Blog;
use App\Repositories\UserRepository as User;
use App\Repositories\AppearanceRepository as Appearance;
use App\Repositories\CategoryRepository as Category;
use App\Repositories\FaqRepository as Faq;
use App\Repositories\ProductRepository as Product;

use App\Repositories\Criteria\Post\PostsWithAuthor;
use App\Repositories\Criteria\Post\AscendingOrder;
use App\Repositories\Criteria\Post\SearchPosts;
use App\Repositories\Criteria\Post\PostsFromDate;



class AjaxController extends Controller
{
 
      
    public function __construct(Post $post, Blog $blog, User $user, Appearance $appearance, Category $category, Faq $faq, Product $product) {
        $this->post = $post;
        $this->blog = $blog;
        $this->user = $user;
        $this->appearance = $appearance;
        $this->category = $category;
        $this->faq = $faq;
        $this->product = $product;
    }


    /**
     * Toggle the publish a Model
     * @param  String $model 
     * @param  Int    $id    
     * @return model        
     */
    public function publish($model, $id) {
        $newModel = $this->$model->find($id);

        if ($newModel->isPublished()) {
            $newModel->published = 0;    
            $message = "Your " . $model . " is in draft mode";
            $published = false;
        } else {
            $newModel->published = 1;    
            $message = "Your " . $model . " published";
            $published = true;
        }
        
        $newModel->save();

        return compact('message', 'published');
    } 

    

}
