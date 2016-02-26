<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\PublishedTrait;

class Faq extends Model
{
    
	use PublishedTrait;

	 /**
     * Set Mass Assignable
     * @var array
     */
	protected $fillable = ['question', 'answer', 'published', 'stared'];


		

 }