@extends('layouts.admin.app')

@section('content')
	@include('errors.errors')

	<section class="dashboard__form">
		 {!! Form::model($appearance, ['route'=>['dashboard.appearances.update', $appearance->id], 'method'=>'PATCH']) !!}
		 	@include('dashboard.appearances._form', ['submitButtonText' => 'Edit Appearance'])
		  {!! Form::close() !!}
	</section>
@endsection

@section('extra-scripts')
	@include('dashboard.partials.redactorScripts');	
@endsection