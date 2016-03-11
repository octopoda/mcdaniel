  {!! Form::open(['data-remote', 'route' => 'ajaxFormSubmit']) !!}
		<div class="row">
			<div class="input-field s12 m6 col">
				{!! Form::label('full-name', 'Full Name:') !!}
				{!! Form::text('full-name', null, []) !!}
			</div>
		
			<div class="input-field s12 m6 col">
				{!! Form::label('email', 'Email:') !!}
				{!! Form::email('email', null, ['class'=>'', 'placeholder'=>'joe@gmail.com']) !!}
			</div>
		</div>

		<div class="row">
			<div class="input-field s12 col">
				{!! Form::label('contact-message', 'Message:') !!}
				{!! Form::textarea('contact-message', null, ['class'=>'materialize-textarea']) !!}
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
		<div class="contact__message" 
			 data-success-message="Thanks for contacting us.  We look forward to talking with you.  We will get back to you in the next few business days."
			 data-error-message="We are sorry but something didn't work correctly.  Please contact us at 314-314-1996"
		>
			
		</div>
  {!! Form::close() !!}

