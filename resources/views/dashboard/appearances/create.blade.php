@extends('layouts.admin.app')


@section('subnav')
	
@endsection


@section('content')

	@include('errors.errors')

	<section class="dashboard__form">
		 {!! Form::open(['route'=>'dashboard.appearances.store', 'method'=>'POST']) !!}
		 	@include('dashboard.appearances._form', ['submitButtonText' => 'Create Appearance'])
		  {!! Form::close() !!}
	</section>

@endsection


@section('extra-scripts')
	@include('dashboard.partials.redactorScripts');	
@endsection


