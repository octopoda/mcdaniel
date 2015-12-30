<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    
	 /**
     * Set Mass Assignable
     * @var array
     */
	protected $fillable = ['question', 'answer', 'published', 'stared'];


	

 }