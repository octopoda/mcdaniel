
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
	
	<div class="maternal__hero hero">
		<section class="row">
			<h1>Protect More than<br> Your Health</h1>
		</section>
	</div>

	<div class="get-started " id="getStarted">
		<div class="row">
			<div class="get-started__price tablet-up" >
				<div data-fixed-asset data-wrapper="getStarted">
					<h3>Individualized <br> Consultation</h3>
					<h2 data-ng-if="vm.price != null" data-ng-cloak>{! vm.price !}</h2>
					<h4 data-ng-if="vm.price == null" data-ng-cloak>Please Contact Us For a Price</h4>
				</div>
			</div>

			<div class="get-started__content">
				<h2>Protect Your Child</h2>
				<p>Pregnancy is a precious moment of life. But it can also be daunting. The right diet can improve your chances of conception, nourish your growing baby, and get you back on track post-pregnancy. </p>
				<p>With children of our own, our nutrition experts can give you evidence-based recommendations with real-life understanding.</p>

				<div class="get-started__price phone-only">
						<h3>Individualized Consultation</h3>
						<h2 data-ng-if="vm.price != null" data-ng-cloak>{! vm.price !}</h2>
						<h4 data-ng-if="vm.price == null" data-ng-cloak>Please Contact Us For a Price</h4>
				</div>


				<div class="get-started__contact">
					@include('getstarted.partials.get-started-form')
				</div>

				<div class="get-started__articles">
					<h3>Recent Articles For Maternal Nutrition </h3>
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