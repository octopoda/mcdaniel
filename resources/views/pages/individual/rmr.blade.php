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
			<img src="/assets/images/pages/rmr/rmr-text-side.png" alt="Take the Guesswork Out of Planning - McDaniel RMR Testing">
		</div>
		<div class="g-half">
			<section class="tablet-up ">
				
			</section>
			<section>
				<h2>Optimze your Metobolism</h2>
				<p>Every human body is unique. Which means the standardized calculations for how many calories you burn in a day aren’t completely accurate.</p>
				<p>Using BodyGem equipment, we can easily and precisely test your resting metabolic rate through only your breathing. This test allows us to further personalize your nutritional planning and finally confirm just how high or low your metabolism might be.  </p>
				
				<div class="button">
					<a href="{{ route('get-started-rmr') }}" data-services-button data-service="rmr-testing" >Start Today</a>
				</div>
			</section>
		</div>
	</div>

	<div class="m-sub-navigation"></div>

	
	<div class="maternal__packages green-gradient">	
		<div class="row g-two-columns">
			<section class="maternal-description__right">
				<h3>Resting Metabolic Rate Testing</h3>
				<p class="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur mollitia adipisci quas at aperiam praesentium nemo fuga exercitationem, corporis veritatis, eum vero quis! Quasi nostrum rem consectetur, sunt laudantium voluptas ullam sequi magni laboriosam deserunt qui aliquam voluptate distinctio amet.</p>
			</section>
			<section class="maternal-description__left">
				<h5>How we can Lead you to a new health.</h5>
				<ul>
					<li>One-page report of testing results</li>
					<li>Resting Metabolic Rate (RMR) value</li>
					<li>Total Daily Calories based on your RMR</li>
					<li>Comparison of total calories to others in same age and gender to determine if you have a normal, low or high metabolism</li>
				</ul>
			</section>
		</div>
		<div class="row sales-button">
			<div class="button">
				<a href="{{ route('get-started-rmr') }}" data-services-button data-service="rmr-testing" >Optimize Your Metabolism Today</a>
			</div>
		</div>
	</div>



	@include('layouts.frontend.partials.about')

@endsection


@section('extra-scripts')
 	
@endsection