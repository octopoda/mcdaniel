<?php
$header = [
	"title" => "Support Center  McDaniel Nutrition Therapy St Louis Missouri",
	"description" => "Wnat to know more about our nutrition services. Frequently asked questions for McDaniel",
	"Keywords" => "FAQS, Frequently Asked Questions,  St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition, dietitian, consultation, nutritionist, speaking, media",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))


<div class="modal modal-fixed-footer indivdual" id="appearanceModal">
			<section class="modal-content">		
				<h3>I am ready to help you viewers/readers get healthy</h3>
				<p>Please fill out the form below and we will contact you with more information.</p>
				@include('forms.individual')
			</section>
			<section class="modal-footer text-right">
				<a href="#!" class="modal-action waves-effect waves-green btn-flatten hollow"  id="modalSubmit">Sign Up Now</a>
				<a href="#!" class="modal-action modal-close waves-effect waves-red btn-flatten hollow" >Cancel</a>
			</section>
		</div>

@section('content')
	
	<div class="">
		<section class="container">
			<h1>{{ $appearance->title }}</h1>
		</section>
	</div>

	<div class="container">
		<div class="apperances__video">
			<div class="video-container">
				{!! $appearance->video_url !!}
			</div>
		</div>
	</div>

	<div class="appearances__description">
		<div class="container services__main-text">
				<p>Jennifer McDaniel, Founder of McDaniel Nutrition Therapy, is a sought after national media spokesperson for The Academy of Nutrition and Dietetics and regular on-air contributor. Her healthy, positive messages on the power of proper nutrition and her personal, enthusiastic style connect with diverse audiences, putting nutritional success within their grasp.  </p>
		</div>
	</div>


	<div class="appearances__logos">
		<div class="container">
			<div class="row">
				<h2>Inspiring Growth</h2>
				<p>Jennifer has been quoted in local and national media outlets including: Men’s Health Magazine, US News and World Report, IVillage.com, MSN.com, St. Louis Magazine, and STL Today. Contact her for interviews, guest spots, and speaking at your next event. </p>
				<ul>
					<li class="appearances__mens-health"></li>
					<li class="appearances__us-news"></li>
					<li class="appearances__iVillage"></li>
					<li class="appearances__MSN"></li>
				</ul>

				<div class="appearance__logos--book">
						<a href="#appearanceModal" class="btn-flatten hollow modal-trigger" data-services="Book for Appearanaces">Book Jennifer Today</a>
				</div>
			</div>
		</div>
	</div>
	
	

	 <div class="appearances__appearances">
		<div class="container">
			<div class="row">
				<h2>View More of Jennifer's Appearances</h2>
				<ul class="appearances__videos">
				@foreach($moreAppearances as $more)
					<li class="appearances__videos-thumb">
						<a href="{{ route('appearanceByTitle', ['title' => $more->direct_link ]) }}" >
							<span>{{ $more->title }}</span>
						</a>
					</li>
				@endforeach
				</ul>
			</div>

			<div class="button-group row">
				<a href="#" class="btn-flatten hollow waves-effect">View Archive</a>
			</div>
		</div>
	</div> 
@endsection



@section('extra-scripts')
 	
@endsection