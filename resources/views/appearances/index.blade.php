<?php
$header = [
	"title" => "Speaking & Publicity – Jennifer McDaniel, St Louis",
	"description" => "Jennifer McDaniel is a sought after national media spokesperson and regular on-air contributor. She is available for local and national media engagements.",
	"Keywords" => "Spokesperson, speaking, publicity, media, on-air contributor, local, national, nutrition, registered dietitian, ",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('modal')
	<div class="m-modal indivdual" id="appearanceModal">
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
	@endsection

@section('content')
	
	<!-- Header -->
	<div class="appearances__hero hero">
		<section class="row">
			<h1>Speaking of Healthy</h1>

		</section>
	</div>



	<!-- Sports Text -->
	<div class="appearance__text">
		<div class="g-half">
			<section>
				<h2>Jennifer McDaniel MS, RDN, CSSD, LD</h2>
				<p>Jennifer McDaniel, Founder of McDaniel Nutrition Therapy, is a sought after national media spokesperson for The Academy of Nutrition and Dietetics and regular on-air contributor. Her healthy, positive messages on the power of proper nutrition and her personal, enthusiastic style connect with diverse audiences, putting nutritional success within their grasp.  </p>	
				<div class="button">
					<a href="">Book Jennifer</a>
				</div>
			</section>
			<section class="tablet-up ">
				
			</section>
		</div>

		<div class="appearance__text__image tablet-up">
			<img src="/assets/images/pages/appearances/insta-video-med.jpg" alt="Jennifer in Fox 2 Studios " class="tablet-only">
			<img src="/assets/images/pages/appearances/insta-video.jpg" alt="Jennifer in Fox 2 Studios " class="laptop-up">
		</div>
	</div>
	

	<div class="appearances__logos">
			<div class="row">
				<h2>Inspiring Growth</h2>
				<p>Jennifer has been quoted in local and national media outlets including: Men’s Health Magazine, US News and World Report, IVillage.com, MSN.com, St. Louis Magazine, and STL Today. Contact her for interviews, guest spots, and speaking at your next event. </p>
				<ul>
					<li class="appearances__mens-health"></li>
					<li class="appearances__us-news"></li>
					<li class="appearances__iVillage"></li>
					<li class="appearances__MSN"></li>
				</ul>
			</div>
	</div>
	
	

	<div class="appearances__appearances">
		<div class="container">
			<div class="row">
				<h3>Jennifer's Recent Appearances</h3>
				<ul class="appearances__videos">
				@foreach($appearances as $appearance)
					<li class="appearances__videos-thumb">
						<a href="{{ route('appearanceByTitle', ['title' => $appearance->direct_link ]) }}">
							<span class="posterImage" >{{ $appearance->title }}</span>
						</a>
					</li>
				@endforeach
				</ul>
			</div>

			<div class="button-group row">
				<div class="button">
					<a href="#appearanceModal" data-service="Book for Appearance">Book Jennifer</a>
				</div>
				
				<div class="button">
					<a href="{{ route('appearancesArchive') }}" >More Appearances</a>
				</div>
			</div>
		</div>
	</div>
@endsection



@section('extra-scripts')
 	
@endsection