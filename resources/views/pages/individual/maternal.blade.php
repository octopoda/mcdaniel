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
	<div class="sitewide__page-header">
		<div class="sitewide__page-header--text container">
			<h1>Protect More Than Your Health</h1>
		</div>
	</div>

	<div class="weight-loss__text">
		<div class="container sitewide__page--text">
			<section>
					<p>Pregnancy is a precious moment of life. But it can also be daunting. The right diet can improve your chances of conception, nourish your growing baby, and get you back on track post-pregnancy. </p>
					<p>With children of their own, our nutrition experts can give you evidence-based recommendations with real-life understanding.</p>
			</section>
			<section class="row">
				<div class="s12 m4 col">
					<h4>Pre-pregnancy And/or Fertility Treatments:</h4>
					<ul>
						<li>Sort the truths from the myths of fertility foods</li>
						<li>Attain the body weight most conducive to conception</li>
						<li>Equip your body for pregnancy with the right mix of nutrients </li>
					</ul>
				</div>
				<div class="s12 m4 col">
					<h4>Pregnancy</h4>
					<ul>
						<li>Protect the baby’s health and yours with the right food and supplements</li>
						<li>Eat the right types of food and amounts for healthy pregnancy weight gain</li>
						<li>Get the nutrients you need to fuel exercise during pregnancy</li>
					</ul>
				</div>
				<div class="s12 m4 col">
					<h4>Post-pregnancy</h4>
					<ul>
						<li>Safely return to your pre-pregnancy weight</li>
						<li>Ensure you’re getting the necessary nutrients for breast feeding</li>
						<li>Ease postpartum fatigue, mood swings, or depression</li>
					</ul>
				</div>
			</section>
		</div>
	</div>


	<div class="weight-loss__packages">
		<div class="container">
			<h2>Maternal Nutrition Packages</h2>
			<p>Keeping nutrition a priority near or during your pregnancy is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past and what allows us to give you the most personally tailored consultations.</p>

		</div>
	</div>


	<div class="services__package">	
		<div class="container">

			<section>
				<h3>
					Initial Individual Consultation<br>
					<small>60 Minutes</small>
				</h3>
				<ul>
					<li>Detailed evaluation of your unique maternal nutrition needs</li>
					<li>Personalized eating strategies and meal plans for optimal results and health</li>
					<li>Development of your foundational action plan</li>
					<li>Tailored follow-up plan</li>
				</ul>

				<p>Prior to the initial consolation, you will need to fill out a comprehensive nutrition assessment form (found here) and bring it to your first visit. During the initial consultation, I will review your information and learn more about your unique maternal nutrition needs, eating habits, and lifestyle.</p>
			</section>
			
			<section>
				<h3>
					Follow Up Consultations<br>
					<small>30 Minutes</small>
				</h3>

				<ul>
					<li>Review of your foundational action plan</li>
					<li>Analysis of your food journal (optional)</li>
					<li>Meal planning support & recipe ideas incorporating your preferences</li>

				</ul>

				<p>Follow-up visits are highly recommended. These sessions support your success and allow us to answer any questions you might have after implementing initial recommendations. These sessions can be completed by phone or in-person. </p>
			</section>
			
		</div>
	</div>

@endsection


@section('extra-scripts')
 	
@endsection