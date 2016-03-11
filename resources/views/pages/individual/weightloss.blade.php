<?php
$header = [
	"title" => "Personal Weight Loss Management - McDaniel Nutrition Therapy",
	"description" => "Your weight loss needs are unique. Ease your journey with personally tailored programs and support that helps you uncover the roots of your struggle.",
	"Keywords" => "weight loss, weight loss management, lasting weight loss, personal, nutrition, ",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')
	<div class="sitewide__page-header">
		<div class="sitewide__page-header--text container">
			<h1>Move From Surviving To Thriving</h1>
		</div>
	</div>

	<div class="weight-loss__text">
		<div class="container sitewide__page--text">
			<section>
					<p>Fighting through flagging willpower time and again or failing to see the results you expected after months of work can be devastating. We believe there’s more to the equation. Will and dedication don’t have to be your only tools for lasting weight loss. </p>
					<p>During our weight loss management programs, we work with you to uncover the habits and motivations behind your weight loss struggle. And then walk with you through the peaks and valleys to a new foundation for your health. </p>
					<p>Purchase one of our packages for long-term results, get started with an initial consultation, or contact us to discuss your individual needs. </p>
			</section>
		</div>
	</div>


	<div class="weight-loss__packages">
		<div class="container">
			<h2>Nutrition Packages</h2>
			<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past and what allows us to give you the most personally tailored consultations.</p>

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
					<li>Detailed evaluation of your food journal</li>
					<li>(Optional computerized nutritional analysis)</li>
					<li>Personalized eating strategies and meal plans for optimal results and health</li>
					<li>Development of your foundational action plan</li>
					<li>Tailored follow-up plan</li>
				</ul>

				<p>Prior to consultation, you will need to complete a client contract and comprehensive nutritional assessment, found here. Please bring the completed paperwork to your initial consultation. If you desire a computerized nutritional analysis of your 3-day food journal, we will complete this prior to the consult for an additional fee of $30. During our initial consult, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus.</p>
			</section>
			
			<section>
				<h3>
					Follow Up Consultations<br>
					<small>30 Minutes</small>
				</h3>

				<ul>
					<li>Review of your foundational action plan</li>
					<li>Analysis of your food journal </li>
					<li>Meal planning support & recipe ideas incorporating your preferences</li>
				</ul>

				<p>Follow-up visits are highly recommended. These sessions support your success and allow us to answer any questions you might have after implementing initial recommendations. These sessions can be completed by phone or in-person. </p>
			</section>
			
		</div>
	</div>

@endsection


@section('extra-scripts')
 	
@endsection