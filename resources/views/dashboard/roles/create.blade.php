@extends('layouts.app')


@section('content')
	
	@include('errors.errors')
    
    {!! Form::open(['route' => 'dashboard.roles.store']) !!}

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
        {!! Form::text('level', null, ['class' => 'form-control', 'min' => '0']) !!}
    </div>

    <div class="form-group">
        <label for="">Permissions</label>
        @foreach($permissions as $permission)
            <div class="checkbox">
                <label>
                    {!! Form::checkbox('permissions[]', $permission->id) !!} {{ $permission->display_name }}
                </label>
            </div>
        @endforeach
    </div>

    <div class="form-group">
        {!! Form::submit('Create', ['class' => 'btn btn-primary']) !!}
    </div>

    {!! Form::close() !!}

@endsection