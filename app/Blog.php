<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    
     /**
     * The attributes that are mass assignable.
     * @var array
     */
    protected $fillable = ['user_id'];


     /**
     * Define One to Many Relationship with Posts
     * @return  App\Post
     */
    public function posts() {
    	return $this->hasMany('App\Post')->orderBy('publish_date', 'DESC');
    }

    /**
     * Define the One to One Relationship with User
     * @return App\User
     */
    public function user() {
    	return $this->belongsTo('App\User');
    }
}
