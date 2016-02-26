@extends('layouts.admin.app')


@section('subnav')
	
@endsection


@section('content')

	@include('errors.errors')

	<section class="dashboard__form">
		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.users.store',]) !!}
		 	@include('dashboard.users._form', ['submitButtonText' => 'Create User'])
		  {!! Form::close() !!}
	</section>



@endsection