<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    /**
     * Set Mass Assignable
     * @var array
     */
    protected $fillable = ['title', 'description', 'searchable', 'price',  'product_image', 'paypal_url', 'direct_link', 'product'];


    /**
     * Add Direct Link to File
     * @return [type] [description]
     */
    protected static function boot()
    {
        static::saving(function ($model) {
            $model->direct_link = str_replace(" ", "-", $model->title);
            $model->searchable = strip_tags($model->description);
        });
    }


}
