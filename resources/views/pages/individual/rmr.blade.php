<?php
$header = [
	"title" => "Metabolic Rate Testing - McDaniel Nutrition Therapy, St Louis",
	"description" => "You can finally know how high or low your metabolism is and how many calories you’re burning during the day with our resting metabolic rate (RMR) testing.",
	"Keywords" => "RMR testing, resting metabolic rate testing, nutrition",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))



@section('content')

	<div class="rmr__hero hero">
		<section class="row">
			<h1>Take The Guesswork<br> Out Of Planning</h1>
		</section>
	</div>



	<div class="rmr__text">
		<div class="rmr__text__image tablet-up">
			<img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/images/pages/rmr/rmr-text-side.png" alt="Take the Guesswork Out of Planning - McDaniel RMR Testing">
		</div>
		<div class="g-half">
			<section class="tablet-up ">
				
			</section>
			<section>
				<h2>Optimize your Metabolism</h2>
				<p>Every human body is unique. Which means the standardized calculations for how many calories you burn in a day aren’t completely accurate.</p>
				<p>Using BodyGem equipment, we can easily and precisely test your resting metabolic rate through only your breathing. This test allows us to further personalize your nutritional planning and finally confirm just how high or low your metabolism might be.  </p>

				<h5>What to Expect From Your RMR Analysis:</h5>
				<ul>
					<li>One-page report of testing results</li>
					<li>Resting Metabolic Rate (RMR) value</li>
					<li>Total Daily Calories based on your RMR and activity/exercise calories</li>
					<li>Comparison of total calories to others in same age and gender to determine if you have a normal, low or high metabolism</li>
				</ul>

				<h5>RMR Testing - $75.00</h5>
				
				<div class="button">
					<a href="{{ route('get-started-rmr') }}" data-services-button data-service="rmr-testing" >Measure Your Metabolism Today</a>
				</div>
			</section>
		</div>
	</div>



	@include('layouts.frontend.partials.about')

@endsection


@section('extra-scripts')
 	
@endsection