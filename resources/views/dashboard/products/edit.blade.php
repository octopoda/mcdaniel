@extends('layouts.admin.app')

@section('subnav')
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Edit {{ $product->title }}</h1>
		</div>
	</header>
	

	<a href="https://www.paypal.com/?cmd=_button-management&login_cmd=_button-management">See Saved Buttons</a>
@endsection


@section('content')
	@include('errors.errors')

	<section class="dashboard__form">
		 {!! Form::model($product, ['route'=>['dashboard.products.update', $product->id], 'method'=>'PATCH',  "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.products._form', ['submitButtonText' => 'Edit Product'])
		  {!! Form::close() !!}
	</section>
@endsection