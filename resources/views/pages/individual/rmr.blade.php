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
	<div class="sitewide__page-header">
		<div class="sitewide__page-header--text container">
			<h1>Take The Guesswork Out Of Planning</h1>
		</div>
	</div>

	<div class="weight-loss__text">
		<div class="container sitewide__page--text">
			<section>
				<p>Every human body is unique. Which means the standardized calculations for how many calories you burn in a day aren’t completely accurate.</p>
				<p>Using BodyGem equipment, we can easily and precisely test your resting metabolic rate through only your breathing. This test allows us to further personalize your nutritional planning and finally confirm just how high or low your metabolism might be.  </p>
			</section>
		</div>
	</div>


	

	<div class="services__package">	
		<div class="container">
			<section>
				<h3>Resting Metabolic Rate Testing</h3>
				<ul>
					<li>One-page report of testing results</li>
					<li>Resting Metabolic Rate (RMR) value</li>
					<li>Total Daily Calories based on your RMR</li>
					<li>Comparison of total calories to others in same age and gender to determine if you have a normal, low or high metabolism</li>
				</ul>
			</section>
		</div>
	</div>

@endsection


@section('extra-scripts')
 	
@endsection