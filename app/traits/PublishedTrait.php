<?php 

namespace App\Traits;

trait PublishedTrait {

	/**
	 * Change the attribute to readable
	 * @param  int $value 
	 * @return string
	 */
	public function getPublishedAttribute($value) {
		if ($value) {
			return 'published';
		} else {
			return 'draft';
		}
	}


	/**
	 * Check to see if model is published
	 * @return boolean 
	 */
	public function isPublished() {
		if ($this->published == 'draft') {
			return false;
		}
		return true;
	}



}