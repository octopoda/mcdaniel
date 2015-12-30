<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    //
    
	protected $fillable = ['transaction_id', 'email', 'payer_id', 'total', 'fee', 'items'];
    
}
