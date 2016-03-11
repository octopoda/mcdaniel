<?php
$header = [
	"title" => "Registered Dietitians - McDaniel Nutrition Therapy, St Louis",
	"description" => "We are dedicated to your possibilities. Our team has trained Olympic athletes and helped thousand overcome their weight loss struggles. Use our expertise to help make your change.",
	"Keywords" => "registered dietitian, St Louis, nutrition expert, ",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))


@section('content')
	<div class="sitewide__page-header">
		<div class="sitewide__page-header--text container">
			<h1>Put Our Expertise Behind Your Change</h1>
		</div>
	</div>

	<div class="team__text">
		<div class="container sitewide__page--text">
			<section>
				<p>We believe you can go further, make change last, and unlock potential that you haven’t dared to believe you possess. But sometimes it takes help from someone who has been there before and is willing to walk alongside you.    </p>
				<p>Our team of registered dietitians trade hype for science-backed wisdom and personal experience. We exchange perfection-seeking plans for simple, human insights. And most importantly, we put your personal growth ahead of any system or standard.  </p>
			</section>
		</div>
	</div>


	

	<div class="team__bios">	
		<div class="container">
			<div class="row">
				<section class="s12 m6 col">
					<h3>Jennifer McDaniel MS, RDN, CSSD, LD</h3>
					<p>As a registered dietitian, Jennifer McDaniels has helped thousands of clients overcome their personal health Goliaths. Her ability to bring cutting-edge nutritional knowledge to complex human challenges has helped organizations, Olympic athletes, frustrated dieters, and new mothers.  </p>
					<a class="btn-flatten waves-effect hollow waves-green" href="{{ route('jennifer') }}">Learn More about Jennifer</a>
				</section>

				<section class="s12 m6 col">
					<h3>Kayli Dice MS, RDN, HFS</h3>
					<p>Kayli Dice is a plant-based chef, dietitian, and writer. She helps her clients find the nutrition and exercise recipe that will launch them toward their goals and coaches them to develop positive, supportive relationships with their health.</p>
					<a class="btn-flatten waves-effect hollow waves-green" href="{{ route('kayli') }}">Learn More about Kayli</a>
				</section>
			</div>
		</div>
	</div>

@endsection


@section('extra-scripts')
 	
@endsection