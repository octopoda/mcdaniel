@extends('layouts.admin.app')



@section('content')
	
	@include('errors.errors')
    
    <div class="dashboard__form">
	    {!! Form::open(['route' => 'dashboard.roles.store']) !!}
	        @include('dashboard.roles._form', ['submitButtonText' => 'Create Role'])
	    {!! Form::close() !!}
    </div>

@endsection