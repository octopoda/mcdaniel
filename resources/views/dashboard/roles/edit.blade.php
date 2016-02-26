@extends('layouts.admin.app')


@section('subnav')

@endsection



@section('content')
    @include('errors.errors')
    
    <div class="dashboard__form">
	    {!! Form::model($role, ['route' => ['dashboard.roles.update', $role->id], 'method' => 'PATCH']) !!}
	        @include('dashboard.roles._form', ['submitButtonText' => 'Edit Role'])
	    {!! Form::close() !!}
    </div>

@endsection