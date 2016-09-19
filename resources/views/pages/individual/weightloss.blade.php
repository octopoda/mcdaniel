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
				<p>We believe there’s more to the weight loss equation than willpower. Will and dedication don’t have to be your only tools for weight loss.</p>
				<p>During our weight loss management programs, we work with you to uncover the habits and motivations behind your weight loss struggle. And then walk with you through the peaks and valleys to a new foundation for your health, sustaining weight loss for good.</p>
				<p>Begin with our Start-Up Package for a nutrition tune-up or invest in longer-term support with our Premium Package. </p>


				<div class="button" >
					<a href="{{ route('get-started-weight') }}" data-services-button data-service="" data-category="weight" >Sustain Your Goals Today</a>
				</div>
			</section>
		</div>
	</div>
	<!-- Controller Wrapper -->
	<div>
		<div class="weight-loss__package-image">
			<div class="weight-loss__package-image--three sustain m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text" data-tabbed-services data-target="WLSP">
					<h3>Packages</h3>
					<h5>Weight Loss Packages</h5>
				</div>
			</div>

			<div class="weight-loss__package-image--three weight m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text" data-tabbed-services data-target="WLOM">
					<h3>Online Weight Loss</h3>
					<h5>Weight Loss Online</h5>
				</div>
			</div>


			<div class="weight-loss__package-image--three online m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text" data-tabbed-services data-target="WLSO">
					<h3>Sustain Online</h3>
					<h5>Weight Loss Program</h5>
				</div>
			</div>
		</div>

		<div class="row weight-loss-break"></div>
		<div class="m-sub-navigation">
			<ul class="tabbed-services-indicator">
				<li class="active tab-indicator WLSP" data-tabbed-services data-target="WLSP">Packages</li>
				<li class="tab-indicator WLOM" data-tabbed-services data-target="WLOM">Online Weight Loss</li>
				<li class="tab-indicator WLSO" data-tabbed-services data-target="WLSO">Sustain Online</li>
			</ul>
		</div>


		<div class="sports__packages green-gradient">
			<div class="m-tabbed">
				<div class="m-tabbed-info open" id="WLSP">
				
					{{-- Startup Package --}}
					<div class="g-two-columns row">
						<section class="sports-description__right">
							<h2>Start-Up Package</h2>
							<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen to be the most effective and provides the most personally tailored consultations.</p>
							<h5>70-Minute Initial Consultation + 30-Minute Follow-Up <br> $250.00</h5>
						</section>
						<section class="sports-description__left">
							<h4>What to Expect:</h4>
									<p>During our initial consultation, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus. Expect us to do a lot of listening in the first consultation, as it is important for us to truly understand your individual needs and goals. </p>
									<ul>	
										<li>Detailed evaluation of your current habits of health and eating patterns</li>
										<li>Personalized eating strategies and meal plans for optimal results and health</li>
										<li>Development of your foundational action plan</li>
										<li>Tailored follow-up plan</li>
										<li>Can be conducted in office or by phone/skype </li>
									</ul>
							<h5>Follow-Up Consultation</h5>  
							<p>Follow-up sessions allow us to support your goals set in the initial consultation. These sessions can be conducted in office or by phone/skype. </p>
							
							<h5>Preparing for the Initial Consultation: </h5>
							<p>Prior to your consultation, you will need to complete a client contract and comprehensive nutritional assessment. Please bring the completed paperwork to your initial consultation. </p>
						</section>
					</div>
					<section class="row sales-button">
						<div class="button">
							<a href="{{ route('get-started-weight') }}" data-services-button data-service="WLSP" data-category="weight">Set up Your Consultation Now</a>
						</div>
					</section>

					<hr style="margin-top:20px; margin-bottom:20px; display:block;">

					{{-- Premium Package --}}
					<div class="g-two-columns row">
						<section class="sports-description__right">
							<h2>Premium Package</h2>
							<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen to be the most effective and provides the most personally tailored consultations. The Premium Package is ideal for the client looking to lose weight through sustained lifestyle change and long-term support. </p>
							<h5>70-Minute Initial Consultation + 4, 30-Minute Follow-Up Sessions - <br>$475.00</h5>
						</section>
						<section class="sports-description__left">
							<h4>What to Expect: </h4>
							<p>During our initial consultation, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus. Expect us to do a lot of listening in the first consultation, as it is important for us to truly understand your individual needs and goals. </p>
							<ul>
								<li>Detailed evaluation of your current habits of health and eating patterns</li>
								<li>Personalized eating strategies and meal plans for optimal results and health</li>
								<li>Development of your foundational action plan</li>
								<li>Tailored follow-up plan</li>
								<li>Can be conducted in office or by phone/skype </li>
							</ul>
							<h5>Follow-Up Consultations </h5>
							<p>Follow-up sessions allow us to support your goals set in the initial consultation. These sessions can be conducted in office or by phone/skype. </p>
							
							<h5>Preparing for the Initial Consultation: </h5>
							<p>Prior to your consultation, you will need to complete a client contract and comprehensive nutritional assessment. Please bring the completed paperwork to your initial consultation. </p>
						</section>
					</div>
					<section class="row sales-button">
						<div class="button">
							<a href="{{ route('get-started-weight') }}" data-services-button data-service="WLPP" data-category="weight" >Start the Program Today</a>
						</div>
					</section>
				</div>
			

				<div class="m-tabbed-info" id="WLOM">
					<div class="g-two-columns row">
						<section class="sports-description__right">
							<h2>Online Monitoring </h2>
							<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. The right weight loss tools can help you succeed.  Individuals who journal their foods lose two times more weight compared to those who do not track. </p>
							<h5>70-Minute Initial Consultation + One Month of Online Monitoring <br> $375.00</h5>
						</section>
						<section class="sports-description__left">
							<h4>What to Expect: </h4>
							<p>Conveniently track your foods using an online journal. Your Registered Dietitian will review your journal weekly and provide you tailored feedback through a weekly email exchange. </p>
							<h5>Initial Consultation: </h5>
							<p>During our initial consultation, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus. Expect us to do a lot of listening in the first consultation, as it is important for us to truly understand your individual needs and goals. </p>
							<ul>	
								<li>Detailed evaluation of your current habits of health and eating patterns</li>
								<li>Personalized eating strategies and meal plans for optimal results and health</li>
								<li>Development of your foundational action plan</li>
								<li>Tailored follow-up plan</li>
								<li>Can be conducted in office or by phone/skype </li>
							</ul>
							
							<h5>Preparing for the Initial Consultation: </h5>
							<p>Prior to your consultation, you will need to complete a client contract and comprehensive nutritional assessment. </p>
							<p class="legal">* Online monitoring can be added to any of the weight loss packages but requires an initial consult before online monitoring can begin. </p>
							
									
						</section>
					</div>
					<section class="row sales-button">
						<div class="button">
							<a href="{{ route('get-started-weight') }}" data-services-button data-service="WLOM" data-category="weight">Setup Your Initial Consultation</a>
						</div>
					</section>
				</div>


				<div class="m-tabbed-info" id="WLSO">
					<div class="g-two-columns row">
						<section class="sports-description__right">
							<h2>Sustain Online Weight Loss Program</h2>
							<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. Our online Sustain Weight Loss Program is a 12-week weight management program that allows you to listen, learn and transform in the comfort of your own home. Listen live or use the option to listen to the live recordings at a later time.</p>
							<h5>12 weeks of evidence-based weight loss guidance conducted by a Registered Dietitian  <br> $400.00</h5>
						</section>
						<section class="sports-description__left">
							<h4>How we help set you up for sustainable success:</h4>
							<h5>Weight Loss Recommendations you can TRUST</h5>
							<ul>
								<li>12 weeks of evidence-based weight loss guidance conducted by a Registered Dietitian</li>
								<li>Weight loss counsel based on thousands of successful McDaniel Nutrition clients</li>
								<li>Weight loss information that leads to more than just weight loss but also addresses disease prevention and longevity promotion</li>
							</ul>
							<h5>Personalized components tailored to YOU</h5>
							<ul>
								<li>3, 30 minute phone consultations between you and your Registered Dietitian</li>
							</ul>
							<h5>An enhanced group learning experience</h5>
							<ul>	
								<li>During live sessions, interact with your Registered Dietitian and Sustain participants</li>
								<li>Optional ongoing group support from participants post program</li>
							</ul>
						</section>
					</div>
					<section class="row sales-button">
						<div class="button">
							<a href="https://mcdanielnutrition.com/store/sustain-online-weight-loss-program">SIGN UP FOR THE UPCOMING SUSTAIN PROGRAM</a>
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