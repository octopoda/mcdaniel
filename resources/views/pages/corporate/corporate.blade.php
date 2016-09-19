<?php
$header = [
	"title" => "Corporate Wellness - McDaniel Nutrition Therapy, St Louis",
	"description" => "Build a healthier, happier workplace through our corporate wellness solutions. Help your employees make lasting nutritional changes and be more effective.",
	"Keywords" => "corporate wellness, company wellness, company health, employee health, nutrition, St Louis",
	];

?>


@extends('layouts.frontend.page', compact('header'))




{{-- Content --}}
@section('content')
	
		<div class="corporate__hero  hero">
			<section class="row">
				<h1>Sustain Healthy<br> Employees</h1>
				<h4>and a Supportive Corporate Culture</h4>
			</section>
		</div>
	

		<div data-scroll-spy>
		<nav class="m-sub-navigation corporate-subnav" id="subnav">
			<ul>
				<li><a data-smooth-scroll spy="sustain" >Sustain</a></li>
				<li><a data-smooth-scroll spy="lunch" >Lunch &amp; Learn</a></li>
				<li><a data-smooth-scroll spy="taste" >Taste &amp; Teach</a></li>
				<li><a data-smooth-scroll spy="webinars">Webinars</a></li>
			</ul>
		</nav>


		<div class="corporate-sustain  hero" id="sustain">
			<section class="row">
				<h1>Sustain:</h1>
				<h4>A Weight Loss Program for Life</h4>
			</section>
		</div>

		
		<div class="corporate-sustain__text green-gradient">
			<div class="row g-two-columns">
				<section>
					<p class="large">You know what a difference good health can make to your personal life. Now find out what a difference it can make to your company.</p>
					<p class="large">Our team can help you design, develop, and implement a corporate wellness program that empowers your workforce. By helping your employees realize personal change, you’ll be setting them up to be more effective professionals and happier through their days in the office.</p>


					<blockquote class="testimonial">
						<p>
							&ldquo;The SUSTAIN class and Jennifer helped me be successful for the FIRST time in my life in losing weight! I love that the philosophy is not a diet, but a sustainable life change. I really thought it would be harder! I learned so much!”&rdquo;
							<span class="author"> &mdash; Solae</span> 
						</p>
					</blockquote>
				</section>
				<section>
					<p>The Sustain Weight Loss program can be conducted on-site or in online version of the program. Your nutrition expert will lead a 12-week journey for those looking to lose weight, improve their nutrition, or build healthy eating habits. The SUSTAIN program teaches fundamental habits for maintaining a good diet, losing weight for good, and creating personal change.</p>
					<ul>
						<li>SUSTAIN weight loss topic of the week (example topics include: mindful eating, characteristics of people who lose weight and keep it off, examining the right “plan” for you)</li>
						<li>Examination of current habits related to the topic of the week</li>
						<li>Personalized analysis and feedback of online food journal</li>
						<li>Weekly weigh-ins &amp; body fat measurements (optional)</li>
					</ul>
				</section>
			</div>
			<div class="row  text-center corporate-sustain__text--cta ">
				<h3>Bring the Sustain Program to Your Company</h3>
				<div class="button">
					<a href="{{ route('get-started-corporate') }}" data-services-button data-service="CSP" data-category="sustain">Help your Company reach its health goals</a>
				</div>
			</div>
		</div>
		



	
		<div class="corporate-lunch  hero" id="lunch">
			<section class="row">
				<h1>Lunch &amp; Learn</h1>
			</section>
		</div>

		<div class="corporate-lunch__text green-gradient">
			<div class="row g-two-columns">
				<section>
					<p class="large">Seminars rally participants to take action and lead healthier lives. Presentations often include hands-on activities and on-site demos, and are always rich in evidence-based nutritional science information presented in a fun and engaging way. </p>
				</section>
				<section>
					<h3>Popular Topics</h3>
					<p>
						<span class="topic-title">Mindful Eating:</span>
						Understand how the environment influences your food choices. Empower yourself with mindful eating strategies. And understand how to achieve health goals without stress.</p>
					<p>
						<span class="topic-title">Making the Most of Your Metabolism:</span>
						Are there strategies you can control to rev up or slow down your metabolism? Learn the facts and become an expert on your own human furnace.</p>
					<p>
						<span class="topic-title">Eating Real Food on the Fly: Our lives are busy.</span>
						Learn simple, easy ways to incorporate whole, natural foods into everyday meals that everyone will love.</p>
				</section>
			</div>
			<div class="row  text-center">
				<div class="button">
					<a href="{{ route('get-started-corporate') }}" data-services-button data-service="LNL" data-category="corporate" >Set up Your Next Lunch &amp; Learn</a>
				</div>
			</div>
		</div>
		

		



		<div class="corporate-taste  hero" id="taste">
			<section class="row">
				<h1>Taste &amp; Teach</h1>
			</section>
		</div>

		<div class="corporate-taste__text green-gradient">
			<div class="row g-two-columns">
				<section>
					<p class="large">Teach &amp; Taste sessions show how easy it can be to create delicious food that can fuel your body’s needs. Demonstrations involve the audience and highlight mouth-watering, practical recipes that use easy to find ingredients.
</p>
				</section>
				<section>
					<h3>Popular Topics</h3>
					<p>
						<span class="topic-title">Secret Strategies of a Smart Snacker:</span>
						Do your snack habits support or sabotage your health? In this Teach &amp; Taste, learn how to plan &amp; prepare fresh and nutritious snacks while understanding how to snack smartly to support your health goals. </p>
					<p>
						<span class="topic-title">Time Saving Strategies for Meal Planning:</span> 
						The main barrier to meal planning is TIME! In this Teach &amp; Taste, you will learn time-saving strategies for putting healthy meals on the table – PLUS fresh menu and recipe ideas that the whole family will devour! </p>
				</section>
			</div>
			<div class="row  text-center">
				<div class="button">
					<a href="{{ route('get-started-corporate') }}" data-services-button data-service="TNT" data-category="corporate" >Set up Your Next Taste &amp; Teach</a>
				</div>
			</div>
		</div>
		


			
		
		
	<div class="corporate__webinars" id="webinars">
		<div class="g-half">
			
			<section class="corporate__webinars--text">
				<h3>Webinars:</h3>
				<p>McDaniel Nutrition offers Lunch and Learn seminars in a webinar format making it convenient for your employees to better their health on their own time. Choose from over 30 nutrition seminars or let us tailor the education to the individual interests of your employees. </p>
				<div class="button">
					<a href="{{ route('get-started-corporate') }}" data-services-button data-service="CW" data-category="corporate" >Set up Your Next Webinar</a>
				</div>
			</section>
			<section class="tablet-up ">
				
			</section>
		</div>
		<div class="corporate__webinars--image tablet-up"></div>
	</div>

	</div>
		
	@include('layouts.frontend.partials.about')

	


	
@endsection


@section('extra-scripts')
 	
@endsection