<?php 

namespace App;

use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole {

	/**
	 * @var array
	 */
	protected $fillable = ['name', 'display_name', 'description', 'level'];


	/**
	 * Role can Have many Permissions
	 * @return App\Permission
	 */
	public function permissions() {
		return $this->belongsToMany('App\Permission');
	}




}