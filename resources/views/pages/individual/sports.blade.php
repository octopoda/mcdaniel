<?php
$header = [
	"title" => "Sports Nutrition for a New Best - McDaniels Nutrition Therapy",
	"description" => "Wnat to know more about our nutrition services. Frequently asked questions for McDaniel",
	"Keywords" => "FAQS, Frequently Asked Questions,  St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition, dietitian, consultation, nutritionist, speaking, media",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')
	<!-- Header -->
	<div class="sports_hero hero">
		<section class="row">
			<h1>Fuel Your<br> New Best</h1>
		</section>
	</div>

	<!-- Sports Text -->
	<div class="sports__text">
		<div class="sports__text__image tablet-up">
			<img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/images/pages/sports/sports-text-side.png" alt="Fuel Your New Best with McDaniel Nutrition Sports Packages">
		</div>
		<div class="g-half">
			<section class="tablet-up ">
				
			</section>
			<section>
				<h2>Sports Nutrition Services</h2>
				<p>Whether you’re a recreational athlete or a professional competitor, you can take your performance further. Our Board Certified Specialist in Sports Dietetics (CSSD) can help you get there. </p>
				<p>We also provide personalized sports nutrition advice for athlete-specific bone mineral disturbances, vegetarian diets, infertility, and iron deficiency anemia.</p>
				<p>Get started with an initial consultation and you and your dietitian will formulate a game plan for follow-up needs. Please contact us for individual questions. </p>
				<div class="button">
					<a href="{{ route('get-started-sports') }}" data-services-button data-service="" data-category="sports" >Sign Up Now</a>
				</div>
			</section>
		</div>
	</div>

	
	<div class="m-sub-navigation">
		
	</div>


	<div class="sports__packages green-gradient">
		<div class="row g-two-columns">
			<section class="sports-description__right">
				<h3>Sports Nutrition</h3>
				<p>The rise to your athletic performance goals and new levels of competition is easier with support. Our Sports Fuel Package is tailored to your period of training, body composition goals, and lifestyle habits. Nutrition consultations can also address pre-, during-, and post-nutrition recommendations. Additional follow-up sessions can be purchased and set based on your individual needs. </p>

				<h5>70-Minute Initial Consultation + 30-Minute Follow-Up - $250.00</h5>
			</section>
			
			<section class="sports-description__left">
				<h5>Package includes: </h5>

				<ul>
					<li>Detailed evaluation of your food journal using a computerized nutritional analysis program</li>
					<li>Nutrition plan geared for body comp optimization</li>
					<li>Evaluation of how fuel intake supports your training program</li>
					<li>Pre-, during-, and post-training nutrition guidelines</li>
					<li>Creation of tailored eating strategies and personalized meal plans for optimal results</li>
					<li>Can be conducted in office or by phone/skype</li>
				</ul>

				<p class="legal">Prior to your consultation, you will need to complete a client contract and comprehensive nutritional assessment. Please bring the completed paperwork to your initial consultation. During our initial consult, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus.</p>


			</section>
		</div>
		<div class="row sales-button">
			<div class="button">
				<a href="{{ route('get-started-sports') }}" data-services-button data-service="SPA" data-category="sports">Set up An Adult Consultation</a>
			</div>
			<div class="button">
				<a href="{{ route('get-started-sports') }}" data-services-button data-service="SPY" data-category="sports">Set up A Youth Consultation</a>
			</div>
		</div>
	</div>




	@include('layouts.frontend.partials.about')
	

@endsection


@section('extra-scripts')
 	
@endsection