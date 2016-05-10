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
			<img src="/assets/images/pages/sports/sports-text-side.png" alt="Fuel Your New Best with McDaniel Nutrition Sports Packages">
		</div>
		<div class="g-half">
			<section class="tablet-up ">
				
			</section>
			<section>
				<h2>Sports Nutrition Packages</h2>
				<p>Whether you’re a recreational athlete or a professional competitor, you can take your performance further. Our Board Certified Specialist in Sports Dietetics (CSSD) can help you get there. </p>
				<p>We also provide personalized sports nutrition advice for special populations such as: bone mineral disturbances, cardiovascular conditions, vegetarian diets, female athlete triad, and iron deficiency anemia. </p>
				<p>Purchase one of our packages to boost your results, get started with an initial consultation, or contact us to discuss your individual needs. </p>
				<div class="button">
					<a href="{{ route('get-started-sports') }}" data-services-button data-service="sports-nutrition" >Sign Up Now</a>
				</div>
			</section>
		</div>
	</div>

	
	<div class="m-sub-navigation">
		
	</div>


	<div class="sports__packages green-gradient">
		<div class="row g-two-columns">
			<section class="sports-description__right">
				<h3>Sport Nutrition</h3>
				<p>The rise to your athletic performance goals and new levels of competition is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past. We tailor sessions to your period of training and include pre-, during-, and post-nutrition recommendations.</p>
			</section>
			<section class="sports-description__left">
				<h5>How we can help you fuel a new PR.</h5>

				<ul>
					<li>Detailed evaluation of your food journal using a computerized nutritional analysis program</li>
					<li>Evaluation of how fuel intake supports your training program</li>
					<li>Pre-, during-, and post-training nutrition guidelines</li>
					<li>Creation of tailored eating strategies and personalized meal plans for optimal results</li>
				</ul>

				<p class="legal">Follow-up visits are highly recommended. These sessions support your success and allow us to answer any questions you might have after implementing initial recommendations. These sessions can be completed by phone or in-person. </p>
			</section>
		</div>
		<div class="row sales-button">
			<div class="button">
				<a href="{{ route('get-started-sports') }}" data-services-button data-service="sports-nutrition" >Setup An Individual Consulation</a>
			</div>
		</div>
	</div>




	@include('layouts.frontend.partials.about')
	

@endsection


@section('extra-scripts')
 	
@endsection