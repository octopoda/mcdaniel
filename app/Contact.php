<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{

	protected $fillable = ['full_name', 'email', 'message', 'status', 'error_log'];

/*
|--------------------------------------------------------------------------
| Attribute Settings
|--------------------------------------------------------------------------
|
|
*/
    
  
     /**
      * Set Message Attribute
      * @param array $value 
      */
     public function setMessageAttribute($value) {
        $this->attributes['message'] = json_encode($value);
     }

     /**
      * Return Message Attibute back to Array from JSON 
      * @param  [json] $value 
      * @return [array] 
      */
     public function getMessageAttribute($value) {
        if ($value) {
          return json_decode($value, true);
        }
     }



     /**
      * Set Error Attribute
      * @param array $value 
      */
     public function setErrorLogAttribute($value) {
        $this->attributes['error_log'] = json_encode($value);
     }


     /**
      * Return Error Attibute back to Array from JSON 
      * @param  [json] $value 
      * @return [array] 
      */
     public function getErrorLogAttribute($value) {
        if ($value) {
          return json_decode($value, true);
        }
     }

     

     /**
      * Change the Status to Text readable
      * @param  int $value 
      * @return string        
      */
     public function getStatusAttribute($value) {
        if ($value) {
            return 'Failed';
        } else {
            return 'Sent';
        }
     }

}
