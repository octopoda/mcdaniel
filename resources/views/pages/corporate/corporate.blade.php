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
				<h4>and a Supportive Coporate Culture</h4>
			</section>
		</div>

		<nav class="m-sub-navigation corporate-subnav" id="subnav">
			<ul>
				<li><a href="#sustain">Sustain</a></li>
				<li><a href="#lunch">Lunch &amp; Learn</a></li>
				<li><a href="#taste">Taste & Teach</a></li>
				<li><a href="#webinar">Webinars</a></li>
			</ul>
		</nav>


		<div class="corporate-sustain  hero">
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
							&ldquo;The SUSTAIN class and Jennifer helped me be successful for the FIRST time in my life in losing weight! I love that the philosophy is not a diet, but a sustainable life change.  I really thought it would be harder! I learned so much!&rdquo;
							<span class="author"> &mdash; Solae</span> 
						</p>
					</blockquote>
				</section>
				<section>
					<p>Your nutrition expert will come to your office or meet in an online version of the program and lead a 16-week journey for anyone looking to lose weight, improve their nutrition, or build healthy eating habits. SUSTAIN teaches fundamental habits for maintaining a good diet, losing weight for good, and creating personal change</p>
					<ul>
						<li>SUSTAIN weight loss topic of the week (example topics include: mindful eating, characteristics of people who lose weight and keep it off, examining the right &ldquo;plan&rdquo; for you) </li>
						<li>Examination of current habits related to the topic of the week </li>
						<li>Personalized analysis and feedback of online food journal   </li>
						<li>Weekly weigh-ins & body fat measurements (optional)</li>
					</ul>
				</section>
			</div>
			<div class="row  text-center corporate-sustain__text--cta ">
				<h3>Bring the Sustain Program to Your Company</h3>
				<div class="button">
					<a href="{{ route('get-started-corporate') }}" data-services-button data-service="sustain-corporate" >Help your Company reach its health goals</a>
				</div>
			</div>
		</div>
		



	
		<div class="corporate-lunch  hero">
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
					<p><strong>Mindful Eating:</strong> Understand how the environment influences your food choices. Empower yourself with mindful eating strategies. And understand how to achieve health goals without stress.</p>
					<p><strong>Making the Most of Your Metabolism: </strong>Are there strategies you can control to rev up or slow down your metabolism? Learn the facts and become an expert on your own human furnace.</p>
					<p><strong>Eating Real Food on the Fly: Our lives are busy.</strong> Learn simple, easy ways to incorporate whole, natural foods into everyday meals that everyone will love.</p>
				</section>
			</div>
			<div class="row  text-center">
				<h3>Setup Your Next Lunch &amp; Learn</h3>
				<div class="button">
					<a href="{{ route('get-started-corporate') }}" data-services-button data-service="lunch-and-learn" >Start Learning Today</a>
				</div>
			</div>
		</div>
		

		



		<div class="corporate-taste  hero">
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
					<p><strong>Secret Strategies of a Smart Snacker:</strong> Do your snack habits support or sabotage your health? In this Teach &amp; Taste, learn how to plan &amp; prepare fresh and nutritious snacks while understanding how to snack smartly to support your health goals. </p>
					<p><strong>Time Saving Strategies for Meal Planning:</strong> The main barrier to meal planning is TIME! In this Teach &amp; Taste, you will learn time-saving strategies for putting healthy meals on the table – PLUS fresh menu and recipe ideas that the whole family will devour! </p>
				</section>
			</div>
			<div class="row  text-center">
				<h3>Setup Your Next Taste &amp; Teach</h3>
				<div class="button">
					<a href="{{ route('get-started-corporate') }}" data-services-button data-service="teach-and-taste" >Enroll Today</a>
				</div>
			</div>
		</div>
		


			
		
		
	<div class="corporate__webinars">
		<div class="g-half">
			
			<section class="corporate__webinars--text">
				<h3>Webinars:</h3>
				<p>McDaniel Nutrition offers Lunch and Learn seminars in webinar format making it convenient for your employees to better their health on their own time. Choose from over 30 nutrition topics or let us tailor the education to the individual interests of your employees. </p>
				<div class="button">
					<a href="{{ route('get-started-corporate') }}" data-services-button data-service="webinars" >Setup Your Next Webinar</a>
				</div>
			</section>
			<section class="tablet-up ">
				
			</section>
		</div>
		<div class="corporate__webinars--image tablet-up"></div>
	</div>


		
	@include('layouts.frontend.partials.about')

	


	
@endsection


@section('extra-scripts')
 	
@endsection