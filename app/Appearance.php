<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\PublishedTrait;
use App\Traits\DirectLinkTrait;

class Appearance extends Model
{
    
    use PublishedTrait, DirectLinkTrait;

    /**
     * Fillable Attributes
     * @var [type]
     */
    protected $fillable = ['link', 'video_url', 'title', 'published', 'publication', 'user_id', 'appearance_date', 'thumbnail'];


    /**
     * Define one to many relationship with user
     * @return \app\User 
     */
    public function user() {
        return $this->belongsTo('\App\User');
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



    /**
     * Get the Appearance date in a readable date_format
     * @param  [String] $value 
     * @return [string]
     */
    public function getAppearanceDateAttribute($value) {
        if ($value == null) {
            return date('F d Y', strtotime($this->attributes['created_at']));
        } else {
            return date('F d Y', strtotime($value)); 
        }
        
    }


    /**
     * Set the appearance date back to the database readable format.
     * @param string $value 
     */
    public function setAppearanceDateAttribute($value) {
        $this->attributes['appearance_date'] = date('Y-m-d H:i:s', strtotime($value));
    } 
}

