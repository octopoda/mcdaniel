<?php
$header = [
	"title" => "Registered Dietitians - McDaniel Nutrition Therapy, St Louis",
	"description" => "We are dedicated to your possibilities. Our team has trained Olympic athletes and helped thousand overcome their weight loss struggles. Use our expertise to help make your change.",
	"Keywords" => "nutrition, dieting, diets, nutrition saint louis, dietitian, sports dietitian, sports nutrition, food, cooking, nutrition consulting, weight loss dietitian saint louis, weight loss dietitian ",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))


@section('content')
		<!-- Header -->
	<div class="about__hero hero">
		<section class="row">
			<h1>Put Our Expertise<br> Behind Your<br> Change</h1>
		</section>
	</div>

	<!-- Sports Text -->
	<div class="about__text">
		<div class="row">
			<section>
				<p class="large">We believe you can go further, make change last, and unlock potential that you haven’t dared to believe you possess. But sometimes it takes help from someone who has been there before and is willing to walk alongside you.    </p>
				<p class="large">Our team of registered dietitians trade hype for science-backed wisdom and personal experience. We exchange perfection-seeking plans for simple, human insights. And most importantly, we put your personal growth ahead of any system or standard.  </p>
			</section>
		</div>
	</div>

	<div class="about__jennifer-family">
	</div>


	<div class="about__jen-bio">
		<div class="row ">
			<section class="about__jen-bio--header">
				<h2>Jennifer McDaniel <small>MS, RDN, CSSD, LD</small></h2>
				<h5>Owner</h5>
			</section>
			<ul class="about__jen-bio--header-social">
				<li><a target="_blank" href="https://www.instagram.com/mcdanielrdn/"><i class="fa fa-instagram"></i></a></li>
				<li><a target="_blank" href="https://www.facebook.com/mcdanielnutrition/"><i class="fa fa-facebook"></i></a></li>
				<li><a target="_blank" href="https://twitter.com/mcdanielrdn"><i class="fa fa-twitter"></i></a></li>
			</ul>
		</div>

		<div class="row about__jen-bio--bio">
			<section>
				<p>As a teen I loved to cook with friends and experiment in the kitchen. I would collect my favorite recipes from books and magazines and create my own cookbooks.  Today, when I cook for my family, no recipe is ever quite the same.  I love to be creative with my cooking and avoid waste by incorporating leftover ingredients such last night’s spinach into an omelet or pre-cooked pasta into a soup. Good thing my family is adventurous in their eating!</p>
				<p>I knew in high school that I wanted to be a dietitian. I loved the science of food, cooking and people. Studying the human body and how food could be nourishment or a detriment to health and performance was a natural passion of mine.  </p>
				<p>I am drawn to understanding the complexity of the individual. What motivates them to change? How did their upbringing influence their view of health? How does their family or work life influence their choices? All of these factors are part of the mix in making decisions about food.  Eating is far more than just food. </p>
				<p>Over my career I have helped thousands of clients overcome their own Goliaths that have stood in their way of success – shaving seconds off their athletic performance for a new personal best; peace at the dinner table serving nourishing food for the entire family; or losing forever the 30 pounds they have battled to keep off for over a decade.</p>
				<p>I have always been on the cutting edge of sports nutrition.  I was one of the first in Missouri to obtain a board certification in sports nutrition (CSSD).  Also, through my consultation work for Carmichael Training Systems I have been involved in the sports nutrition training of  World Championship and Olympic athletes.. An athlete’s world is bombarded with nutrition information, supplements and other performance aids.  It is easy to get lost in it all.</p>
				<p>My promise to each client I work with is to provide them with evidence-based, credible, up-to-date nutrition advice with a personalized and genuine approach.  My rigorous training to become a Registered Dietitian, earning a B.S. in Nutrition &amp; Dietetics, and M.S. in Nutrition and Physical Performance all have been priceless in giving me the solid foundation I need to face the abundance of misinformation in nutrition my clients are faced with daily.</p>
				<p>I would love to break you free from the roadblocks that are holding you back from achieving your goals.  Contact me to schedule an appointment. </p>
			</section>
		</div>

		<div class="row about__awards">
			<h4>Awards</h4>
			<ul>
				<li><img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/images/pages/about/slm0714.jpg" alt="A-List Award"></li>
				<li><img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/images/pages/about/year-award.png" alt="2015 Missiouri Dietitian of the Year"></li>
			</ul>
		</div>
	</div>
	{{-- Our Team Sectoin --}}
	<div class="row l-section">
		<h2>Our Team</h2>
		<hr>
	</div>
	<div class="about__mary l-section row">
		<div class="about__mary--left">
			<img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/images/pages/about/MaryWissmannRD.jpg" alt="Mary Wissmann, MS, RD, LD">
		</div>
		<div class="about__mary--right">
			<section class="about__mary--header row">
				<h2>Mary Wissmann <small>MS, RD, LD</small></h2>
				<h5>Dietitian</h5>
			</section>
			<section class="row">
				<p>Hello! My name is Mary Wissman. I am a Registered and Licensed Dietitian with a Master’s Degree in Nutritional Sciences. I have always loved to prepare healthy and delicious food, and I recognized at a young age that good food and an active lifestyle made a difference in the way I felt, both physically and mentally. Helping others has always given me such joy, so I fell naturally into a career as a dietitian.</p>
				<p> I have been a practicing dietitian for 11 years, and in that time I have worked with individual clients, conducted research, taught community nutrition and health programs, and led many community health initiatives. I spent 7 years as a university faculty member, which provided me with extensive experience reading and interpreting the latest nutrition and health research.</p> 
				<p>What does that mean for you? No hype, no fad diets, and no outdated recommendations.</p>
				<p> I am focused on all aspects of health, including stress management, mindfulness, all forms of physical activity, and food choices that make you feel good from the inside out. I don’t believe in a one-size-fits-all approach. I spend time with each individual client to ensure you meet your goals for lasting health and wellness. To this day, I still get so excited for each and every client as they embark on a journey toward a healthier way of life. There is so much waiting for you, and I cannot wait to help you get there.</p>
			</section>
		</div>
		
	</div>


