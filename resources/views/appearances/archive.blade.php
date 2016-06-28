<?php
$header = [
	"title" => "Speaking & Publicity – Jennifer McDaniel, St Louis",
	"description" => "Jennifer McDaniel is a sought after national media spokesperson and regular on-air contributor. She is available for local and national media engagements.",
	"Keywords" => "Spokesperson, speaking, publicity, media, on-air contributor, local, national, nutrition, registered dietitian, ",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')
		<!-- Header -->
	<div class="appearances__hero hero">
		<section class="row">
			<h1>Recent Appearances</h1>
		</section>
	</div>



	

	<div class="appearances__appearances appearance__video-wrapper">
		<div class="container">
			<div class="row">
				<ul class="appearances__list">
				@foreach($appearances as $appearance)
					<li @if (!empty($appearance->thumbnail)) style="background-image:url({{ $appearance->thumbnail }}) @endif">
						<a href="{{ route('appearanceByTitle', ['title' => $appearance->direct_link ]) }}">
							<span class="appearances__list--title" >{{ $appearance->title }}</span>
							<span class="appearances__list--date">{{ $appearance->appearance_date }}</span>
						</a>
					</li>
				@endforeach
				</ul>
			</div>
		</div>
	</div>

	<div>
		<div class="row">
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
	
				<div class="button-group">
					<div class="button reverse">
						<a href="#appearanceModal" class="">Book Jennifer Today</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	

@endsection



@section('extra-scripts')
 	
@endsection