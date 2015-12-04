@extends('layouts.app')


@section('content')

	@include('errors.errors')

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Create User</h1>
		</div>
	</header>


	<section class="dashboard-form">
		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.users.store',]) !!}
		 	@include('dashboard.users._form', ['submitButtonText' => 'Create User'])
		  {!! Form::close() !!}
	</section>



@endsection