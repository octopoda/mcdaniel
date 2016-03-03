<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\PublishedTrait;
use App\Traits\DirectLinkTrait;

class Category extends Model
{

	use PublishedTrait, DirectLinkTrait;
    
	 /**
     * Set Mass Assignable
     * @var array
     */
	protected $fillable = ['title', 'direct_link', 'published', 'search_terms'];


	/**
	 * Define Pivot Table Relationship with Posts
	 * @return 
	 */
	public function posts() {
		return $this->belongsToMany('App\Post');
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
            $model->direct_link = $model->sanitize($model->title);
        });
    }


 }