
<?php
$header = [
	"title" => "Nutrition Services – McDaniel Nutrition Therapy, St Louis MO",
	"description" => "McDaniel Nutrition Therapy provides corporate wellness, weight loss management, sports nutrition, and maternal nutrition tailored to your needs and goals",
	"Keywords" => "Nutrition, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('subnav')
	<nav class="subnav" id="subnav">
		<ul class="table-of-contents">
			<li><a href="#services">Services</a></li>
			<li><a href="#corporate">Corporate Wellness</a></li>
			<li><a href="#weightloss">Weight Loss Management</a></li>
			<li><a href="#sports">Sport Nutrition</a></li>
			<li><a href="#maternal">Maternal Nutrition</a></li>
			<li><a href="#rmr">RMR Testing</a></li>
		</ul>
	</nav>
@endsection


@section('content')
<div class="get-started">
	<div class="get-started__header">
		<section class="get-started__header--text">
			<h1>Empower Your Progress </h1>
			<p>We’re dedicated to your unique possibilities. Whether you’re an individual, athlete, or organization, we want to see you empowered to change.  </p>
		</section>
	</div>

	<div id="services" class="get-started__services scrollspy">
		<div class="get-started__services--text">
			<h3>We’ve worked with thousands of nutrition clients in a range of specialties and bring years of education in the science of dietetics and nutrition to all of our clients. Beyond our credentials, we are marathoners, mothers, wives, entrepreneurs, and foodies ourselves, so we know first-hand what it means to make health a priority in the midst of a busy lifestyle. </h3>
		</div>
	</div>



	<div id="corporate" class="get-started__corporate scrollspy">
		<div class="get-started__corporate--text">
			<h3>Corporate Wellness</h3>
			<p>Learn what it takes to build a healthy foundation that your company can grow from. </p>
		</div>
	</div>


	<div id="weightloss" class="get-started__weightloss scrollspy">
		<div class="get-started__weightloss--text">
			<h3>Weight Loss Management</h3>
			<p>Ease your journey to weight loss with personally tailored nutrition and support</p>
		</div>
	</div>


	<div id="sports" class="get-started__sports scroll-spy">
		<div class="get-started__sports--text">
			<h3>Sport Nutrition</h3>
			<p>Power up with the fuel you need to compete at higher levels, set new P.B.s., and build lasting results. </p>
		</div>
	</div>


	<div id="maternal" class="get-started__maternal scroll-spy">
		<div class="get-started__maternal--text">
			<h3>Maternal Nutrition</h3>
			<p>Protect more than your health with an expert who has first-hand experience. </p>
		</div>
	</div>


	<div id="rmr" class="get-started__rmr scroll-spy">
		<div class="get-started__rmr--text">
			<h3>RMR Testing</h3>
			<p>Personalize your planning through accurate resting metabolic rate testing.</p>
		</div>
	</div>
</div>
@endsection


@section('extra-scripts')
 	
@endsection