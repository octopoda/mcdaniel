<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
	 /**
     * Set Mass Assignable
     * @var array
     */
	protected $fillable = ['title', 'direct_link', 'published'];


	/**
	 * Define Pivot Table Relationship with Posts
	 * @return 
	 */
	public function posts() {
		return $this->belongsToMany('App\Post');
	} 

 }