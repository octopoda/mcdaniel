<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\RoleRequest;
use App\Http\Controllers\Controller;

use App\Repositories\PermissionRepository as Permission;
use App\Repositories\RoleRepository as Role;

use  App\Repositories\Criteria\Role\RolesWithPermissions;

class RoleController extends Controller
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
        $roles = $this->role->pushCriteria(new RolesWithPermissions())->paginate(10);
        return view('dashboard.roles.index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $permissions = $this->permission->all();
        return view('dashboard.roles.create', compact('permissions'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RoleRequest $request)
    {
        $role = $this->role->create($request->all());
        $role->savePermissions($request->get('permissions'));
        flash()->success('', 'The role was created');
        return redirect('/dashboard/roles');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $role = $this->role->find($id);
        if ($role->id == 1) {
            abort(403);
        }
        
        $permissions = $this->permission->all();
        $rolePerms = $role->perms();
        return view('dashboard.roles.edit', compact('role', 'permissions', 'rolePerms'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RoleRequest $request, $id)
    {
        $role = $this->role->find($id);
        $role->update($request->all());

        $role->savePermissions($request->get('permissions'));
        flash()->success('', 'The role was updated');
        return redirect('/dashboard/roles');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        if ($id == 1) { abort(403); }

        $this->role->delete($id);

        if ($request->ajax()) {
            return $id;
        }
        
        return redirect('/dashboard/roles');
    }
}
