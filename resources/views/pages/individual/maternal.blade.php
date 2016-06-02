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
			<img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/images/pages/maternal/maternal-text-side.jpg" alt="Protect More than Your Health">
		</div>
		<div class="g-half">
			<section class="tablet-up ">
				
			</section>
			<section>
				<h2>Eating for 2(+)</h2>
				<p>Pregnancy is a precious moment of life, but the do’s and don’s can be overwhelming. The right diet can improve your chances of conception, nourish your growing baby, and get you back on track post-pregnancy.</p>
				<p>With children of our own, our nutrition experts can give you evidence-based recommendations with real-life understanding.</p>

				<ul class="maternal__text--list">
					<li>Prior to pregnancy, we can help you sort the truths from the myths of fertility foods, help you attain a body weight conducive to conception, and equip your body for pregnancy with the right mix of nutrients.</li>
					<li>During pregnancy, we can ensure your food choices and  supplements support both you and your baby’s health and obtain proper weight gain.</li>
					<li>After pregnancy, we can help you safely return to your pre-pregnancy weight, ensure you’re getting the necessary nutrients for breast feeding, and ease postpartum fatigue, mood swings, or depression.</li>
				</ul>
			
				<div class="button">
					<a href="{{ route('get-started-maternal') }}" data-services-button data-service="maternal-nutrition" >Support Your Maternal Health </a>
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
				<p class="large">Keeping nutrition a priority near or during your pregnancy is easier with support. Our services will give you the most personally tailored consultations which are best for both you and baby. </p>
			</section>
			<section class="maternal-description__left">
				<h5>How we can support you and baby:</h5>
				
				<ul>
					<li>Detailed evaluation of your unique maternal nutrition needs</li>
					<li>Personalized eating strategies and meal plans for optimal results and health</li>
					<li>Development of your foundational action plan</li>
					<li>Tailored follow-up plan</li>
				</ul>

				<p class="legal">Prior to your consultation, you will need to complete a client contract and comprehensive nutritional assessment. Please bring the completed paperwork to your initial consultation. If you desire a computerized nutritional analysis of your 3-day food journal, we will complete this prior to the consult for an additional fee of $30. During our initial consult, we will review your information to glean insights into your unique eating habits, lifestyle needs, experience with weight loss, and areas of focus.</p>
				<p class="legal">Follow-up visits are highly recommended. These sessions support your success and allow us to support your goals set in the inital consultation. These sessions can be completed by phone/skype or in-person. </p>
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