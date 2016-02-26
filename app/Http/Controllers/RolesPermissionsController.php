<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Repositories\Criteria\Role\RoleLowerOrEqualToCurrentUser;
use App\Repositories\RoleRepository as Role;
use App\Repositories\PermissionRepository as Permission;
use Illuminate\Contracts\Auth\Guard;

class RolesPermissionsController extends Controller
{
    
      /**
     * Role Var
     * @var App/Role
     */
    protected $role; 


    /**
     * Role Permission
     * @var App/Permission
     */
    protected $permission;


    /**
     * Auth 
     * @var /Gaurd
     */
    protected $auth;


    /**
     * @param Permission $permission [description]
     * @param Role       $role       [description]
     * @param Guard      $auth       [description]
     */
    public function __construct(Permission $permission, Role $role, Guard $auth) {
        $this->permission = $permission;
        $this->role = $role;
        $this->auth = $auth;
    }



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $roles = $this->role->pushCriteria(new RoleLowerOrEqualToCurrentUser($this->auth->user()))->all();
       $permissions = $this->permission->all();
       return view('dashboard.rolepermission.index', compact('roles', 'permissions'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
