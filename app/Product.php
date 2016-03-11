<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\PublishedTrait;
use App\Traits\DirectLinkTrait;


class Product extends Model
{
    
    use PublishedTrait, DirectLinkTrait;

    /**
     * Set Mass Assignable
     * @var array
     */
    protected $fillable = ['title', 'description', 'searchable', 'price',  'product_image', 'paypal_url', 'direct_link',  'published', "url"];


    /**
     * Add Direct Link to File
     * @return [type] [description]
     */
    protected static function boot()
    {
        static::saving(function ($model) {
            $model->direct_link = $model->sanitize($model->title);
            $model->searchable = strip_tags($model->description);
        });
    }


}
