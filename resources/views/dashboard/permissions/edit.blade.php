@extends('layouts.admin.app')



@section('content')
	@include('errors.errors')
	
	<div class="dashboard__form">
		 {!! Form::model($permission, ['route' => ['dashboard.permissions.update', $permission->id], 'method' => 'PATCH']) !!}
	        @include('dashboard.permissions._form', ['submitButtonText' => 'Edit Permission'])
	     {!! Form::close() !!}
	</div>


@endsection