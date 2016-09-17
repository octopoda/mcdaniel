
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
	<div class="weight-loss_hero hero">
		<section class="row">
			<h1>Sustain Your <br>Healthy Weight <br>For Good</h1>
		</section>
	</div>

	<div class="get-started" id="getStarted">
		<div class="row">
			<div class="get-started__price tablet-up" >
				<div data-fixed-asset data-wrapper="getStarted">
					<h3 data-ng-cloak data-ng-bind-html="vm.name"></h3>
					<h4 data-ng-cloak data-ng-bind-html="vm.description"></h4>
					<h2 data-ng-if="vm.price != null" data-ng-cloak>{! vm.price !}</h2>
					<h4 data-ng-if="vm.price == null" data-ng-cloak>Please Contact Us for Pricing</h4>
				</div>
			</div>

			<div class="get-started__content" data-ng-switch="vm.service.code">
				
				<h2>We Support Change</h2>
				<div data-ng-switch-when="WLSP">
					<p>Thank you for your interest in the Start Up Package. Please complete this sign-up form and the Client Contract and Nutrition Assessment Form. Feel free to email paperwork ahead of time or bring in to your initial consultation. </p>
				</div>
				<div data-ng-switch-when="WLPP">
					<p>Thank you for your interest in the Premium Package. Please complete this sign-up form and the Client Contract and Nutrition Assessment Form. Feel free to email paperwork ahead of time or bring in to your initial consultation. </p>
				</div>
				<div data-ng-switch-when="WLOM">
					<p>Thank you for your interest in the Online Monitoring Package. Please complete this sign-up form and the Client Contract and Nutrition Assessment Form. Feel free to email paperwork ahead of time or bring in to your initial consultation. </p>
				</div>
				<div data-ng-switch-default>
					<p>Thank you for your interest in our weight loss services. Please select a service below and complete this sign-up form and the Client Contract and Nutrition Assessment Form. Feel free to email paperwork ahead of time or bring in to your initial consultation. </p>
				</div>


				
				<div class="get-started__price phone-only">
					<h3 data-ng-cloak data-ng-bind-html="vm.name"></h3>
					<h4 data-ng-cloak data-ng-bind-html="vm.description"></h4>
					<h2 data-ng-if="vm.price != null" data-ng-cloak>{! vm.price !}</h2>
					<h4 data-ng-if="vm.price == null" data-ng-cloak>Please Contact Us for Pricing</h4>
				</div>

				<div class="get-started__contact">
					@include('getstarted.partials.get-started-form')
				</div>

				<div class="get-started__articles">
					<h3>Recent Articles For Weight Loss</h3>
					<ul>
						@foreach($posts as $post)
						<li>
							<h4><a href="/posts/{{ $post->direct_link }}">{{ $post->title }}</a></h4>
							{!! $post->summary !!}
							<div class="button">
								<a href="/posts/{{ $post->direct_link }}">Read More</a>
							</div>
						</li>
						@endforeach
					</ul>
				</div>

				<div class="get-started__faqs">
				</div>
			</div>	
		</div>	
	</div>
</article>
@endsection


@section('extra-scripts')
 	
@endsection