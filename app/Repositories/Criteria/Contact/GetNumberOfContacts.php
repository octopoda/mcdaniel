<?php 

namespace App\Repositories\Criteria\Contact;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;

class GetNumberOfContacts extends Criteria {

	/**
	 * Number of Contacts
	 * @var integer
	 */
	protected $number;

	/**
	 * Construct
	 * @param int $number 
	 */
	public function __construct($number) {
		$this->number = $number;
	}

	/**
	 * @param $model
	 * @param Repository $repository
	 *
	 * @return mixed
	 */
	public function apply( $model, Repository $repository ) {
		$model = $model->orderBy('created_at', 'desc')->take($this->number);
		return $model;
	}

}
