<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Post extends Model
{
    /**
     * Set Mass Assignable
     * @var array
     */
    protected$fillable = ['title', 'content', 'searchable', 'summary', 'publish_date', 'draft', 'post_image', 'video', 'video_url', 'blog_id', 'direct_link'];


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


    protected static function boot()
    {
        static::saving(function ($model) {
            $model->direct_link = str_replace(" ", "-", $model->title);
            $model->searchable = strip_tags($model->content);
        });
    }


}
