@extends('layouts.admin.app')

@section('subnav')
    @include('dashboard.partials._create-new', [
        'title' => 'Permissions', 
        'permission' => 'create_permissions',
        'route' =>  'dashboard.permissions.create' 
    ])
@endsection


@section('content')
    
    <table class="striped responsive-table">
        <thead>
        <tr>
            <th data-field="Display Name">Display Name</th>
            <th data-field="Name">Name</th>
            <th data-field="Edit">Edit</th>
        </tr>
        </thead>
        <tbody>
        @foreach($permissions as $permission)
            <tr>
                <td>{{ $permission->display_name }}</td>
                <td>{{ $permission->name }}</td>
                <td class="button-group">
                   @include('dashboard.partials._delete-table', [
                                'model' => $permission,
                                'title' => 'Permissions',
                                'name' => 'permission'
                            ])
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    


    @include('dashboard.partials.pagination', ['paginator' => $permissions])

@stop