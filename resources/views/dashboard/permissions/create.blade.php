@extends('layouts.admin.app')


@section('subnav')
 
@endsection

@section('content')
	@include('errors.errors')
    
    <div class="dashboard__form">
	    {!! Form::open(['route' => 'dashboard.permissions.store']) !!}
	        @include('dashboard.permissions._form', ['submitButtonText'=> 'Create Permission'])
	    {!! Form::close() !!}
    </div>

@endsection