<?php 

namespace App\Http;

/**
* 	
*/
class Flash 
{
	
	
	/**
	 * Create the Flash Session Object
	 * @return Session
	 */
	protected function create($title, $message, $type, $icon) {
		session()->flash('flash_message', [
			"title" => $title,
			"message" => $message,
			"type" => $type,
			"icon" => $icon
		]);
	}

	/**
	 * Info Flash
	 * @param  string $title   
	 * @param  string $message 
	 * @return session          
	 */
	public function info($title, $message) {
		return $this->create($title, $message, 'info', 'info');
	}

	/**
	 * Success Flash
	 * @param  string $title   
	 * @param  string $message 
	 * @return session          
	 */
	public function success($title, $message) {
		return $this->create($title, $message, 'success', 'check');
	}

	/**
	 * Error Flash
	 * @param  string $title   
	 * @param  string $message 
	 * @return session          
	 */
	public function error($title, $message) {
		return $this->create($title, $message, 'error', 'times');
	}

	/**
	 * Warning Flash
	 * @param  string $title   
	 * @param  string $message 
	 * @return session          
	 */
	public function warning($title, $message) {
		return $this->create($title, $message, 'warning', 'exclamation-triangle');
	}




}