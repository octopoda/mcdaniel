<?php
$header = [
	"title" => "Speaking & Publicity – Jennifer McDaniel, St Louis",
	"description" => "Jennifer McDaniel is a sought after national media spokesperson and regular on-air contributor. She is available for local and national media engagements.",
	"Keywords" => "Spokesperson, speaking, publicity, media, on-air contributor, local, national, nutrition, registered dietitian, ",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))


@section('content')
	
	<!-- Header -->
	<div class="appearances__hero hero">
		<section class="row">
			<h1>Speaking of Healthy</h1>

		</section>
	</div>



	<!-- Sports Text -->
	<div class="appearance__text">
		<div class="g-half">
			<section>
				<h2>Jennifer McDaniel MS, RDN, CSSD, LD</h2>
				<p>Jennifer McDaniel, Founder of McDaniel Nutrition Therapy, is a sought after national media spokesperson for The Academy of Nutrition and Dietetics and regular on-air contributor. Her healthy, positive messages on the power of proper nutrition and her personal, enthusiastic style connect with diverse audiences, putting nutritional success within their grasp.  </p>	
				<div class="button">
					<a href="">Book Jennifer</a>
				</div>
			</section>
			<section class="tablet-up ">
				
			</section>
		</div>

		<div class="appearance__text__image tablet-up">
			<img src="/assets/images/pages/appearances/insta-video-med.jpg" alt="Jennifer in Fox 2 Studios " class="tablet-only">
			<img src="/assets/images/pages/appearances/insta-video.jpg" alt="Jennifer in Fox 2 Studios " class="laptop-up">
		</div>
	</div>
	

	<div class="appearances__logos">
			<div class="row">
				<h2>Inspiring Growth</h2>
				<p>Jennifer has been quoted in local and national media outlets including: Men’s Health Magazine, US News and World Report, IVillage.com, MSN.com, St. Louis Magazine, and STL Today. Contact her for interviews, guest spots, and speaking at your next event. </p>
				<ul>
					<li class="appearances__mens-health"></li>
					<li class="appearances__us-news"></li>
					<li class="appearances__iVillage"></li>
					<li class="appearances__MSN"></li>
				</ul>
			</div>
	</div>
	
	

	<div class="appearances__appearances">
		<div class="container">
			<div class="row">
				<h3>Jennifer's Recent Appearances</h3>
				<ul class="appearances__videos">
				@foreach($appearances as $appearance)
					<li class="appearances__videos-thumb" @if (!empty($appearance->thumbnail)) style="background-image:url({{ $appearance->thumbnail }}) @endif">
						<a  @if (empty($appearance->video_url)) href="{{ $appearance->link }}" target="_blank" @else href="{{ route('appearanceByTitle', ['title' => $appearance->direct_link ]) }}" @endif>
							<span class="posterImage" >{{ $appearance->title }}</span>
						</a>
					</li>
				@endforeach
				</ul>
			</div>

			<div class="button-group row">
				<div class="button">
					<a data-slide-down data-target-id="appearanceForm" >Book Jennifer</a>
				</div>
				<div class="button">
					<a href="{{ route('appearancesArchive') }}" >More Appearances</a>
				</div>
			</div>
		</div>
	</div>

	<div class="appearances__form" data-ng-controller="ContactFormController as fc" id="appearanceForm">
			<div class="row">
				<h2>Book Jennifer</h2>
				<form name="contactForm" class="l-section__small top-errors" ng-submit="fc.submitForm()" ng-init="fc.formData.formType = 'appearancesForm'; fc.formData.interestedService = 'appearance'">
				
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