@extends('layouts.app')


@section('content')
	
	@include('errors.errors')
    
   {!! Form::model($role, ['route' => ['dashboard.roles.update', $role->id], 'method' => 'PATCH']) !!}

    <div class="form-group">
        {!! Form::label('name', 'Name') !!}
        {!! Form::text('name', null, ['class' => 'form-control']) !!}
    </div>

    <div class="form-group">
        {!! Form::label('display_name', 'Display name') !!}
        {!! Form::text('display_name', null, ['class' => 'form-control']) !!}
    </div>

    <div class="form-group">
        {!! Form::label('description', 'Description') !!}
        {!! Form::text('description', null, ['class' => 'form-control']) !!}
    </div>

    <div class="form-group">
        {!! Form::label('level', 'Level') !!}
        {!! Form::text('level', null, ['class' => 'form-control', 'disabled' => 'disabled']) !!}
        {!! Form::hidden('level', $role->level) !!}
    </div>

    <div class="form-group">
        <label for="">Permissions</label>
        @foreach($permissions as $permission)
        	<?php $checked = in_array($permission->id, $rolePerms->lists('id')->toArray()); ?>
                <div class="checkbox">
                    <label>
                        {!! Form::checkbox('perms[]', $permission->id, $checked) !!} {{ $permission->display_name }}
                    </label>
                </div>
        @endforeach
    </div>

    <div class="form-group">
        {!! Form::submit('Update', ['class' => 'btn btn-primary']) !!}
    </div>

    {!! Form::close() !!}

@endsection