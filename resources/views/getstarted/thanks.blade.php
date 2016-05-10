
<?php
$header = [
	"title" => "Nutrition Services – McDaniel Nutrition Therapy, St Louis MO",
	"description" => "McDaniel Nutrition Therapy provides corporate wellness, weight loss management, sports nutrition, and maternal nutrition tailored to your needs and goals",
	"Keywords" => "Nutrition, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')
<article class="gs" data-ng-controller="GetStartedController as vm">
	<div class="weight-loss_hero hero">
		<section class="row">
			<h1>Sustain Your <br>Healthy Weight <br>For Good</h1>
		</section>
	</div>

	<div class="get-started row">
		<div class="get-started__price tablet-up">
			<h3>Individualized Consultation</h3>
			<h2>$150.00</h2>

			<div class="button">
				<a href="">Sign Up Now</a>
			</div>
		</div>

		<div class="get-started__content">
			<h2>We Support Change</h2>
			<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past and what allows us to give you the most personally tailored consultations.</p>
			<p>Purchase one of our packages for long-term results, get started with an initial consultation, or contact us to discuss your individual needs. </p>

			<div class="get-started__price phone-only">
				<h3>Individualized Consultation</h3>
				<h2>$150.00</h2>

				<div class="button">
					<a href="">Sign Up Now</a>
				</div>
			</div>

			<div class="get-started__contact">
				<form name="contactForm" class="l-section__small top-errors" ng-submit="fc.submitForm()">
				
				<div class="form-group">
					<label for="customer_name">Name <i class="required">*</i></label>
					<div class="input-errors" ng-messages="contactForm.customer_name.$error" ng-if="contactForm.customer_name.$dirty">
						<small class="error" ng-message="required">Please provide your name</small>
					</div>	
					<input type="text" name="customer_name" id="customer_name"  placeholder="Full Name" ng-model="fc.formData.first" required>
				</div>

				
				<div class="form-group">
					<label for="email_address">Email <i class="required">*</i></label>
					<div class="input-errors" ng-messages="contactForm.email_address.$error" ng-if="contactForm.email_address.$dirty" role="alert">
						<small class="error" ng-message="required">Please provide your email</small>
						<small class="error" ng-message="email">Please provide a valid email</small>
					</div>
					<input type="email" name="email_address" id="emailAddress" placeholder="" ng-model="fc.formData.email" >
				</div>
				
				<div class="form-group">
					<label for="phone_number">Phone Number</label>
					<input phone-input target-id="bestTime" type="tel" name="phone_number" id="" ng-model="fc.formData.phone" placeholder="(555) 555-5555">
				</div>

				<div id="bestTime" class="hide">
					<p class=" form-group label">When is the best time to call</p>	
					<ul class="contact-address__form__checkboxes form-group">
						<li>
							<input type="checkbox" class="" name="best_contact_time" id="best-contact-time_morning" ng-model="fc.formData.bestContactTime.morning" value="morning">
							<label for="best_contact_time_morning">Morning</label>
						</li>
						<li>
							<input type="checkbox" class="" name="best_contact_time" id="best-contact-time_daytime" ng-model="fc.formData.bestContactTime.daytime" value="daytime">
							<label for="best_contact_time_daytime">Daytime</label>
						</li>
						<li>
							<input type="checkbox" class="" name="best_contact_time" id="best-contact-time_afternoon" ng-model="fc.formData.bestContactTime.afternoon" value="afternoon">
							<label for="best_contact_time_afternoon">Afternoon</label>
						</li>
						<li>
							<input type="checkbox" class="" name="best_contact_time" id="best-contact-time_night" ng-model="fc.formData.bestContactTime.night" value="night">
							<label for="best_contact_time_night">Night</label>
						</li>
					</ul>
			
				</div>
				
				<div class="form-group">
					<label for="message">Message</label>
					<textarea name="contact_message" id="contactMessage" cols="30" rows="10" ng-model="fc.formData.message"></textarea>
				</div>
				
				<div class="form-group__center">
					<input type="hidden" name="form_type" ng-model="fc.formData.formType" value="contact_page_form">
					<button class="button__loading {! fc.loading !}" ng-disabled="contactForm.$invalid" google-click category="forms" action="contact-form" name="contact-us" value="4">
						<div class="progress-spinner"></div>
						<div class="button-text">Send Message</div> 
					</button>	
				</div>
			</form>
			</div>

			<div class="get-started__articles">
				
			</div>

			<div class="">
			</div>



		</div>	
	</div>

	<div class="get-started__other row">
		<section>
			<h4>Sports Nutrition</h4>
			<p></p>
			<div class="button">
				<a href="{{ route('sports-nutrition') }}">Learn More</a>
			</div>
		</section>
		<section>
			<h4>Maternal Nutrition</h4>
			<p></p>
			<div class="button">
				<a href="{{ route('maternal-nutrition') }}">Learn More</a>
			</div>
		</section>
		<section>
			<h4>Corporate Wellness</h4>
			<p></p>
			<div class="button">
				<a href="{{ route('corporate') }}">Learn More</a>
			</div>
		</section>
	</div>
</article>
@endsection


@section('extra-scripts')
 	
@endsection