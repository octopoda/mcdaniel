@extends('layouts.admin.app')






@section('content')
    {!! Form::open(['url' => '/role_permission']) !!}
        <div class="dashboard__table">
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Route</th>
                    @foreach($roles as $role)
                        <th class="text-center">{{ $role->display_name }}</th>
                    @endforeach
                </tr>
            </thead>
            <tbody>

            @foreach($permissions as $permission)
                <tr>
                    <td width="150">{{ $permission->display_name }}</td>
                    <td><small class="label label-info">{{ $permission->route }}</small></td>
                    @foreach ($roles as $role)
                        <td width="150" class="text-center">
                            @if ($permission->hasRole($role->name) && $role->name == 'admin')
                                <input type="checkbox" checked="checked" name="roles[{{ $role->id}}][permissions][]" value="{{ $permission->id }}" disabled="disabled" id="role_{{ $role->id }}_permission_{{ $permission->id }}">
                                <label for="role_{{ $role->id }}_permission_{{ $permission->id }}"></label>
                                <input type="hidden" name="roles[{{ $role->id}}][permissions][]" value="{{ $permission->id }}">
                            @elseif($permission->hasRole($role->name))
                                <input type="checkbox" checked="checked" name="roles[{{ $role->id }}][permissions][]" value="{{ $permission->id }}" id="role_{{ $role->id }}_permission_{{ $permission->id }}">
                                <label for="role_{{ $role->id }}_permission_{{ $permission->id }}"></label>
                            @else
                                <input type="checkbox" name="roles[{{ $role->id }}][permissions][]" value="{{ $permission->id }}" id="role_{{ $role->id }}_permission_{{ $permission->id }}">
                                <label for="role_{{ $role->id }}_permission_{{ $permission->id }}"></label>
                            @endif
                        </td>
                    @endforeach
                </tr>
            @endforeach

            </tbody>
        </table>
        </div>
    
    <div class="form-group">
        {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    </div>
    {!! Form::close() !!}

@endsection