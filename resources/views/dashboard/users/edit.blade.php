@extends('layouts.app')


@section('content')

	@include('errors.errors')

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Edit {{ $user->name }}</h1>
		</div>
	</header>


	<section class="dashboard-form">
		 {!! Form::model($user, ['method'=>'PATCH', 'route'=>['dashboard.users.update', $user->id]]) !!}
		 	@include('dashboard.users._form', ['submitButtonText' => 'Create User'])
		  {!! Form::close() !!}
	</section>



@endsection