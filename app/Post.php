<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\PublishedTrait;


class Post extends Model
{
    
    use PublishedTrait;

    /**
     * Set Mass Assignable
     * @var array
     */
    protected $fillable = ['title', 'content', 'searchable', 'summary', 'publish_date', 'published', 'post_image', 'video', 'video_url', 'blog_id', 'direct_link', 'post_type'];


    /**
     * Define One to One relationship with Blog
     * @return
     */
    public function blog() 
    {
    	return $this->belongsTo('App\Blog');
    }

    /**
     * Define Pivot Table Relationship with Categories
     * @return 
     */
    public function categories() 
    {
    	return $this->belongsToMany('App\Category');
    }


/*
|--------------------------------------------------------------------------
| Attribute Settings
|--------------------------------------------------------------------------
|
|
*/
    
    /**
     * On Save set the direct link and the searacble feilds. 
     * @return String 
     */
    protected static function boot()
    {
        static::saving(function ($model) {
            $model->direct_link = str_replace(" ", "-", strtolower($model->title));
            $model->searchable = strip_tags($model->content);
        });
    }


    /**
     * On save/update set the publish date attribute
     * @param date $value 
     */
    protected function setPublishDateAttribute($value) {
        $this->attributes['publish_date'] = date('Y-m-d H:i:s', strtotime($value));
    }

   /**
    * Get the publish date attribute;
    * @param  date $value 
    * @return date        
    */
   protected function getPublishDateAttribute($value) {
        return date('F d, Y', strtotime($value));
   }


  


}
