<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\PermissionRequest;
use App\Http\Controllers\Controller;

use App\Repositories\PermissionRepository as Permission;
use App\Repositories\RoleRepository as Role;


class PermissionController extends Controller
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


    public function __construct(Permission $permission, Role $role) {
        $this->permission = $permission;
        $this->role = $role;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $permissions = $this->permission->paginate(20);
        return view('dashboard.permissions.index', compact('permissions'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.permissions.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PermissionRequest $request)
    {
        $permission = $this->permission->create($request->all());

        $role = $this->role->findBy('name', 'admin');
        $role->perms()->sync([$permission->id], false);

        return redirect('/dashboard/permissions');
    }

  

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $permission = $this->permission->find($id);
        return view('dashboard.permissions.edit', compact('permission'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PermissionRequest $request, $id)
    {
        $permission = $this->permission->find($id);
        $permission->update($request->all());

        return redirect('/dashboard/permissions');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->permission->delete($id);
        return redirect('/dashboard/permissions');
    }
}
