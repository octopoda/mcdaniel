
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

<article>

	<div class="home__hero hero">
		<section class="row">
			<h1>Thanks for<br> your interest</h1>
		</section>
	</div>
	
	<div class="get-started">
		<div class="row">
			<div class="get-started__index">
				<p>
					I need content
				</p>

				<ul>
					<li>Form Download 1</li>
					<li>Form Download 2</li>
					<li>Form Download 3</li>
					<li>Form Download 4</li>
				</ul>

				<p>
					More Content
				</p>

			</div>	
		</div>
	</div>

	<div data-blog-preview></div>
</article>
	
@endsection


@section('extra-scripts')
 	
@endsection