{{-- Form Section --}}
<div class="row l-section">
		<h2>Email Us</h2>
		<hr>
	</div>
	
	<!-- Contact Form -->
 <section class="contact-form  l-section" id="contactForm" ng-controller="ContactFormController as fc" data-ng-init="fc.formData.formType = 'contactForm'">
	<div class="contact-address__form row">
			<form name="contactForm" class="l-section__small top-errors" ng-submit="fc.submitForm()">
				
				<div class="form-group">
					<label for="customerName">Name <i class="required">*</i></label>
					<div class="input-errors" ng-messages="contactForm.customerName.$error" ng-if="contactForm.customerName.$dirty">
						<small class="error" ng-message="required">Please provide your name</small>
					</div>	
					<input type="text" name="customerName" id="customerName"  placeholder="Full Name" ng-model="fc.formData.customerName" required>
				</div>

				
				<div class="form-group form-half">
					<label for="email_address">Email <i class="required">*</i></label>
					<div class="input-errors" ng-messages="contactForm.email_address.$error" ng-if="contactForm.email_address.$dirty" role="alert">
						<small class="error" ng-message="required">Please provide your email</small>
						<small class="error" ng-message="email">Please provide a valid email</small>
					</div>
					<input type="email" name="email_address" id="emailAddress" placeholder="" ng-model="fc.formData.email" >
				</div>
				
				<div class="form-group form-half">
					<label for="phone_number">Phone Number</label>
					<input phone-input target-id="bestTime" type="tel" name="phone_number" id="" ng-model="fc.formData.phone" placeholder="(555) 555-5555">
				</div>
				<div id="bestTime" class="hide">
					<p class=" form-group label">When is the best time to call</p>	
					<ul class="contact-address__form__checkboxes form-group">
						<li>
							<input type="checkbox" class="" name="best_contact_time" id="best_contact_time_morning" ng-model="fc.formData.bestContactTime.morning" value="morning">
							<label for="best_contact_time_morning">Morning</label>
						</li>
						<li>
							<input type="checkbox" class="" name="best_contact_time" id="best_contact_time_daytime" ng-model="fc.formData.bestContactTime.daytime" value="daytime">
							<label for="best_contact_time_daytime">Daytime</label>
						</li>
						<li>
							<input type="checkbox" class="" name="best_contact_time" id="best_contact_time_afternoon" ng-model="fc.formData.bestContactTime.afternoon" value="afternoon">
							<label for="best_contact_time_afternoon">Afternoon</label>
						</li>
						<li>
							<input type="checkbox" class="" name="best_contact_time" id="best_contact_time_night" ng-model="fc.formData.bestContactTime.night" value="night">
							<label for="best_contact_time_night">Night</label>
						</li>
					</ul>
			
				</div>
				
				<div class="form-group">
					<label for="message">Message</label>
					<textarea name="contact_message" id="contactMessage" cols="30" rows="10" ng-model="fc.formData.contactMessage" required></textarea>
				</div>
				
				<div class="form-group__center">
					<input type="hidden" name="form_type" ng-model="fc.formData.formType" value="contact_page_form">
					<button class="button__loading {! fc.loading !}" ng-disabled="contactForm.$invalid">
						<div class="progress-spinner"></div>
						<div class="button-text">Send Message</div> 
					</button>	
				</div>

				<div class="contact__success" data-ng-show="fc.success" data-ng-cloak>
					<p>{! fc.successMessage  !}</p>
				</div>
			</form>
		</div>	
</section> 

@endsection


@section('extra-scripts')
 	
@endsection