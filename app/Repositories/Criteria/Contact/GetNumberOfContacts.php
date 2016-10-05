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
		$model = $model
			->where('email', '!=', 'jennifer@mcdanielnutrition.com')
			->where('email', "!=", 'zack@octopodainteractive.com')
			->where('email', "!=", 'zack@octopodamedia.com')
			->where('email', "!=", 'zack@2721west.com')
			->where('email', "!=", 'zack@2721west.comt')
			->where('email', "!=", 'mcdanieljen@me.com')
			->where('email', "!=", 'bobd@2721west.com')
			->orderBy('created_at', 'desc')
			->take($this->number);
		return $model;
	}

}
