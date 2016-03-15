<?php
$header = [
	"title" => "Support Center  McDaniel Nutrition Therapy St Louis Missouri",
	"description" => "Wnat to know more about our nutrition services. Frequently asked questions for McDaniel",
	"Keywords" => "FAQS, Frequently Asked Questions,  St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition, dietitian, consultation, nutritionist, speaking, media",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')
	
	<h1>
		Speaking of Healthy
	</h1>


	<div class="speaking__desciprtion">
		<div class="container">
			<div class="row">
				<p>Jennifer McDaniel, Founder of McDaniel Nutrition Therapy, is a sought after national media spokesperson for The Academy of Nutrition and Dietetics and regular on-air contributor. Her healthy, positive messages on the power of proper nutrition and her personal, enthusiastic style connect with diverse audiences, putting nutritional success within their grasp.  </p>
			</div>
		</div>
	</div>


	<div class="speaking__logos">
		<div class="container">
			<div class="row">
				<p>Jennifer has been quoted in local and national media outlets including: Men’s Health Magazine, US News and World Report, IVillage.com, MSN.com, St. Louis Magazine, and STL Today. Contact her for interviews, guest spots, and speaking at your next event. </p>
				<ul>
					<li class="speaking__mens-health"></li>
					<li class="speaking__us-news"></li>
					<li class="speaking__iVillage"></li>
					<li class="speaking__MSN"></li>
					<li class="speaking__fox"></li>
				</ul>
			</div>
		</div>
	</div>
	
	

	<div class="speaking__appearances">
		<div class="container">
			<div class="row">
				<h2>Jennifer's Recent Appearances</h2>
				<ul>
				@foreach($appearances as $appearance)
					<li>{{ $appearance->title }}</li>
				@endforeach
				</ul>
			</div>

			<div class="button-group row">
				<a href="#" class="btn-flatten hollow waves-effect">Book Jennifer</a>
				<a href="#" class="btn-flatten hollow waves-effect">See More Appearances</a>
			</div>
		</div>
	</div>
@endsection



@section('extra-scripts')
 	
@endsection