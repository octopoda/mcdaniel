<?php
$header = [
	"title" => "Kayli Dice, Registered Dietitian – St Louis",
	"description" => "Kayli Dice is a plant-based chef, dietitian, and writer who helps clients find the personal combination of exercise and nutrition that will get them to their goals.",
	"Keywords" => "Kayli Dice, registered dietitian, plant-based nutrition, nutritionist, nutrition, St. Louis, ",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))


@section('content')
	<div class="sitewide__page-header">
		<div class="sitewide__page-header--text container">
			<h1>Kayli Dice, MS, RDN, HFS</h1>
		</div>
	</div>

	<div class="team__text">
		<div class="container sitewide__page--text">
			<section>
				<p>Kayli Dice is a plant-based chef, dietitian and writer. With her Master’s of Nutrition & Physical Performance degree from Saint Louis University and holistic culinary experience, Kayli helps clients find synergy between exercise and nutrition that launches them toward their goals. She liberates her clients from their battle with food and coaches them to develop a positive, supportive relationship with their health.</p>
				<p>Kayli specializes in plant-based and vegetarian nutrition, disordered eating, sports nutrition, and weight loss. As the founder of True Food Co., a plant-based personal chef company, she continually creates accessible, healthy recipes and techniques to simplify plant-based cooking. Kayli enjoys sharing recipe inspiration with you through MNT’s social media channels and blog posts.</p>
				<p>When she’s not empowering her clients with practical cooking skills and nutrition coaching, Kayli practices yoga, explores St. Louis microbreweries and restaurants with her husband, and develops mouth-watering plant-based recipes for her blog The Plant-Eater’s Manifesto. </p>
			</section>
		</div>
	</div>

	<div class="team__connect">	
		<div class="container">
			<div class="row">
				<h4>Connect with Kaylie</h4>
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
			<h3 class="underlined">Contact Kaylie</h3>
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