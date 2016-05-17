@extends('layouts.admin.app')

@section('subnav')
	
@endsection


@section('content')
	<a target="_blank" href="https://www.paypal.com/?cmd=_button-management&login_cmd=_button-management">See Saved Buttons</a>
	@include('errors.errors')

	<section class="dashboard__form">

		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.products.store', "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.products._form', ['headingText' => 'Create Product #'  . $id,  'submitButtonText' => 'Create Product'])
		  {!! Form::close() !!}
	</section>

@endsection



@section('extra-scripts')
	@include('dashboard.partials.redactorScripts')
@endsection