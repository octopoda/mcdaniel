<?php
$header = [
	"title" => "Personal Weight Loss Management - McDaniel Nutrition Therapy",
	"description" => "Your weight loss needs are unique. Ease your journey with personally tailored programs and support that helps you uncover the roots of your struggle.",
	"Keywords" => "weight loss, weight loss management, lasting weight loss, personal, nutrition, ",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('modal')
	<div class="modal modal-fixed-footer indivdual" id="weightLossModal">
			<section class="modal-content">		
				<h3>Thank you for choosing McDaniel Nutrition</h3>
				<p>We are excited to help you get started on your weight loss journey.  Please fill out the form and we will contact you shortly to schedule an appointment.</p>
				@include('forms.individual')
			</section>
			<section class="modal-footer text-right">
				<a href="#!" class="modal-action waves-effect waves-green btn-flatten hollow"  id="modalSubmit">Sign Up Now</a>
				<a href="#!" class="modal-action modal-close waves-effect waves-red btn-flatten hollow" >Cancel</a>
			</section>
		</div>
@endsection


@section('content')
	<div class="weight-loss_hero hero">
		<section class="row">
			<h1>Sustain Your <br>Healthy Weight <br>For Good</h1>
		</section>
	</div>


	<!-- Sports Text -->
	<div class="weight-loss__text">
		<div class="weight-loss__text__image tablet-up">
			<img src="/assets/images/pages/weight-loss/weight-loss-text-side.png" alt="Fuel Your New Best with McDaniel Nutrition Sports Packages">
		</div>
		<div class="g-half">
			<section class="tablet-up ">
				
			</section>
			<section>
				<h2>Sustain Weight Loss</h2>
				<p>We believe there’s’ more to the weight loss equation than willpower. Will and dedication don’t have to be your only tools for weight loss. </p>
				<p>During our weight loss management programs, we work with you to uncover the habits and motivations behind your weight loss struggle. And then walk with you through the peaks and valleys to a new foundation for your health sustaining weight loss for good.  </p>
				<p>Purchase one of our longer term packages such as Sustain Premium Program or simply get started with an initial consultation.</p>

				<div class="button">
					<a href="">Sustain Your Goals Today</a>
				</div>
			</section>
		</div>
	</div>
	<!-- Controller Wrapper -->
	<div>
		
		<div class="weight-loss__package-image">
			<div class="weight-loss__package-image--left m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text" data-tabbed-services data-target="sustain">
					<h3>Sustain</h3>
					<h5>Getting Started</h5>
				</div>
			</div>

			<div class="weight-loss__package-image--right m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text" data-tabbed-services data-target="premium">
					<h3>Sustain Premium</h3>
					<h5>Weight Loss Package</h5>
				</div>
			</div>
		</div>

		<div class="row weight-loss-break"></div>
		<div class="m-sub-navigation">
			<ul>
				<li class="active" data-tabbed-services data-target="sustain">Sustain</li>
				<li data-tabbed-services data-target="premium">Sustain Premium</li>
			</ul>
		</div>


		<div class="sports__packages green-gradient m-tabbed">
			<div class="row g-two-columns m-tabbed-info open" id="sustain">
				<section class="sports-description__right">
					<h2>Sustain</h2>
					<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past and what allows us to give you the most personally tailored consultations.</p>
				</section>
				<section class="sports-description__left">
					<h4>How We Help Empower You</h4>
							<ul>
								<li>Detailed evaluation of your food journal</li>
								<li>(Optional computerized nutritional analysis)</li>
								<li>Personalized eating strategies and meal plans for optimal results and health</li>
								<li>Development of your foundational action plan</li>
								<li>Tailored follow-up plan</li>
							</ul>

							<p class="legal">Prior to consultation, you will need to complete a client contract and comprehensive nutritional assessment, found here. Please bring the completed paperwork to your initial consultation. If you desire a computerized nutritional analysis of your 3-day food journal, we will complete this prior to the consult for an additional fee of $30. During our initial consult, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus.</p>
							<p class="legal">Follow-up visits are highly recommended. These sessions support your success and allow us to answer any questions you might have after implementing initial recommendations. These sessions can be completed by phone or in-person. </p>
				</section>
			</div>
			

			<div class="row g-two-columns m-tabbed-info" id="premium">
				<section class="sports-description__right">
					<h2>Sustain Premium</h2>
					<p>The journey toward weight loss, body composition changes, and lasting good eating habits is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past and what allows us to give you the most personally tailored consultations.</p>
				</section>
				<section class="sports-description__left">
					<h4>Setting you up for Success</h4>
							<ul>
								<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, praesentium.</li>
								<li>Nobis, voluptates odio eaque provident harum cupiditate a ullam quas?</li>
								<li>In consequuntur maiores nihil nemo soluta distinctio, cum quibusdam quos?</li>
								<li>Sed quam ea illo placeat ipsum mollitia veritatis necessitatibus qui.</li>
								<li>Omnis sequi eveniet ratione ipsam quas dolorem quod, obcaecati iste!</li>
							</ul>

							<p class="legal">Prior to consultation, you will need to complete a client contract and comprehensive nutritional assessment, found here. Please bring the completed paperwork to your initial consultation. If you desire a computerized nutritional analysis of your 3-day food journal, we will complete this prior to the consult for an additional fee of $30. During our initial consult, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus.</p>
							
				</section>
			</div>
			
			<div class="row sales-button">
				<div class="button">
					<a href="">Setup a Individual Consultation</a>
				</div>
			</div>
		</div>
	</div><!-- Eno Controller Wrapper -->



	@include('layouts.frontend.partials.about')

	

@endsection


@section('extra-scripts')
 	
@endsection