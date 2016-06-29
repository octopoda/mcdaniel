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
	<div class="weight-loss_hero hero">
		<section class="row">
			<h1>Sustain Your <br>Healthy Weight <br>For Good</h1>
		</section>
	</div>


	<!-- Sports Text -->
	<div class="weight-loss__text">
		<div class="weight-loss__text__image tablet-up">
			<img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/images/pages/weight-loss/weight-loss-text-side.png" alt="Sustian your Healhty Weight with McDaniel Nutrition Sports Packages">
		</div>
		<div class="g-half">
			<section class="tablet-up ">
				
			</section>
			<section>
				<h2>Sustain Weight Loss</h2>
				<p>We believe there’s more to the weight loss equation than willpower. Will and dedication don’t have to be your only tools for weight loss. </p>
				<p>During our weight loss management programs, we work with you to uncover the habits and motivations behind your weight loss struggle. And then walk with you through the peaks and valleys to a new foundation for your health sustaining weight loss for good.  </p>
				<p>Purchase one of our longer-term packages or simply get started with an initial consultation.</p>

				<div class="button" >
					<a href="{{ route('get-started-weight') }}" data-services-button data-service="weight-loss" >Sustain Your Goals Today</a>
				</div>
			</section>
		</div>
	</div>
	<!-- Controller Wrapper -->
	<div>
		<div class="weight-loss__package-image">
			<div class="weight-loss__package-image--three sustain m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text" data-tabbed-services data-target="sustain">
					<h3>Initial Consult</h3>
					<h5>Getting Started</h5>
				</div>
			</div>

			<div class="weight-loss__package-image--three weight m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text" data-tabbed-services data-target="premium">
					<h3>Packages</h3>
					<h5>Weight Loss Package</h5>
				</div>
			</div>


			<div class="weight-loss__package-image--three online m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text" data-tabbed-services data-target="online">
					<h3>Online Weight Loss</h3>
					<h5>Weight Loss Online</h5>
				</div>
			</div>
		</div>

		<div class="row weight-loss-break"></div>
		<div class="m-sub-navigation">
			<ul class="tabbed-services-indicator">
				<li class="active tab-indicator sustain" data-tabbed-services data-target="sustain">Initial Consult</li>
				<li class="premium tab-indicator" data-tabbed-services data-target="premium">Packages</li>
				<li class="online tab-indicator" data-tabbed-services data-target="online">Weight Loss Online</li>
			</ul>
		</div>


		<div class="sports__packages green-gradient">
			<div class="m-tabbed">
				<div class="m-tabbed-info open" id="sustain">
					<div class="g-two-columns row">
						<section class="sports-description__right">
							<h2>Get Started with Your Initial Consultation</h2>
							<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past and what allows us to give you the most personally tailored consultations.</p>
						</section>
						<section class="sports-description__left">
							<h4>How We Help Empower You:</h4>
									<ul>
										<li>Detailed evaluation of your food journal</li>
										<ul>
											<li>(Optional computerized nutritional analysis)</li>
										</ul>
										<li>Personalized eating strategies and meal plans for optimal results and health</li>
										<li>Development of your foundational action plan</li>
										<li>Tailored follow-up plan</li>
									</ul>

									<p class="legal">Prior to your consultation, you will need to complete a client contract and comprehensive nutritional assessment. You will be directed to the paperwork when you sign up. Please bring the completed paperwork to your initial consultation. If you desire a computerized nutritional analysis of your 3-day food journal, we will complete this prior to the consult for an additional fee of $30. During our initial consult, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus.</p>
									<p class="legal">Follow-up visits are highly recommended. These sessions support your success and allow us to support your goals set in the initial consultation. These sessions can be completed by phone/skype or in-person. </p>
						</section>
					</div>
					<section class="row sales-button">
						<div class="button">
							<a href="{{ route('get-started-weight') }}" data-services-button data-service="weight-loss-consult" >Set up Your Consultation Now</a>
						</div>
					</section>
				</div>
			

				<div class="m-tabbed-info" id="premium">
					<div class="g-two-columns row">
						<section class="sports-description__right">
							<h2>Weight Loss Package</h2>
							<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past and what allows us to give you the most personally tailored consultations.</p>
						</section>
						<section class="sports-description__left">
							<h4>Setting you up for Success</h4>
									<p>Premium Packages include:</p>
									<p>Initial Consultation plus 5, 30 minute follow-up sessions which can be conducted in-office or by phone/skype. </p>
									<p>With each follow-up visit you can expect:</p>
									<ul>
										<li>Review of your foundational action plan</li>
										<li>Analysis of your food journal or online health app </li>
										<li>Meal planning support &amp; recipe ideas incorporating your preferences</li>
										<li>Tailored feedback to your lifestyle and goals.</li>
									</ul>

									<p>Follow-Up Sessions can also be scheduled on an as needed basis. You and your dietitian will discuss your personalized follow-up plan. </p>

									<p class="legal">Prior to consultation, you will need to complete a client contract and comprehensive nutritional assessment.  You will be directed to the paperwork when you sign up. Please bring the completed paperwork to your initial consultation. If you desire a computerized nutritional analysis of your 3-day food journal, we will complete this prior to the consult for an additional fee of $30. During our initial consult, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus.</p>
									
						</section>
					</div>
					<section class="row sales-button">
						<div class="button">
							<a href="{{ route('get-started-weight') }}" data-services-button data-service="weight-loss-premium" >Start the Program Today</a>
						</div>
					</section>
				</div>


				<div class="m-tabbed-info" id="online">
					<div class="g-two-columns row">
						<section class="sports-description__right">
							<h2>Sustain Online Weight Loss Program</h2>
							<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. Our online Sustain Weight Loss Program is a 16-week weight management program that allows you to listen, learn and transform in the comfort of your own home. Listen live or use the option to listen to the live recordings at a later time. </p>
						</section>
						<section class="sports-description__left">
							<h4>How we help set you up for sustainable success: </h4>

							<h5>Weight Loss Recommendations you can TRUST</h5>
									<ul>
										<li>16 weeks of evidence-based weight loss guidance conducted by a Registered Dietitian </li>
										<li>Weight loss counsel based on thousands of successful McDaniel Nutrition clients </li>
										<li>Weight loss information that leads to more than just weight loss, but also addresses disease prevention and longevity promotion</li>
									</ul>

							<h5>Personalized components tailored to YOU</h5>
									<ul>
										<li>4 private email sessions between you and your dietitian </li>
										<li>Optional analysis of your online food journal </li>
									</ul>

							<h5>An enhanced group learning experience </h5>
							<ul>
								<li>During live sessions, you have the ability to ask questions and learn from other Sustain participants </li>
								<li>Optional ongoing group support from participants after the program has ended</li>
							</ul>
	
							
									
						</section>
					</div>
					<section class="row sales-button">
						<div class="button">
							<a href="{{ route('get-started-weight') }}" data-services-button data-service="weight-loss-sustain-online" >Sign Up For The Upcoming Sustain Program</a>
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