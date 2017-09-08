
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
			<h1>Congratulations</h1>
		</section>
	</div>
	
	<div class="get-started">
		<div class="row">
			<div class="get-started__index" data-ng-controller="ThanksController as vm">
				
				<div data-ng-switch="vm.service.category">
					
					{{-- Weight Loss Intro --}}
					<div data-ng-switch-when="weight">
						<h2>You’ve made a decision to improve the quality of your life through nutrition therapy.</h2>
						<p> This involves not only addressing what you eat, but also how you think and feel about food and your body. As you may have already read on my website, this is not a one size fits all approach. I will strive understand your needs, preferences, and goals in order to offer realistic and personalized solutions for your nutrition and health concerns. </p>
						<p> Because our habits are deeply ingrained, making changes that will last a life time occurs in stages and often takes time. Please be patient. People often wonder how many times we’ll need to meet. That entirely depends on the purpose of our meeting, your goals, your readiness to change, what support systems you have in place, and many other factors. </p>
						<p>&nbsp;</p>
						<p>Looking forward to meeting with you,</p>
						<p>&nbsp;</p>
						<p>The McDaniel Nutrition Team</p>
					</div>

					
					{{-- Sports Intro --}}
					<div data-ng-switch-when="sports">
						<h2>You’ve made a decision to improve your health and performance through the Sports Fuel Package. </h2>
						<p>This involves not only addressing what you eat but also how you think and feel about food and your body. As you may have already read on our website, this is not a one size fits all approach. We will strive to understand your needs, preferences, and goals in order to offer realistic and personalized solutions for your nutrition and health concerns.</p>
						<p>Because our habits are deeply ingrained, making changes that will last a lifetime occurs in stages and often takes time. Our goal is to help you create a toolbox of healthy habits that help you achieve the healthiest version of you. </p>
						<p>&nbsp;</p>
						<p>Looking forward to meeting with you,</p>
						<p>&nbsp;</p>
						<p>The McDaniel Nutrition Team</p>
					</div>


					{{-- Maternal Intro --}}
					<div data-ng-switch-when="maternal">
						<h2>You’ve made a decision to improve the quality of you and your family’s life. </h2>
						<p>This involves not only addressing what you eat but also how you think and feel about food and your body. As you may have already read on our website, this is not a one size fits all approach. We will strive to understand your needs, preferences, and goals in order to offer realistic and personalized solutions for your nutrition and health concerns.</p>
						<p>&nbsp;</p>
						<p>Looking forward to meeting with you,</p>
						<p>&nbsp;</p>
						<p>The McDaniel Nutrition Team</p>
					</div>


					{{-- Disordered Eating Intro --}}
					<div data-ng-switch-when="disorder">
						<p>You’ve made a decision to improve the quality of your life through nutrition therapy.</p>
						<p>This involves not only addressing what you eat, but also how you think and feel about food and your body. As you may have already read on my website, this is not a one size fits all approach. We will strive understand your needs, preferences, and goals in order to offer realistic and personalized solutions for your nutrition and health concerns. </p>
						<p>Because our habits are deeply ingrained, making changes that will last a life time occurs in stages and often takes time. Please be patient. People often wonder how many times we’ll need to meet. That entirely depends on the purpose of our meeting, your goals, your readiness to change, what support systems you have in place, and many other factors. </p>


						<p>Looking forward to meeting with you,</p>
						<p>&nbsp;</p>
						<p>The McDaniel Nutrition Team</p>
					</div>

					
					{{-- Corporate Into --}}
					<div data-ng-switch-when="corporate">
						<h2>Clearly, you are a progressive company.</h2>
						<p>You are a company that cares about the health of your employees and therefore the health of your company.  A company vested in their employees will always tower over its competitors.</p>
						<p>McDaniel Nutrition’s corporate services can be tailored to your company’s size, employee health needs, and company direction. Whether you need a one-time nutrition presentation or are interested in our 16-week weight loss program, McDaniel Nutrition will tailor our nutrition services to your company's needs and take care of all of the implementation. </p>
						<p>We will contact you to gather more information to help formulate your company’s nutrition plan</p>
						<p>&nbsp;</p>
						<p>Thank You,</p>
						<p>&nbsp;</p>
						<p>The McDaniel Nutrition Team </p>
					</div>

					{{-- Corporate Into --}}
					<div data-ng-switch-when="sustain">
						<h2>Clearly, you are a progressive company.</h2>
						<p>You are a company that cares about the health of your employees and therefore the health of your company.  A company vested in their employees will always tower over its competitors.</p>
						<p>McDaniel Nutrition’s corporate services can be tailored to your company’s size, employee health needs, and company direction. Whether you need a one-time nutrition presentation or are interested in our 16-week weight loss program, McDaniel Nutrition will tailor our nutrition services to your company's needs and take care of all of the implementation. </p>
						<p>We will contact you to gather more information to help formulate your company’s nutrition plan</p>
						<p>&nbsp;</p>
						<p>Thank You,</p>
						<p>&nbsp;</p>
						<p>The McDaniel Nutrition Team </p>
					</div>

					{{-- RMR & Others --}}
					<div data-ng-switch-default>
						<h2>You’ve made a decision to improve the quality of your life through nutrition therapy.</h2>
						<p> This involves not only addressing what you eat, but also how you think and feel about food and your body. As you may have already read on my website, this is not a one size fits all approach. I will strive understand your needs, preferences, and goals in order to offer realistic and personalized solutions for your nutrition and health concerns. </p>
						<p>&nbsp;</p>
						<p>Looking forward to meeting with you,</p>
						<p>&nbsp;</p>
						<p>The McDaniel Nutrition Team</p>
					</div>
				</div>
				
				

			</div>	
		</div>
	</div>

	<div data-blog-preview></div>
</article>
	
@endsection


@section('extra-scripts')
 	
@endsection