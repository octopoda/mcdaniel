@extends('layouts.admin.app')

@section('subnav')
    @include('dashboard.partials._create-new', [
        'title' => 'Roles', 
        'permission' => 'create_roles',
        'route' =>  'dashboard.roles.create' 
    ])
@endsection


@section('content')
	 
     <table class="table striped responsive-table">
            <thead>
            <tr>
                <th data-field="Display Name">Display Name</th>
                <th data-field="Name">Name</th>
                <th data-field="Level">Level</th>
                <th data-field="Edit">Edit</th>
                
            </tr>
            </thead>
            <tbody>
            @foreach($roles as $role)
                <tr>
                    <td>{{ $role->display_name }}</td>
                    <td>{{ $role->name }}</td>
                    <td>{{ $role->level }}</td>
                    @if( $role->id != 1)
                        <td class="button-group">
                            @include('dashboard.partials._delete-table', [
                                'model' => $role,
                                'title' => 'Roles',
                                'name' => 'role'
                            ])
                        </td>
                    @else 
                        <td>&nbsp;</td>
                    @endif
                </tr>
            @endforeach
            </tbody>
    </table>
    

    @include('dashboard.partials.pagination', ['paginator' => $roles])

@endsection