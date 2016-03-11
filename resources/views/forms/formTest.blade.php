@extends('layouts.frontend.page')

@section('content')
	<div class="container">
		  {!! Form::open(['route' => 'contact-test']) !!}
		<div class="row">
			<div class="input-field s12 m6 col">
				{!! Form::label('full_name', 'Full Name:') !!}
				{!! Form::text('full_name', null, []) !!}
			</div>
		
			<div class="input-field s12 m6 col">
				{!! Form::label('email', 'Email:') !!}
				{!! Form::email('email', null, ['class'=>'', 'placeholder'=>'joe@gmail.com']) !!}
			</div>
		</div>

		<div class="row">
			<div class="input-field s12 col">
				{!! Form::label('contact_message', 'Message:') !!}
				{!! Form::textarea('contact_message', null, ['class'=>'materialize-textarea']) !!}
			</div>
		</div>

		<div class="row">
			<div class="input-field s12 col contact__submit">
				{!! Form::submit('Contact McDaniel Nutrition', ['class'=>'btn waves-effect waves-green']) !!}
			</div>
			<div class="contact__preloader">
				@include('layouts.frontend.partials._loading')
			</div>
		</div>
		
  {!! Form::close() !!}


	</div>
@endsection