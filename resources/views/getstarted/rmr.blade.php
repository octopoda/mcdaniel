
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
<article class="gs" data-ng-controller="GetStartedController as vm" data-ng-init="vm.service = 'rmr-testing'">
	<div class="rmr__hero hero">
		<section class="row">
			<h1>Take The Guesswork<br> Out Of Planning</h1>

		</section>
	</div>


	<div class="get-started">
		<div class="row">
			<div class="get-started__price tablet-up">
				<h3 data-ng-cloak data-ng-bind-html="vm.name"></h3>
				<h2 data-ng-if="vm.price != null" data-ng-cloak>{! vm.price !}</h2>
				<h4 data-ng-if="vm.price == null" data-ng-cloak>Please Contact Us for Pricing</h4>
			</div>

			<div class="get-started__content">
				<h2>Know Your Body</h2>
				<p>The BodyGem is a handheld device that can accurately measure what your metabolic rate is at rest – this is the rate at which you burn calories when you are resting.</p>
				<p>Your resting metabolic rate number can then be used to get an accurate estimate your total calories needs for the entire day. You will then know if you have a low, normal or high metabolism. It is much more accurate than equations that use only your height, weight and age to calculate a daily calorie value for the day.</p>
				<p>The test is conducted by breathing into the BodyGem’s mouthpiece. A brand new mouthpiece is switched out for every test. No going underwater or wearing funny head gear – just breathe into the machine and in 10 minutes or less you will know your results.</p>
				<p>This test is best when used in combination with another nutrition service. This way your individual plan is even more tailored to your uniqueness.</p>

				<div class="get-started__price phone-only">
					<h3 data-ng-cloak data-ng-bind-html="vm.name"></h3>
					<h2 data-ng-if="vm.price != null" data-ng-cloak>{! vm.price !}</h2>
					<h4 data-ng-if="vm.price == null" data-ng-cloak>Please Contact Us for Pricing</h4>
				</div>
				
				<div class="get-started__contact">
					@include('getstarted.partials.get-started-form')
				</div>

			
			</div>	
		</div>
	</div>

	
</article>
@endsection


@section('extra-scripts')
 	
@endsection