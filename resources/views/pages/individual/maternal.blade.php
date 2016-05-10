<?php
$header = [
	"title" => "Maternal Nutrition - McDaniel Nutrition Therapy, St Louis",
	"description" => "Protect more than your own health before, during, and after your pregnancy with support and nutritional wisdom from experts who have been there.",
	"Keywords" => "maternal nutrition, nutrition during pregnancy, nutrition for conception, nutrition, St Louis",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')

<!-- Header -->
	<div class="maternal__hero hero">
		<section class="row">
			<h1>Protect More than<br> Your Health</h1>
		</section>
	</div>


	<div class="maternal__text">
		<div class="maternal__text__image tablet-up">
			<img src="/assets/images/pages/maternal/maternal-text-side.png" alt="Fuel Your New Best with McDaniel Nutrition Sports Packages">
		</div>
		<div class="g-half">
			<section class="tablet-up ">
				
			</section>
			<section>
				<h2>Eating for 2(+)</h2>
				<p>Pregnancy is a precious moment of life. But it can also be daunting. The right diet can improve your chances of conception, nourish your growing baby, and get you back on track post-pregnancy. </p>
				<p>With children of their own, our nutrition experts can give you evidence-based recommendations with real-life understanding.</p>

				<p><strong>Prior to pregnancy</strong> nutrition services can help sort the truths from the myths of fertility foods, help you attain a body weight conducive to conception, and equip your body for pregnancy with the right mix of nutrients. </p>
				
				<p><strong>During pregnancy</strong>, we can ensure your food choices & supplements support both you and your baby’s health and proper weight gain. </p>
				
				<p><strong>After pregnancy</strong>, we can help you safely return to your pre-pregnancy weight, ensure you’re getting the necessary nutrients for breast feeding, and ease postpartum fatigue, mood swings, or depression. </p>

				<div class="button">
					<a href="{{ route('get-started-maternal') }}" data-services-button data-service="maternal-nutrition" >Protect Your Child Today</a>
				</div>
			</section>
		</div>
	</div>

	
	

	<div class="m-sub-navigation">
		
	</div>

	
	<div class="maternal__packages green-gradient">	
		<div class="row g-two-columns">
			<section class="maternal-description__right">
				<h3>Maternal Nutrition</h3>
				<p class="large">Keeping nutrition a priority near or during your pregnancy is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past and what allows us to give you the most personally tailored consultations.</p>
			</section>
			<section class="maternal-description__left">
				<h5>How we can Lead you to a new health.</h5>
				<ul>
					<li>Detailed evaluation of your unique maternal nutrition needs</li>
					<li>Personalized eating strategies and meal plans for optimal results and health</li>
					<li>Development of your foundational action plan</li>
					<li>Tailored follow-up plan</li>
				</ul>

				<p class="legal">Prior to the initial consolation, you will need to fill out a comprehensive nutrition assessment form (found here) and bring it to your first visit. During the initial consultation, I will review your information and learn more about your unique maternal nutrition needs, eating habits, and lifestyle.</p>
				<p class="legal">Follow-up visits are highly recommended. These sessions support your success and allow us to answer any questions you might have after implementing initial recommendations. These sessions can be completed by phone or in-person. </p>
			</section>
		</div>
		<div class="row sales-button">
			<div class="button">
				<a href="{{ route('get-started-maternal') }}" data-services-button data-service="maternal-nutrition" >Setup An Indiviudal Consultation</a>
			</div>
		</div>
	</div>



	@include('layouts.frontend.partials.about')

@endsection


@section('extra-scripts')
 	
@endsection