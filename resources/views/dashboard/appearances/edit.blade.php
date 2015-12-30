@extends('layouts.app')

@section('content')

	@include('errors.errors')

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Edit {{ $appearance->title }}</h1>
		</div>
	</header>

	<section class="dashboard-form">
		 {!! Form::model($appearance, ['route'=>['dashboard.appearances.update', $appearance->id], 'method'=>'PATCH']) !!}
		 	@include('dashboard.appearances._form', ['submitButtonText' => 'Edit Appearance'])
		  {!! Form::close() !!}
	</section>

@endsection