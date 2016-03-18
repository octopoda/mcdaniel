<?php
$header = [
	"title" => "Speaking & Publicity – Jennifer McDaniel, St Louis",
	"description" => "Jennifer McDaniel is a sought after national media spokesperson and regular on-air contributor. She is available for local and national media engagements.",
	"Keywords" => "Spokesperson, speaking, publicity, media, on-air contributor, local, national, nutrition, registered dietitian, ",
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
	
	<div class="appearances__sub-header">
		<section class="container">
			<h1><span>Jennifer's Recent Appearances</span></h1>
		</section>
	</div>


	

	<div class="appearances__appearances">
		<div class="container">
			<div class="row">
				<ul class="appearances__list">
				@foreach($appearances as $appearance)
					<li>
						<a href="{{ route('appearanceByTitle', ['title' => $appearance->direct_link ]) }}">
							<span class="appearances__list--title" >{{ $appearance->title }}</span>
							<span class="appearances__list--date">{{ date("F d, Y", strtotime($appearance->created_at)) }}</span>
						</a>
					</li>
				@endforeach
				</ul>
			</div>
		</div>
	</div>

	<div>
		<div class="container">
			{!! $appearances->render() !!}
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
	

@endsection



@section('extra-scripts')
 	
@endsection