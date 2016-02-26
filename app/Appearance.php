<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\PublishedTrait;

class Appearance extends Model
{
    
    use PublishedTrait;

    /**
     * Fillable Attributes
     * @var [type]
     */
    protected $fillable = ['link', 'video_url', 'title', 'published', 'publication', 'user_id', 'appearance_date'];


    /**
     * Define one to many relationship with user
     * @return \app\User 
     */
    public function user() {
        return $this->belongsTo('\App\User');
    }


    /**
     * Get the Appearance date in a readable date_format
     * @param  [String] $value 
     * @return [string]
     */
    public function getAppearanceDateAttribute($value) {
        return date('F d Y, H:i', strtotime($value)); 
    }


    /**
     * Set the appearance date back to the database readable format.
     * @param string $value 
     */
    public function setAppearanceDateAttribute($value) {
        $this->attributes['appearance_date'] = date('Y-m-d H:i:s', strtotime($value));
    } 
}

