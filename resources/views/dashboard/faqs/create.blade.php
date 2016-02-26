@extends('layouts.admin.app')

@section('subnav')
	
@endsection


@section('content')
	<section class="dashboard__form">
		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.faqs.store']) !!}
		 	@include('dashboard.faqs._form', ['submitButtonText' => 'Create Question'])
		  {!! Form::close() !!}
	</section>
@endsection


@section('extra-scripts')
	@include('dashboard.partials.redactorScripts')
@endsection