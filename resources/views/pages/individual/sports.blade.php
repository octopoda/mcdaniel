<?php
$header = [
	"title" => "Sports Nutrition for a New Best - McDaniels Nutrition Therapy",
	"description" => "Wnat to know more about our nutrition services. Frequently asked questions for McDaniel",
	"Keywords" => "FAQS, Frequently Asked Questions,  St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition, dietitian, consultation, nutritionist, speaking, media",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))


@section('modal')
	<div class="modal modal-fixed-footer indivdual" id="sportsModal">
			<section class="modal-content">		
				<h3>Thank you for choosing McDaniel Nutrition</h3>
				<p>We are excited to help you feul yourself to a new PR.  Please fill out the form and we will contact you shortly to schedule an appointment.</p>
				@include('forms.individual')
			</section>
			<section class="modal-footer text-right">
				<a href="#!" class="modal-action waves-effect waves-green btn-flatten hollow"  id="modalSubmit">Sign Up Now</a>
				<a href="#!" class="modal-action modal-close waves-effect waves-red btn-flatten hollow" >Cancel</a>
			</section>
		</div>
@endsection


@section('content')
	<div class="sports__header sitewide__boxed">
		<section class="container">
			<h1><span>Fuel A New Best</span></h1>
		</section>
	</div>

	<div class="sports__text">
		<div class="container services__main-text">
			<section>
					<p>Whether you’re a recreational athlete or a professional competitor, you can take your performance further. Our Board Certified Specialist in Sports Dietetics (CSSD) can help you get there. </p>
					<p>We also provide personalized sports nutrition advice for special populations such as: bone mineral disturbances, cardiovascular conditions, vegetarian diets, female athlete triad, and iron deficiency anemia. </p>
					<p>Purchase one of our packages to boost your results, get started with an initial consultation, or contact us to discuss your individual needs. </p>
			</section>
		</div>
	</div>



	<div class="services__package-intro">
		<div class="container">
			<h2>Sports Nutrition Packages</h2>
			<p>The rise to your athletic performance goals and new levels of competition is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past. We tailor sessions to your period of training and include pre-, during-, and post-nutrition recommendations.</p>

		</div>
	</div>



		<div class="services__packages">
		<div class="row">
			<ul>
				<li class="services__packages--package sports__individual package-trigger" data-package="sportsIndividual">
					<div class="services__packages--background">
						<span>Get More Info</span>
					</div>
					<span class="title">
						<h3>
							Individual Consultation
							<small>60 Minutes</small>
						</h3>
					</span>
				</li>
				<li class="services__packages--package sports__followup package-trigger" data-package="sportsFollowup">
					<div class="services__packages--background">
						<span>Get More Info</span>
					</div>
					<span class="title">
						<h3>
							Follow-up Consultation
							<small>30 Minutes</small>
						</h3>
					</span>
				</li>
			</ul>
		</div>
	</div>

	<div class="services__descriptions">	
		<div class="container">
			<div class="services__description" id="sportsIndividual">
				<div class="row">
					<section class="s12 m6 col">
						<h2>
							Initial Individual Consultation<br>
							<small>60 Minutes</small>
						</h2>

						<div class="services__descriptions--signup">
							<a href="#sportsModal" class="btn-flatten hollow waves-effect waves-green modal-trigger" data-service="sports initial consultation">Sign Up Today</a>
						</div>
					</section>
					<section class="s12 m6 col">
						<h4>How we can help you fuel a new PR.</h4>
						<ul>
					<li>Detailed evaluation of your food journal using a computerized nutritional analysis program</li>
					<li>Evaluation of how fuel intake supports your training program</li>
					<li>Pre-, during-, and post-training nutrition guidelines</li>
					<li>Creation of tailored eating strategies and personalized meal plans for optimal results</li>
				</ul>

					<p>Prior to consultation, you will need to complete the client contract and a comprehensive nutritional assessment form, found here. Please send us the completed paperwork three working days prior to your first session. During our initial consult, we will review your information to glean insight into your unique eating habits, lifestyle needs, experience with eating for performance, and areas of focus for your training and competition goals.</p>
					</section>
				</div>
			</div>
			<div class="services__description" id="sportsFollowup">
				<div class="row">
					<section class="s12 m6 col">
						<h2>
							Follow up Consultation<br>
							<small>30 Minutes</small>
						</h2>

						<div class="services__descriptions--signup">
							<a href="#sportsModal" class="btn-flatten hollow waves-effect waves-green modal-trigger" data-service="sports followup consultation">Continue Your Success</a>
						</div>
					</section>
					<section class="s12 m6 col">
						<h4>How we can help you fuel a new PR.</h4>
						<ul>
					<li>Review of your foundational action plan</li>
					<li>Analysis of your online food journal prior to follow-up consult </li>
					<li>Meal planning support & recipe ideas incorporating your preferences</li>
				</ul>

				<p>Follow-up visits are highly recommended. These sessions support your success and allow us to answer any questions you might have after implementing initial recommendations. These sessions can be completed by phone or in-person. </p>
					</section>
				</div>
			</div>
		</div>
	</div>


	

@endsection


@section('extra-scripts')
 	
@endsection