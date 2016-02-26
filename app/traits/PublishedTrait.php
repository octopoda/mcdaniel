<?php 

namespace App\Traits;

trait PublishedTrait {


	public function getPublishedAttribute($value) {
		if ($value) {
			return 'published';
		} else {
			return 'draft';
		}
	}


	public function isPublished() {
		if ($this->published == 'draft') {
			return false;
		}
		
		return true;
	}
}