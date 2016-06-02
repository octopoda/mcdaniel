<?php
$header = [
	"title" => "Support Center  McDaniel Nutrition Therapy St Louis Missouri",
	"description" => "Wnat to know more about our nutrition services. Frequently asked questions for McDaniel",
	"Keywords" => "FAQS, Frequently Asked Questions,  St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition, dietitian, consultation, nutritionist, speaking, media",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')
	<!-- Header -->
	<div class="faqs__hero hero">
		<section class="row">
			<h1>Questions About <br> Getting Healthy</h1>
		</section>
	</div>

<div class="faq" data-ng-controller="FaqController as vm">
	<div class="faq__question__search">
		<div class="row">
			<div class="search-icon"><i class="material-icons">search</i></div>
			<input type="text" placeholder="Search" data-faq-search-input>
		</div>
	</div>

	<div class="faqs__questions__wrapper">
		<div class="row">
			<section class="faqs__questions">
				<h2 class="underlined">Popular Questions</h2>
				<div class="faq-block" data-faq-block data-faqs="vm.Faqs">
				
			</section>

			<section class="faqs__contact">
				<h3 class="underlined">Get in Touch</h3>
				
				<ul class="no-bullet">
					<li><a href="#contactModal" class="modal-trigger"><i class="material-icons">email</i> Email Us</a></li>
					<li><a href="{{ route('contact') }}"><i class="material-icons">phone_iphone</i> Call Us</a></li>
				</ul>

				</ul>
			</section>
		</div>
	</div>
</div> <!-- Div -->

<div class="faqs__more">
	<div class="row">
		<section>
			<div class="faqs__more--form" data-ng-controller="ContactFormController as fc">
				<h3>Still have Questions?</h3>
				<p>Fill out the form below and we will help you find an answer.</p>	
				
				<form name="contactForm" class="top-errors m-contact-form" data-ng-submit="fc.submitForm()" data-ng-init="fc.formData.formType = 'faqForm'">
					<div class="form-group">
						<label for="customer_name">Name <i class="required">*</i></label>
						<div class="input-errors" data-ng-messages="contactForm.customer_name.$error" ng-if="contactForm.customer_name.$dirty">
							<small class="error" data-ng-message="required">Please provide your name</small>
						</div>	
						<input type="text" name="customer_name" id="customer_name"  placeholder="Full Name" data-ng-model="fc.formData.customerName" required>
					</div>

					<div class="form-group">
						<label for="email_address">Email <i class="required">*</i></label>
						<div class="input-errors" data-ng-messages="contactForm.email_address.$error" ng-if="contactForm.email_address.$dirty" role="alert">
							<small class="error" data-ng-message="required">Please provide your email</small>
							<small class="error" data-ng-message="email">Please provide a valid email</small>
						</div>
						<input type="email" name="email_address" id="emailAddress" placeholder="" ng-model="fc.formData.email" >
					</div>
					
					<div class="form-group">
						<label for="question">Question:</label>
						<textarea name="question" id="question" cols="30" rows="10" ng-model="fc.formData.question"></textarea>
					</div>
					
					<div class="form-group__center">
						<input type="hidden" name="form_type" data-ng-model="fc.formData.formType" value="get-started-page">
						<button class="button__loading {! fc.loading !}" ng-disabled="contactForm.$invalid">
							<div class="progress-spinner"></div>
							<div class="button-text">Send Message</div> 
						</button>
					</div>
					<div class="contact__success" data-ng-show="fc.success" data-ng-cloak>
						<p>{! fc.successMessage  !}</p>
					</div>
				</form>
			</div>
		</section>
	</div>
</div>
	
@endsection


@section('extra-scripts')
 	
@endsection