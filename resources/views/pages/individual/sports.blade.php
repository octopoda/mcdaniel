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
	<div class="sitewide__page-header">
		<div class="sitewide__page-header--text container">
			<h1>Fuel A New Best</h1>
		</div>
	</div>

	<div class="weight-loss__text">
		<div class="container sitewide__page--text">
			<section>
					<p>Whether you’re a recreational athlete or a professional competitor, you can take your performance further. Our Board Certified Specialist in Sports Dietetics (CSSD) can help you get there. </p>
					<p>We also provide personalized sports nutrition advice for special populations such as: bone mineral disturbances, cardiovascular conditions, vegetarian diets, female athlete triad, and iron deficiency anemia. </p>
					<p>Purchase one of our packages to boost your results, get started with an initial consultation, or contact us to discuss your individual needs. </p>
			</section>
		</div>
	</div>


	<div class="weight-loss__packages">
		<div class="container">
			<h2>Sports Nutrition Packages</h2>
			<p>The rise to your athletic performance goals and new levels of competition is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past. We tailor sessions to your period of training and include pre-, during-, and post-nutrition recommendations.</p>

		</div>
	</div>


	<div class="services__package">	
		<div class="container">

			<section>
				<h3>
					Initial Individual Consultation<br>
					<small>60 Minutes</small>
				</h3>
				<ul>
					<li>Detailed evaluation of your food journal using a computerized nutritional analysis program</li>
					<li>Evaluation of how fuel intake supports your training program</li>
					<li>Pre-, during-, and post-training nutrition guidelines</li>
					<li>Creation of tailored eating strategies and personalized meal plans for optimal results</li>
				</ul>

				<p>Prior to consultation, you will need to complete the client contract and a comprehensive nutritional assessment form, found here. Please send us the completed paperwork three working days prior to your first session. During our initial consult, we will review your information to glean insight into your unique eating habits, lifestyle needs, experience with eating for performance, and areas of focus for your training and competition goals.</p>
			</section>
			
			<section>
				<h3>
					Follow Up Consultations:<br>
					<small>30 Minutes</small>
				</h3>

				<ul>
					<li>Review of your foundational action plan</li>
					<li>Analysis of your online food journal prior to follow-up consult </li>
					<li>Meal planning support & recipe ideas incorporating your preferences</li>
				</ul>

				<p>Follow-up visits are highly recommended. These sessions support your success and allow us to answer any questions you might have after implementing initial recommendations. These sessions can be completed by phone or in-person. </p>
			</section>
			
		</div>
	</div>

@endsection


@section('extra-scripts')
 	
@endsection