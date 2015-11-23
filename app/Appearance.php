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
     * Setting up foregin Constraint to user_id
     */
    function Users() {
    	$this->belongsTo('/App/Users');
    }
}
