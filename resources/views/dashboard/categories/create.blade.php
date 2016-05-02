@extends('layouts.admin.app')

@section('subnav')
	
@endsection


@section('content')

	@include('errors.errors')

	<section class="dashboard__form">
		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.categories.store', "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.categories._form', ['submitButtonText' => 'Create Category'])
		  {!! Form::close() !!}
	</section>



@endsection