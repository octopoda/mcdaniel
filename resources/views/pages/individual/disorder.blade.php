<?php
$header = [
	"title" => "Disordered Eating - McDaniel Nutrition Therapy, St Louis",
	"description" => "You deserve to be free from the trap of unhealthy eating patterns. Whether you restrict foods, binge or obsess over exercise, our intuitive eating therapies can help you learn to listen to your body to understand its needs and nourishment. ",
	"Keywords" => "Eating Disorders,nutrition, relationship with food, nutrition for conception, nutrition, St Louis",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')

<!-- Header -->
	<div class="disorder__hero hero">
		<section class="row">
			<h1>Renew Your <br>Relationship With Food</h1>
		</section>
	</div>


	<div class="disorder__text">
		<div class="disorder__text__image tablet-up">
			<img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/images/pages/disorder/disorder-text-side.jpg" alt="Renew Your Relationship With Food">
		</div>
		<div class="g-half">
			<section class="tablet-up ">
				
			</section>
			<section>
				<h2>Journey Towards Healthy Eating</h2>
				<p>If you are overwhelmed with the amount of energy you spend thinking about food, exercise or your body, we can help you reconnect and renew your relationship with yourself and with food. You deserve to be free from the trap of unhealthy eating patterns. Whether you restrict foods, binge or obsess over exercise, our intuitive eating therapies can help you learn to listen to your body to understand its needs and nourishment. </p>
				<p>We prefer to work as part of a multi-disciplinary team and strongly recommend that you connect us with your physician and/or therapist in order to provide you with the most efficient path to wellness. </p>
				<p>If you feel like you have an unhealthy relationship with food or have been diagnosed with an eating disorder, contact us to get started on your journey towards food peace. </p>
				<p>Set up your free 15-minute phone consultation to make sure McDaniel Nutrition is the right team for you.</p>
			
				<div class="button">
					<a href="{{ route('get-started-disorder') }}" data-services-button data-service="" data-category="disorder" >Start Your Journey</a>
				</div>
			</section>
		</div>
	</div>

	<!-- Controller Wrapper -->
	<div>
		<div class="sports__packages green-gradient">
			<div class="m-tabbed">
				<div class="m-tabbed-info open" id="WLSP">
				
					{{-- Startup Package --}}
					<div class="g-two-columns row">
						<section class="sports-description__right">
							<h2>Start-Up Package</h2>
							<p>The journey towards recovery, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen to be the most effective and provide the most personally tailored consultations.</p>
							<h5>70-Minute Initial Consultation + 30-Minute Follow-Up <br> $250.00</h5>
						</section>

						<section class="sports-description__left">
							<h4>What to Expect:</h4>
							<p>During our initial consultation, we will review your information to glean insights into your eating history,   current eating habits, and behaviors. Expect us to do a lot of listening in the first consultation, as it is important for us to truly understand your individual needs and goals.</p>
							<ul>	
								<li>Detailed evaluation of your current habits and eating patterns</li>
								<li>Personalized eating strategies and meal plans (if appropriate) to help facilitate a healthy relationship with food</li>
								<li>Development of your foundational action plan</li>
								<li>Tailored follow-up plan</li>
							</ul>
							<p>Consultations can be conducted in office or by Skype</p>
							<h5>Follow-Up Consultation</h5>  
							<p>Follow-up sessions allow us to support your goals set in the initial consultation. These sessions can be conducted in office or by phone/skype. </p>
							
							<h5>Preparing for the Initial Consultation: </h5>
							<p>Prior to your consultation, you will need to complete a client contract and comprehensive nutritional assessment. Please bring the completed paperwork to your initial consultation. </p>
							<p>We work as part of a multi-disciplinary team as much as possible. It may be helpful for us to connect with your physician and/or therapist in order to provide you with the best care possible. Please fill out a release form in order to give us permission to us to connect with these members of your treatment team. </p>

						</section>
					</div>
					<section class="row sales-button">
						<div class="button">
							<a href="{{ route('get-started-disorder') }}" data-services-button data-service="DESP" data-category="disorder">Start Your Journey</a>
						</div>
					</section>

					<hr style="margin-top:20px; margin-bottom:20px; display:block;">

					{{-- Premium Package --}}
					<div class="g-two-columns row">
						<section class="sports-description__right">
							<h2>Premium Package</h2>
							<p>The journey toward recovery, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen to be the most effective and provide the most personally tailored consultations.</p>
							<h5>70-Minute Initial Consultation + 4, 30-Minute Follow-Up Sessions - <br>$475.00</h5>
						</section>
						<section class="sports-description__left">
							<h4>What to Expect:</h4>
							<p>During our initial consultation, we will review your information to glean insights into your eating history,   current eating habits, and behaviors. Expect us to do a lot of listening in the first consultation, as it is important for us to truly understand your individual needs and goals.</p>
							<ul>	
								<li>Detailed evaluation of your current habits and eating patterns</li>
								<li>Personalized eating strategies and meal plans (if appropriate) to help facilitate a healthy relationship with food</li>
								<li>Development of your foundational action plan</li>
								<li>Tailored follow-up plan</li>
							</ul>
							<p>Consultations can be conducted in office or by Skype</p>
							<h5>Follow-Up Consultation</h5>  
							<p>Follow-up sessions allow us to support your goals set in the initial consultation. These sessions can be conducted in office or by phone/skype. </p>
							
							<h5>Preparing for the Initial Consultation: </h5>
							<p>Prior to your consultation, you will need to complete a client contract and comprehensive nutritional assessment. Please bring the completed paperwork to your initial consultation. </p>
							<p>We work as part of a multi-disciplinary team as much as possible. It may be helpful for us to connect with your physician and/or therapist in order to provide you with the best care possible. Please fill out a release form in order to give us permission to us to connect with these members of your treatment team. </p>
						</section>
					</div>
					<section class="row sales-button">
						<div class="button">
							<a href="{{ route('get-started-disorder') }}" data-services-button data-service="DEPP" data-category="disorder" >Renew Your Relationship with Food</a>
						</div>
					</section>
				</div>



				<hr style="margin-top:20px; margin-bottom:20px; display:block;">

					{{-- Premium Package --}}
					<div class="g-two-columns row">
						<section class="sports-description__right">
							<h2>Disordered Eating Virtual Monitoring</h2>
							<p>The journey toward recovery, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen to be the most effective and provide the most personally tailored consultations.</p>
							<h5>70-minute Initial Consultation + 30 minute in person follow up + 4 weekly check-ins by email  - <br>$325.00</h5>
						</section>
						<section class="sports-description__left">
							<h4>What to Expect:</h4>
							<p>During our initial consultation, we will review your information to glean insights into your eating history,   current eating habits, and behaviors. Expect us to do a lot of listening in the first consultation, as it is important for us to truly understand your individual needs and goals.</p>
							<ul>	
								<li>Detailed evaluation of your current habits and eating patterns</li>
								<li>Personalized eating strategies and meal plans (if appropriate) to help facilitate a healthy relationship with food</li>
								<li>Development of your foundational action plan</li>
								<li>Tailored follow-up plan</li>
							</ul>
							<p>Consultations can be conducted in office or by Skype</p>
							<h5>Follow-Up Consultation</h5>  
							<p>Follow-up sessions allow us to support your goals set in the initial consultation. These sessions can be conducted in office or by phone/skype. </p>
							
							<h5>Preparing for the Initial Consultation: </h5>
							<p>Prior to your consultation, you will need to complete a client contract and comprehensive nutritional assessment. Please bring the completed paperwork to your initial consultation. </p>
							<p>We work as part of a multi-disciplinary team as much as possible. It may be helpful for us to connect with your physician and/or therapist in order to provide you with the best care possible. Please fill out a release form in order to give us permission to us to connect with these members of your treatment team. </p>
						</section>
					</div>
					<section class="row sales-button">
						<div class="button">
							<a href="{{ route('get-started-disorder') }}" data-services-button data-service="DEOM" data-category="disorder" >Setup an Consultation Today</a>
						</div>
					</section>
				</div>
			

			</div>
		</div>
	</div><!-- Eno Controller Wrapper -->

	@include('layouts.frontend.partials.about')

@endsection


@section('extra-scripts')
 	
@endsection