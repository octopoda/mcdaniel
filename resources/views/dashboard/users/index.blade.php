@extends('layouts.admin.app')

@section('subnav')
    @include('dashboard.partials._create-new', [
        'title' => 'Users', 
        'permission' => 'create_users',
        'route' =>  'dashboard.users.create' 
    ])
@endsection

@section('content')
    
        <table class="striped responsive-table">
            <thead>
            <tr>
                <th data-field="Email">Email</th>
                <th data-field="Role">Role</th>
                <th data-field="Edit">Edit</th>
            </tr>
            </thead>
        <tbody>
            @foreach($users as $user)
            <tr>
                <td>{{ $user->email }}</td>
                <td>
                    @foreach($user->roles as $role)
                        <span class="chip">{{ $role->name }}</span>
                    @endforeach
                </td>
                <td class="button-group">
                   @include('dashboard.partials._delete-table', [
                        'model' => $user,
                        'title' => 'Users',
                        'name' => 'user'
                   ])
                </td>    
            </tr>
            @endforeach
        </tbody>
    </table>
    
    
    @include('dashboard.partials.pagination', ['paginator' => $users])

@stop