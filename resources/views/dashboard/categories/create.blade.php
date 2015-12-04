@extends('layouts.admin')


@section('content')

	@include('errors.errors')

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Create Category</h1>
		</div>
	</header>


	<section class="dashboard-form">
		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.categories.store']) !!}
		 	@include('dashboard.categories._form', ['submitButtonText' => 'Create Category'])
		  {!! Form::close() !!}
	</section>



@endsection