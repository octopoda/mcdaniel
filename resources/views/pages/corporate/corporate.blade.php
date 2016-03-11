<?php
$header = [
	"title" => "Corporate Wellness - McDaniel Nutrition Therapy, St Louis",
	"description" => "Build a healthier, happier workplace through our corporate wellness solutions. Help your employees make lasting nutritional changes and be more effective.",
	"Keywords" => "corporate wellness, company wellness, company health, employee health, nutrition, St Louis",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))


@section('subnav')
	<nav class="subnav" id="subnav">
		<ul class="table-of-contents">
			<li><a href="#sustain">Sustain</a></li>
			<li><a href="#virtual">Virtual Sustain</a></li>
			<li><a href="#lunch">Lunch &amp; Learn</a></li>
			<li><a href="#taste">Taste &amp; Teach</a></li>
			<li><a href="#webinar">Webinars</a></li>
		</ul>
	</nav>
@endsection

@section('content')
	<div class="coporate">
		<div class="coporate__header">
			<section class="corporate__header--text container">
				<h1>A Healthy Foundation To Grow From</h1>
				<p>You know what a difference good health can make to your personal life. Now find out what a difference it can make to your company. </p>
			</section>
		</div>

		<div id="sustain" class="corporate__sustain scrollspy">
			<div class="container">
				<section>
					<h2>
						Sustain:<br>
						<small> A Weight Loss Program For Life</small>
					</h2>

					<p>A 16-week journey for anyone looking to lose weight, improve their nutrition, or build healthy eating habits. SUSTAIN teaches fundamental habits for maintaining a good diet, losing weight for good, and creating personal change</p>

					<ul>
						<li>SUSTAIN weight loss topic of the week (example topics include: mindful eating, characteristics of people who lose weight and keep it off, examining the right “plan” for you) </li>
						<li>Examination of current habits related to the topic of the week </li>
						<li>Personalized analysis and feedback of online food journal   </li>
						<li>Weekly weigh-ins & body fat measurements (optional)</li>

					</ul>

					
					<blockquote class="testimonial">
						<p>“The SUSTAIN class and Jennifer helped me be successful for the FIRST time in my life in losing weight! I love that the philosophy is not a diet, but a sustainable life change.  I really thought it would be harder! I learned so much!”</p>
						<p class="author">Solae</p> 
					</blockquote>


					<blockquote class="testimonial">
						<p>“Jennifer was an amazing teacher. She was always positive and encouraged us to be the same.  She truly seemed to care about each one of us. It was a real pleasure to be in her class.”</p>
						<p class="author">Dupont</p> 
					</blockquote>
					
				</section>
			</div>
		</div>


		<div id="virtual" class="corporate__sustain scrollspy">
			<div class="container">
				<section>
					<h2>
						Virtual Sustain:<br>
						<small> Weight Loss Program For Life, online</small>
					</h2>

					<p>A 16-week journey for anyone looking to lose weight, improve their nutrition, or build healthy eating habits. SUSTAIN teaches fundamental habits for maintaining a good diet, losing weight for good, and creating personal change</p>

					<ul>
						<li>SUSTAIN weight loss topic of the week (example topics include: mindful eating, characteristics of people who lose weight and keep it off, examining the right “plan” for you) </li>
						<li>Examination of current habits related to the topic of the week </li>
						<li>Personalized analysis and feedback of online food journal   </li>
						<li>Weekly weigh-ins & body fat measurements (optional)</li>

					</ul>
				</section>
			</div>
		</div>
	

		<div id="lunch" class="corporate__lunch scrollspy">
			<div class="container">
				<div class="row">
					<section class="s12 m6 cols">
						<h2>
							Lunch &amp; Learn
							<small>Make Lunch More Than A Meal </small>
						</h2>

						<p>Lunch & Learn seminars rally participants to take action and lead healthier lives. Presentations often include hands-on activities and on-site demos, and are always rich in evidence-based nutritional science information.</p>
					</section>
					<section class="s12 m6 cols">
						<h3>Topics</h3>
						<ul>
							<li><strong>Mindful Eating:</strong> Understand how the environment influences your food choices. Empower yourself with mindful eating strategies. And understand how to achieve health goals without stress.</li>
							<li><strong>Making the Most of Your Metabolism:</strong> Are there things you can do to rev up or slow down your metabolism? Learn the facts and become an expert on your own human furnace.</li>
							<li><strong>Eating Real Food on the Fly:</strong> Our lives are busy. Learn simple, easy ways to incorporate whole, natural foods into everyday meals that everyone will love.</li>
						</ul>
					</section>
				</div>
			</div>
		</div>



		<div id="taste" class="corporate__taste scrollspy">
			<div class="container">
				<div class="row">
					<section>
						<h2>Taste &amp; Teach</h2>
						<p>Teach &amp; Taste sessions show how easy it can be to create delicious food that can fuel your body’s needs. Demonstrations involve the audience and highlight mouth-watering, practical recipes that use easy to find ingredients.</p>
					</section>
				</div>
			</div>
		</div>


		<div id="webinar" class="corporate__taste scrollspy">
			<div class="container">
				<div class="row">
					<section>
						<h2>Webinars</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique exercitationem quae repellendus ratione officiis! Vitae nostrum, aut harum expedita unde. Unde ea ullam magnam repellat magni nemo accusantium, minus temporibus.</p>
						<p>Explicabo, voluptatem vel voluptate officia maxime, aliquam magni praesentium quaerat consequatur eius sed id ipsa eligendi incidunt labore nesciunt! Dolorem similique ullam consequuntur dolore nemo recusandae sunt quidem molestias maxime.</p>
						<p>Necessitatibus sequi quis voluptatum illo similique veritatis quo quos, facere quae, qui quibusdam tenetur doloremque nesciunt explicabo. Iste, optio aperiam veniam ad error id ducimus, corrupti soluta. Laudantium, mollitia, ab.</p>
						<p>Tempore, tempora cumque eos. Dolore sit aperiam facilis modi blanditiis fugiat corrupti. Quasi eligendi harum quo, tempora vero pariatur aliquam. Perferendis delectus quam culpa quidem autem, dicta, esse consequatur magni!</p>
					</section>
				</div>
			</div>
		</div>


	</div>

@endsection


@section('extra-scripts')
 	
@endsection