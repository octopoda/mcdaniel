<?php 


namespace App\Traits;

trait ContentTrait {

	 /**
    * Strip Slashes from the Title	
    * @param  [string] $value 
    * @return [string] 
    */
   protected function getTitleAttribute($value) {
        return stripslashes($value);
   }


   /**
    * Strip Slashes from Contrnt
    * @param  text $value 
    * @return text        
    */
   protected function getContentAttribute($value) {
   		return stripslashes($value);
   }

}