
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
	<div class="sports_hero hero">
		<section class="row">
			<h1>Fuel Your New Best</h1>
		</section>
	</div>

	<div class="get-started">
		<div class="row">
			<div class="get-started__price tablet-up">
				<h3 data-ng-cloak data-ng-bind-html="vm.name"></h3>
				<h4 data-ng-cloak data-ng-bind-html="vm.description"></h4>
				<h2 data-ng-if="vm.price != null" data-ng-cloak>{! vm.price !}</h2>
				<h4 data-ng-if="vm.price == null" data-ng-cloak>Please Contact Us for Pricing</h4>
			</div>

			<div class="get-started__content" data-ng-switch="vm.services.code">
				<h2>Perform Beyond Your Best</h2>
				
				<div data-ng-switch-when="SPA">
					<p>The rise to your athletic performance goals and new levels of competition is easier with support. Our adult services are tailored to your period of training, body composition goals, and lifestyle habits. Nutrition consults can also address pre-, during-, and post-nutrition recommendations.</p>
				</div>
				<div data-ng-switch-when="SPY">
					<p>The rise to your athletic performance goals and new levels of competition is easier with support. Our youth services are tailored to your period of training, body composition goals, and lifestyle habits. Nutrition consults can also address pre-, during-, and post-nutrition recommendations.</p>
				</div>
				<div data-ng-switch-default>
					<p>The rise to your athletic performance goals and new levels of competition is easier with support. Our adult services are tailored to your period of training, body composition goals, and lifestyle habits. Nutrition consults can also address pre-, during-, and post-nutrition recommendations.</p>
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
					<h3>Recent Articles For Sports Nutrition</h3>
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
			</div>

		</div>	
	</div>

	
</article>
@endsection


@section('extra-scripts')
 	
@endsection