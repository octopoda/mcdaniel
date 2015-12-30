@extends('layouts.app')

@section('content')

	@include('errors.errors')

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Create Appearance</h1>
		</div>
	</header>

	<section class="dashboard-form">
		 {!! Form::open(['route'=>'dashboard.appearances.store', 'method'=>'POST']) !!}
		 	@include('dashboard.appearances._form', ['submitButtonText' => 'Create Appearance'])
		  {!! Form::close() !!}
	</section>

@endsection