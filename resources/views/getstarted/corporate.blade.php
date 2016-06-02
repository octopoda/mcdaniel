<?php
$header = [
	"title" => "Corporate Wellness - McDaniel Nutrition Therapy, St Louis",
	"description" => "Build a healthier, happier workplace through our corporate wellness solutions. Help your employees make lasting nutritional changes and be more effective.",
	"Keywords" => "corporate wellness, company wellness, company health, employee health, nutrition, St Louis",
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')
<article class="gs" data-ng-controller="GetStartedController as vm">
	<div class="corporate__hero  hero">
			<section class="row">
				<h1>Sustain Healthy<br> Employees</h1>
				<h4>and a Supportive Coporate Culture</h4>
			</section>
		</div>


	<div class="get-started">
		<div class="row">
			<div class="get-started__price tablet-up">
				<div data-fixed-asset data-wrapper="getStarted">
					<h3>Corporate Wellness<br> Packages</h3>
					<h2 data-ng-if="vm.price != null" data-ng-cloak>{! vm.price !}</h2>
					<h4 data-ng-if="vm.price == null" data-ng-cloak>Please Contact Us for Pricing</h4>
				</div>
			</div>

			<div class="get-started__content">
				<h2>Build Your Companies Health</h2>
				<p>You know what a difference good health can make to your personal life. Now find out what a difference it can make to your company. </p>
				<p>Our team can help you design, develop, and implement a corporate wellness program that empowers your workforce. By helping your employees realize personal change, you’ll be setting them up to be more effective professionals and happier through their days in the office. </p>


				<div class="get-started__price phone-only">
					<h3>About Our <br>Corporate Wellness<br> Packages</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur temporibus sint necessitatibus, nisi nam vel, distinctio explicabo, suscipit quibusdam dicta officia neque obcaecati, enim! Nisi beatae dolorem nulla, quisquam eaque maxime hic architecto, fuga ullam cumque facere dolores quod deserunt!</p>
				</div>

				<div class="get-started__contact">
					@include('getstarted.partials.get-started-form')
				</div>

				<div class="get-started__articles">
					<h3>Recent Articles For Coporate Wellness</h3>
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