<?php
$header = [
	"title" => "Oops an error occurred",
	"description" => "Oops we had an error we cannot fix. Its ok! We have been alerted and will fix it to our best ability.",
	"Keywords" => "Contact us, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition, dietitian, consultation, nutritionist, speaking, media",
	"fixed" => true
	];

?>

@extends('layouts.frontend.page', compact('header'))

@section('content')
		<div class="home__hero hero">
			<div class="row">
				<h1>An Error Occurred With PayPal and our Site</h1>
			</div>
		</div>
		
	<div>
		<div class="row l-section">
			<section style="margin:auto; width:80%;">
				<p>Something happened with PayPal that we cannot resolve.  The transaction most likely went through but we are not able to resolve it on our end.</p>   
				<p>We have been alerted of the error and will contact you shortly with the details.</p>

				<p>Sorry for the inconvenience,</p>

				<p>The McDaniel Nutrition Team</p>
			</section>
		</div>
	</div>


	
@endsection


