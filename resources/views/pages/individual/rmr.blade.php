<?php
$header = [
	"title" => "Metabolic Rate Testing - McDaniel Nutrition Therapy, St Louis",
	"description" => "You can finally know how high or low your metabolism is and how many calories you’re burning during the day with our resting metabolic rate (RMR) testing.",
	"Keywords" => "RMR testing, resting metabolic rate testing, nutrition",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))


@section('modal')
	<div class="modal modal-fixed-footer indivdual" id="rmrModal">
			<section class="modal-content">		
				<h3>Thank you for choosing McDaniel Nutrition</h3>
				<p>We ready to help you take the guesswork out of planning.  Please fill out the form and we will contact you shortly to schedule an appointment.</p>
				@include('forms.individual')
			</section>
			<section class="modal-footer text-right">
				<a href="#!" class="modal-action waves-effect waves-green btn-flatten hollow"  id="modalSubmit">Sign Up Now</a>
				<a href="#!" class="modal-action modal-close waves-effect waves-red btn-flatten hollow" >Cancel</a>
			</section>
		</div>
@endsection

@section('content')
	<div class="rmr__header sitewide__boxed">
		<section class="container">
			<h1><span>Take The Guesswork Out Of Planning</span></h1>
		</section>
	</div>

	<div class="rmr__text">
		<div class="container services__main-text">
			<section>
					<p>Every human body is unique. Which means the standardized calculations for how many calories you burn in a day aren’t completely accurate.</p>
					<p>Using BodyGem equipment, we can easily and precisely test your resting metabolic rate through only your breathing. This test allows us to further personalize your nutritional planning and finally confirm just how high or low your metabolism might be.  </p>
			</section>
		</div>
	</div>

	<div class="services__descriptions">	
		<div class="container">
			<div class="services__description is-active">
				<div class="row">
					<section class="s12 m6 col">
						<h2>
							Resting Metabolic Rate Testing
						</h2>

						<div class="services__descriptions--signup">
							<a href="#rmrModal" class="btn-flatten hollow waves-effect waves-green modal-trigger" data-service="RMR Testing">Get Started Today</a>
						</div>
					</section>
					<section class="s12 m6 col">
						<h4>How we can help you fuel a new PR.</h4>
						<ul>
							<li>One-page report of testing results</li>
							<li>Resting Metabolic Rate (RMR) value</li>
							<li>Total Daily Calories based on your RMR</li>
							<li>Comparison of total calories to others in same age and gender to determine if you have a normal, low or high metabolism</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	</div>

@endsection


@section('extra-scripts')
 	
@endsection