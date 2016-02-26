<?php 

namespace App;

use Zizaco\Entrust\EntrustPermission;

class Permission extends EntrustPermission {

	/**
	 * @var array
	 */
	protected $fillable = ['name', 'display_name', 'description'];



	public function Role() {
		return $this->belongsToMany('App\Permissions');
	}


	/**
	 * Check to see if Permission has a Role
	 * @param $roleName
	 * @return bool
	 */
	public function hasRole($roleName) {
		foreach($this->roles as $role) {
			if($role->name == $roleName) {
				return true;
			}
		}
		
		return false;
	}




}