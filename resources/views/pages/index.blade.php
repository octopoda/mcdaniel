@extends('layouts.frontend.page')

@section('content')
	<div class="home">
		<div class="home__hero hero">
			<!-- <div class="hero-overylay"></div> -->
			
			<div class="row">
				<h1>Join Us To Sustain <br>A Healthier Life</h1>
				<p class="large">We’re  your nutrition experts committed to help you SUSTAIN the healthiest version of you or your company.  We specialize in weight loss, sports nutrition, maternal nutrition and corporate wellness. </p>
			</div>
		</div>
		
	

		<!-- Corporate Wellness -->
		<div class="home__corporate">
			<!-- Phone -->
			<div class="phone-only">
				<div class="home__corporate__phone--hero">
					<div class="m-square-left-small"></div>
					<h2>Corporate<br> Wellness</h2>
				</div>
				<div class="home__corporate__phone--text green-gradient">
					<section class="row">
						<p>McDaniel Nutrition can help your employees sustain a healthier life through our programs services such as our: signature weight loss program “SUSTAIN,” interactive Lunch & Learn seminars, Teach & Taste cooking demonstrations, and virtual learning webinars. </p>
						
						<div class="button">
							<a href="{{ route('corporate') }}">Get Your Team Healthy</a>
						</div>
					</section>
				</div>
			</div>

			<!-- Rest -->
			<div class="home__sales-text tablet-up">
				
				<div class="m-square-left__wrapper row">
					<div class="m-square-left"></div>
					<section class="m-square-left__text">
						<h2>Corporate<br> Wellness</h2>
						<p>McDaniel Nutrition can help your employees sustain a healthier life through our programs services such as our: signature weight loss program “SUSTAIN,” interactive Lunch & Learn seminars, Teach & Taste cooking demonstrations, and virtual learning webinars. </p>
						<div class="button">
							<a href="#">Get Your Team Healthy</a>
						</div>
					</section>
				</div>	
			</div>
		</div>


		<!-- Weight Loss -->
		<div class="home__weight">
			<!-- phone -->
			<div class="phone-only">
				<div class="home__weight__phone--hero row">
					<div class="m-square-left-small"></div>
					<h2>Weight<br> Loss</h2>
				</div>
				<div class="home__weight__phone--text green-gradient">
					<section class="row">
					<p>McDaniel Nutrition doesn’t just want to help you lose weight, we want to help you sustain a healthy weight for life.</p>
					<p>Learn more about how you can work one-on-one with us, or get involved in our online weight management program, “Sustain Weight Loss Program”  </p>
					
					<div class="button">
						<a href="{{ route('weight-loss') }}">Get Your Team Healthy</a>
					</div>
					</section>
				</div>
			</div>

			<!-- Tablet -->
			<div class="home__sales-text  tablet-up">
					
				
				<div class="m-square-right__wrapper row">
					<div class="m-square-right"> </div>
					<section class="m-square-right__text">
						<h2>Weight Loss</h2>
						<p>McDaniel Nutrition doesn’t just want to help you lose weight, we want to help you sustain a healthy weight for life.</p>
						<p>Learn more about how you can work one-on-one with us, or get involved in our online weight management program, “Sustain Weight Loss Program”  </p>
						<div class="button">
							<a href="{{ route('weight-loss') }}">Learn Healthy Habits</a>
						</div>
					</section>
				</div>	
			</div>
		</div>
		
	

		<!-- Weight Loss -->
		<div class="home__sports">
			<!-- phone -->
			<div class="phone-only">
				<div class="home__sports__phone--hero">
					<div class="m-square-left-small"></div>
					<h2>Sports<br> Nutrition</h2>
				</div>
				<div class="home__sports__phone--text green-gradient">
					<section class="row">
						<p>Whether you’re a recreational athlete or a professional competitor, you can take your performance further. Our Board Certified Specialist in Sports Dietetics (CSSD) can help you get there. </p>
						<div class="button">
							<a href="{{ route('sports-nutrition') }}">Perform Beyond Your Best</a>
						</div>
					</section>
				</div>
			</div>

			<!-- Tablet -->
			<div class="home__sales-text  tablet-up">
				<div class="m-square-left__wrapper row">
					<div class="m-square-left"></div>
					<section class="m-square-left__text">
						<h2>Sports <br>Nutrition</h2>
						<p>Whether you’re a recreational athlete or a professional competitor, you can take your performance further. Our Board Certified Specialist in Sports Dietetics (CSSD) can help you get there. </p>
						<div class="button">
							<a href="{{ route('sports-nutrition') }}">Perform Beyond Your Best</a>
						</div>
					</section>
				</div>	
				
			</div>
		</div>
	</div> <!-- End Home -->

		
	<div data-blog-preview></div>
		


@endsection