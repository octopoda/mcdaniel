
<?php
$header = [
	"title" => "Nutrition Services – McDaniel Nutrition Therapy, St Louis MO",
	"description" => "McDaniel Nutrition Therapy provides corporate wellness, weight loss management, sports nutrition, and maternal nutrition tailored to your needs and goals",
	"Keywords" => "Nutrition, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')
<article class="gs" data-ng-controller="GetStartedController as vm">
	<div class="weight-loss_hero hero">
		<section class="row">
			<h1>Empower <br>Your Progress</h1>
		</section>
	</div>

	<div class="get-started">
		<div class="row">
			<div class="get-started__index">
				<h2>We Support Change.</h2>
				<p>We’re dedicated to your unique possibilities. Whether you’re an individual, athlete, or organization, we want to see you empowered to change.  </p>
				<p>We’ve worked with thousands of nutrition clients in a range of specialties and bring years of education in the science of dietetics and nutrition to all of our clients. Beyond our credentials, we are marathoners, mothers, wives, entrepreneurs, and foodies ourselves, so we know first-hand what it means to make health a priority in the midst of a busy lifestyle. </p>

				<div class="get-started__contact">
					@include('getstarted.partials.get-started-form')
				</div>

				<div class="get-started__articles">
					
				</div>

			</div>	
		</div>
	</div>

	<div class="get-started__other ">
		<div class="weight-loss__package-image">
			<div class="weight-loss__package-image--three weight m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text">
					<h3><a href="{{ route('weight-loss') }}">Sustain Weight Loss</a></h3>
					<h5><a href="{{ route('weight-loss') }}">Getting Started</a></h5>
				</div>
			</div>

			<div class="weight-loss__package-image--three sports m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text">
					<h3><a href="{{ route('sports-nutrition') }}">Sports Nutrition</a></h3>
					<h5><a href="{{ route('sports-nutrition') }}">Reach A New PR</a></h5>
				</div>
			</div>

			<div class="weight-loss__package-image--three corporate m-square-small__wrapper">	
				<div class="m-square-small"></div>
				<div class="m-square-small__text">
					<h3><a href="{{ route('corporate') }}">Corporate Welleness</a></h3>
					<h5><a href="{{ route('corporate') }}">Get Your Company Healthy</a></h5>
				</div>
			</div>
		</div>

		
	</div>
</article>
@endsection


@section('extra-scripts')
 	
@endsection