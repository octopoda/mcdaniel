@extends('layouts.app')


@section('content')

	@include('errors.errors')

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Create New Product</h1>
		</div>
	</header>


	<section class="dashboard-form">
		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.products.store', "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.products._form', ['submitButtonText' => 'Create Product'])
		  {!! Form::close() !!}
	</section>



@endsection