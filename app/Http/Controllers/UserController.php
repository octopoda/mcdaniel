<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;

use App\Repositories\UserRepository as User;
use App\Repositories\RoleRepository as Role;
use App\Repositories\Criteria\User\UsersWithRoles;

use App\Http\Controllers\Controller;

class UserController extends Controller
{
    
    /**
     * User Var
     * @var /App/User
     */
    protected $user;

    /**
     * Role Var
     * @var /App/Role
     */
    protected $role;


    public function __construct(User $user, Role $role) {
        $this->user = $user;
        $this->role = $role;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = $this->user->pushCriteria(new UsersWithRoles())->paginate(10);
        return view('dashboard.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = $this->role->all();
        return view('dashboard.users.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserRequest $request)
    {
        $user = $this->user->create($request->all());

        if ($request->get('role')) {
            $user->roles()->sync($request->get('role'));
        } else {
            $user->roles()->sync([]);
        }

        return redirect('/dashboard/users');
    }

   

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = $this->user->find($id);
        $roles = $this->role->all();
        $userRoles = $user->roles();

        return view('dashboard.users.edit', compact('user', 'roles', 'userRoles'));
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
        $user = $this->user->find($id);

        $user->email = $request->get('email');
        if ($request->get('password')) {
            $user->password = $request->get('password');
        }

        $user->save();

        if ($request->get('role')) {
            $user->roles()->sync($request->get('role'));
        } else {
            $user->roles()->sync([]);
        } 

        return redirect('dashboard/users');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->user->delete($id);
    }
}


/*
|--------------------------------------------------------------------------
| Role
|--------------------------------------------------------------------------
|
| Adminstrator
| E-Commerce Only
| Content Provider
| Content Publisher
| 
*/


/*
|--------------------------------------------------------------------------
| Role Permissions
|--------------------------------------------------------------------------
|
| Adminstrator - All permissions
| 
| 
|
*/
