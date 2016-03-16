  {!! Form::open(['data-remote', 'route' => 'ajaxFormSubmit']) !!}
		<div class="contact__submit">	
			<div class="row">
				<div class="input-field s12 col">
					{!! Form::label('full-name', 'Full Name:') !!}
					{!! Form::text('full-name', null, ["required"]) !!}
				</div>
			</div>
			<div class="row">
				<div class="input-field s12 col">
					{!! Form::label('email', 'Email:') !!}
					{!! Form::email('email', null, ['class'=>'', 'required']) !!}
				</div>
			</div>

			<div class="row">
				<div class="input-field s12 col">
					{!! Form::label('contact-message', 'Additional Comments:') !!}
					{!! Form::textarea('contact-message', null, ['class'=>'materialize-textarea', "required"]) !!}
				</div>
			</div>

			<div class="row">
				<div class="input-field s12 col">
					{!! Form::hidden('services', null, ['id' => 'serviceInput']) !!}
					<!-- {!! Form::submit('Sign Up Today', ['class'=>'btn waves-effect waves-green']) !!} -->
					
				</div>
			</div>
		</div>

		<div class="contact__preloader">
			@include('layouts.frontend.partials._loading')
		</div>

		
		<div class="contact__message" 
			 data-success-message="Thanks for your interest in McDaniel Nutrition Therapy corporate wellenss services.  We will review your request and get back to you within 2-3 business days."
			 data-error-message="We are sorry but something didn't work correctly.  Please contact us at 314-314-1996"
		>
			
		</div>
  {!! Form::close() !!}

