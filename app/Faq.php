<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\PublishedTrait;
use App\Traits\DirectLinkTrait;

class Faq extends Model
{
    
	use PublishedTrait, DirectLinkTrait;

	 /**
     * Set Mass Assignable
     * @var array
     */
	protected $fillable = ['question', 'answer', 'published', 'stared'];

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
            $model->direct_link = $model->santize($model->question);
        });
    }

		

 }