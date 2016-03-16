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
				<p>Complete the form below to get started.  We will then contact you shortly with more information.</p>
				@include('forms.individual')
			</section>
			<section class="modal-footer text-right">
				<a href="#!" class="modal-action waves-effect waves-green btn-flatten hollow"  id="modalSubmit">Sign Up Now</a>
				<a href="#!" class="modal-action modal-close waves-effect waves-red btn-flatten hollow" >Cancel</a>
			</section>
		</div>
@endsection


@section('content')
	<div class="weightloss__header sitewide__boxed">
		<section class="container">
			<h1><span>Move From Surviving To Thriving</span></h1>
		</section>
	</div>

	<div class="weight-loss__text">
		<div class="container services__main-text">
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


	<div class="services__packages">
		<div class="row">
			<ul>
				<li class="services__packages--package weightloss__individual package-trigger" data-package="weightlossIndividual">
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
				<li class="services__packages--package weightloss__followup package-trigger" data-package="weightlossFollowup">
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
			<div class="services__description" id="weightlossIndividual">
				<div class="row">
					<section class="s12 m6 col">
						<h2>
							Initial Individual Consultation<br>
							<small>60 Minutes</small>
						</h2>

						<div class="services__descriptions--signup">
							<a href="#weightLossModal" class="btn-flatten hollow waves-effect waves-green modal-trigger" data-service="weightloss initial consultation">Sign Up Today</a>
						</div>
					</section>
					<section class="s12 m6 col">
						<h4>How We Help Empower You</h4>
						<ul>
							<li>Detailed evaluation of your food journal</li>
							<li>(Optional computerized nutritional analysis)</li>
							<li>Personalized eating strategies and meal plans for optimal results and health</li>
							<li>Development of your foundational action plan</li>
							<li>Tailored follow-up plan</li>
						</ul>

						<p>Prior to consultation, you will need to complete a client contract and comprehensive nutritional assessment, found here. Please bring the completed paperwork to your initial consultation. If you desire a computerized nutritional analysis of your 3-day food journal, we will complete this prior to the consult for an additional fee of $30. During our initial consult, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus.</p>
					</section>
				</div>
			</div>
			<div class="services__description" id="weightlossFollowup">
				<div class="row">
					<section class="s12 m6 col">
						<h2>
							Follow up Consultation<br>
							<small>30 Minutes</small>
						</h2>

						<div class="services__descriptions--signup">
							<a href="#weightLossModal" class="btn-flatten hollow waves-effect waves-green modal-trigger" data-service="weightloss followup consultation">Continue Your Success</a>
						</div>
					</section>
					<section class="s12 m6 col">
						<h4>How We Help Empower You</h4>
						<ul>
						<li>Review of your foundational action plan</li>
						<li>Analysis of your food journal </li>
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