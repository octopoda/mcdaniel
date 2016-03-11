<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{

	protected $fillable = ['full_name', 'email', 'message'];

	


/*
|--------------------------------------------------------------------------
| Attribute Settings
|--------------------------------------------------------------------------
|
|
*/
    
    /**
     * On Save make the message JSON
     * @return String 
     */
    protected static function boot()
    {
        static::saving(function ($model) {
        	$model->message = json_encode($model->message);
        });
     }

}
