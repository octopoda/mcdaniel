
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
	<div class="rmr__hero hero">
		<section class="row">
			<h1>Take The Guesswork<br> Out Of Planning</h1>
		</section>
	</div>


	<div class="get-started">
		<div class="row">
			<div class="get-started__price tablet-up">
				<h3>Individualized Consultation</h3>
				<h2 data-ng-if="vm.price != null" data-ng-cloak>{! vm.price !}</h2>
				<h4 data-ng-if="vm.price == null" data-ng-cloak>Please Contact Us For a Price</h4>
			</div>

			<div class="get-started__content">
				<h2>Know Your Body</h2>
				<p>Using BodyGem equipment, we can easily and precisely test your resting metabolic rate through only your breathing. This test allows us to further personalize your nutritional planning and finally confirm just how high or low your metabolism might be.  </p>

				<div class="get-started__price phone-only">
					<h3>Individualized Consultation</h3>
					<h2 data-ng-if="vm.price != null" data-ng-cloak>{! vm.price !}</h2>
					<h4 data-ng-if="vm.price == null" data-ng-cloak>Please Contact Us For a Price</h4>
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