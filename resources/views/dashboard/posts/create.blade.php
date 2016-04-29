@extends('layouts.admin.app')

@section('content')
	@include('dashboard.partials.redactorScripts')


	@include('errors.errors')


	<section class="dashboard__form">
		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.posts.store', "enctype"=>"multipart/form-data", 'data-abide', 'no-validate']) !!}
		 	@include('dashboard.posts._form', ['submitButtonText' => 'Create Post'])
		  {!! Form::close() !!}
	</section>



@endsection


@section('extra-scripts')
	
@endsection