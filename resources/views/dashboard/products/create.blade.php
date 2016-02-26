@extends('layouts.admin.app')

@section('subnav')
	
@endsection


@section('content')

	@include('errors.errors')

	<section class="dashboard__form">
		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.products.store', "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.products._form', ['submitButtonText' => 'Create Product'])
		  {!! Form::close() !!}
	</section>

@endsection



@section('extra-scripts')
	@include('dashboard.partials.redactorScripts')
@endsection