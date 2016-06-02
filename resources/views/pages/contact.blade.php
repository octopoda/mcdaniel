<?php
$header = [
	"title" => "Contact McDaniel Nutrition Therapy St Louis Missouri",
	"description" => "Contact McDaniel Nutrition Therapy for corporate wellness, weight loss management, sports nutrition, maternal nutrition, or speaking / media engagements.",
	"Keywords" => "Contact us, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition, dietitian, consultation, nutritionist, speaking, media",
	"fixed" => true
	];

?>

@extends('layouts.frontend.page', compact('header'))


@section('content')
	
	<div class="home__hero hero">
			<div class="row">
				<h1>We Want to<br> Get To Know You.</h1>
				<p class="large">Please contact us to discuss your corporate needs, set up a media appearance, or schedule a consultation. </p>
			</div>
		</div>
		


	<div class="contact-map">
        <div class="contact-map__cover"></div>
       	<div class="contact-map__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.1000800536117!2d-90.33918828462295!3d38.64657907961008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8cad61ca46907%3A0x89792ba0df69d2e!2s230+S+Bemiston+Ave+%23430%2C+St+Louis%2C+MO+63105!5e0!3m2!1sen!2sus!4v1457639783664" width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </div>


	



	<div class="contact--form" data-ng-controller="ContactFormController as fc">
			<div class="row">
				<h2>Let's Talk</h2>
				<form name="contactForm" class="l-section__small top-errors" ng-submit="fc.submitForm()" ng-init="fc.formData.formType = 'contactForm'">
				
				<div class="form-group">
					<label for="customerName">Name <i class="required">*</i></label>
					<div class="input-errors" ng-messages="contactForm.customerName.$error" ng-if="contactForm.customerName.$dirty">
						<small class="error" ng-message="required">Please provide your name</small>
					</div>	
					<input type="text" name="customerName" id="customerName"  placeholder="Full Name" ng-model="fc.formData.customerName" required>
				</div>

				
				<div class="form-group form-half">
					<label for="email_address">Email <i class="required">*</i></label>
					<div class="input-errors" ng-messages="contactForm.email_address.$error" ng-if="contactForm.email_address.$dirty" role="alert">
						<small class="error" ng-message="required">Please provide your email</small>
						<small class="error" ng-message="email">Please provide a valid email</small>
					</div>
					<input type="email" name="email_address" id="emailAddress" placeholder="" ng-model="fc.formData.email" >
				</div>
				
				<div class="form-group form-half">
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
					<textarea name="contact_message" id="contactMessage" cols="30" rows="10" ng-model="fc.formData.contactMessage"></textarea>
				</div>
				
				<div class="form-group__center">
					<input type="hidden" name="form_type" ng-model="fc.formData.formType" value="contact_page_form">
					<button class="button__loading {! fc.loading !}" ng-disabled="contactForm.$invalid" >
						<div class="progress-spinner"></div>
						<div class="button-text">Send Message</div> 
					</button>	
				</div>

				<div class="contact__success" data-ng-show="fc.success" data-ng-cloak>
					<p>{! fc.successMessage  !}</p>
				</div>
			</form>

			
		</div>
	</div>





@endsection


@section('extra-scripts')
	
@endsection