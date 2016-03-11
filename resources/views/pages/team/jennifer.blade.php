<?php
$header = [
	"title" => "Jennifer McDaniel, Registered Dietitian – St Louis",
	"description" => "Jennifer McDaniel is a registered dietitian who believes in a personal approach to nutrition and who has helped thousands of clients find their way to success.",
	"Keywords" => "Jennifer McDaniel, registered dietitian, nutrition, nutritionist, certification in sports nutrition, St. Louis",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))


@section('content')
	<div class="sitewide__page-header">
		<div class="sitewide__page-header--text container">
			<h1>Jennifer McDaniel MS, RDN, CSSD, LD</h1>
		</div>
	</div>

	<div class="team__text">
		<div class="container sitewide__page--text">
			<section>
				<p>As a teen I loved to cook with friends and experiment in the kitchen. I would collect my favorite recipes from books and magazines and create my own cookbooks.  Today, when I cook for my family, no recipe is ever quite the same.  I love to be creative with my cooking and avoid waste by incorporating leftover ingredients such last night’s spinach into an omelet or pre-cooked pasta into a soup. Good thing my family is adventurous in their eating!</p>
				<p>I knew in high school that I wanted to be a dietitian. I loved the science of food, cooking and people. Studying the human body and how food could be nourishment or a detriment to health and performance was a natural passion of mine.  </p>
				<p>I am drawn to understanding the complexity of the individual. What motivates them to change? How did their upbringing influence their view of health? How does their family or work life influence their choices? All of these factors are part of the mix in making decisions about food.  Eating is far more than just food. </p>
				<p>Over my career I have helped thousands of clients overcome their own Goliaths that have stood in their way of success – shaving seconds off their athletic performance for a new personal best; peace at the dinner table serving nourishing food for the entire family; or losing forever the 30 pounds they have battled to keep off for over a decade.</p>
				<p>I have always been on the cutting edge of sports nutrition. I was one of the first in Missouri to obtain a board certification in sports nutrition (CSSD).  Also, through my consultation work for Carmichael Training Systems I have been involved in the sports nutrition training of World Championship and Olympic athletes. An athlete’s world is bombarded with nutrition information, supplements and other performance aids. It is easy to get lost in it all.</p>
				<p>My promise to each client I work with is to provide them with evidence-based, credible, up-to-date nutrition advice with a personalized and genuine approach.  My rigorous training to become a Registered Dietitian, earning a B.S. in Nutrition & Dietetics, and M.S. in Nutrition and Physical Performance all have been priceless in giving me the solid foundation I need to face the abundance of misinformation in nutrition my clients are faced with daily.</p>
				<p>I would love to break you free from the roadblocks that are holding you back from achieving your goals.  Contact me to schedule an appointment. </p>
			</section>
		</div>
	</div>

	<div class="team__connect">	
		<div class="container">
			<div class="row">
				<h4>Connect with Jennifer</h4>
				<ul>
					<li>Facebook</li>
					<li>Twitter</li>
					<li>Instagram</li>
					<li>Linked In</li>
				</ul>
			</div>
		</div>
	</div>


	<div class="team__contact">
		<div class="container">
			<h3 class="underlined">Contact Jennifer</h3>
			@include('forms.contact-form')
		</div>
	</div>

	

@endsection


@section('extra-scripts')
 		<script type="text/javascript">
		    var feed = new Instafeed({
		        get: 'tagged',
		        tagName: 'awesome',
		        clientId: '0d31d74e63da4ef28a15986302562504'
		    });
		    feed.run();
		</script>
@endsection