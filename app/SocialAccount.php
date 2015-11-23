<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class socialAccount extends Model
{
    /**
     * Table not in opiniated formta
     * @var string
     */
    public $table = "social_accounts";


    /**
     * filleable by mass assignment
     * @var array
     */
    public $fillable = [];


    public function users() {
    	return $this->belongsTo('App\User');
    }
}
