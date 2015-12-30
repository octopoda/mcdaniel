<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appearance extends Model
{
    /**
     * Fillable Attributes
     * @var [type]
     */
    protected $fillable = ['link', 'video_url', 'title', 'published', 'publication', 'user_id'];


    /**
     * Define one to many relationship with user
     * @return \app\User 
     */
    public function user() {
        return $this->belongsTo('\App\User');
    }
}
