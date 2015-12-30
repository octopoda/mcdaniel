@extends('layouts.admin')


@section('content')

	@include('errors.errors')

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Edit {{ $product->title }}</h1>
		</div>
	</header>


	<section class="dashboard-form">
		 {!! Form::model($product, ['route'=>['dashboard.products.update', $product->id], 'method'=>'PATCH',  "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.products._form', ['submitButtonText' => 'Edit Product'])
		  {!! Form::close() !!}
	</section>


@endsection