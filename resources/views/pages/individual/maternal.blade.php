<?php
$header = [
	"title" => "Maternal Nutrition - McDaniel Nutrition Therapy, St Louis",
	"description" => "Protect more than your own health before, during, and after your pregnancy with support and nutritional wisdom from experts who have been there.",
	"Keywords" => "maternal nutrition, nutrition during pregnancy, nutrition for conception, nutrition, St Louis",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))



@section('modal')
	<div class="modal modal-fixed-footer indivdual" id="maternalModal">
			<section class="modal-content">		
				<h3>Thank you for choosing McDaniel Nutrition</h3>
				<p>We are excited to help you get started on helping you feed your baby.  Please fill out the form and we will contact you shortly to schedule an appointment.</p>
				@include('forms.individual')
			</section>
			<section class="modal-footer text-right">
				<a href="#!" class="modal-action waves-effect waves-green btn-flatten hollow"  id="modalSubmit">Sign Up Now</a>
				<a href="#!" class="modal-action modal-close waves-effect waves-red btn-flatten hollow" >Cancel</a>
			</section>
		</div>
@endsection

@section('content')


	<div class="maternal__header sitewide__boxed">
		<section class="container">
			<h1><span>Protect More Than Your Health</span></h1>
		</section>
	</div>

	<div class="maternal__text">
		<div class="container services__main-text">
			<section>
					<p>Pregnancy is a precious moment of life. But it can also be daunting. The right diet can improve your chances of conception, nourish your growing baby, and get you back on track post-pregnancy. </p>
					<p>With children of their own, our nutrition experts can give you evidence-based recommendations with real-life understanding.</p>
			</section>
		</div>
	</div>
	<div class="container">
		<section class="row maternal__boxes">
			<div class="s12 m3 col">
				<div class="maternal__boxes-box">
					<h4>Pre-pregnancy And/or Fertility Treatments:</h4>
					<ul>
						<li>Sort the truths from the myths of fertility foods</li>
						<li>Attain the body weight most conducive to conception</li>
						<li>Equip your body for pregnancy with the right mix of nutrients </li>
					</ul>
				</div>
			</div>
			<!-- <div class="s12 m1 col none">&nbsp;</div> -->
			<div class="s12 m3 col">
				<div class="maternal__boxes-box">
					<h4>Pregnancy</h4>
					<ul>
						<li>Protect the baby’s health and yours with the right food and supplements</li>
						<li>Eat the right types of food and amounts for healthy pregnancy weight gain</li>
						<li>Get the nutrients you need to fuel exercise during pregnancy</li>
					</ul>
				</div>
			</div>
			<!-- <div class="s12 m1 col none">&nbsp;</div> -->
			<div class="s12 m3 col">
				<div class="maternal__boxes-box">
					<h4>Post-pregnancy</h4>
					<ul>
						<li>Safely return to your pre-pregnancy weight</li>
						<li>Ensure you’re getting the necessary nutrients for breast feeding</li>
						<li>Ease postpartum fatigue, mood swings, or depression</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
	


	<div class="services__package-intro">
		<div class="container">
			<h2>Maternal Nutrition Packages</h2>
			<p>Keeping nutrition a priority near or during your pregnancy is easier with support. Our packages are structured around the level of engagement we’ve seen be most effective in the past and what allows us to give you the most personally tailored consultations.</p>

		</div>
	</div>


	<div class="services__packages">
		<div class="row">
			<ul>
				<li class="services__packages--package maternal__individual package-trigger" data-package="maternalIndividual">
					<div class="services__packages--background">
						<span>Get More Info</span>
					</div>
					<span class="title">
						<h3>
							Individual Consultation
							<small>60 Minutes</small>
						</h3>
					</span>
				</li>
				<li class="services__packages--package maternal__followup package-trigger" data-package="maternalFollowup">
					<div class="services__packages--background">
						<span>Get More Info</span>
					</div>
					<span class="title">
						<h3>
							Follow-up Consultation
							<small>30 Minutes</small>
						</h3>
					</span>
				</li>
			</ul>
		</div>
	</div>


	<div class="services__descriptions">	
		<div class="container">
			<div class="services__description" id="maternalIndividual">
				<div class="row">
					<section class="s12 m6 col">
						<h2>
							Initial Individual Consultation<br>
							<small>60 Minutes</small>
						</h2>

						<div class="services__descriptions--signup">
							<a href="#maternalModal" class="btn-flatten hollow waves-effect waves-green modal-trigger" data-service="maternal initial consultation">Sign Up Today</a>
						</div>
					</section>
					<section class="s12 m6 col">
						<h4>How we can Lead you to a new health.</h4>
						<ul>
							<li>Detailed evaluation of your unique maternal nutrition needs</li>
							<li>Personalized eating strategies and meal plans for optimal results and health</li>
							<li>Development of your foundational action plan</li>
							<li>Tailored follow-up plan</li>
						</ul>

						<p>Prior to the initial consolation, you will need to fill out a comprehensive nutrition assessment form (found here) and bring it to your first visit. During the initial consultation, I will review your information and learn more about your unique maternal nutrition needs, eating habits, and lifestyle.</p>
					</section>
				</div>
			</div>
			<div class="services__description" id="maternalFollowup">
				<div class="row">
					<section class="s12 m6 col">
						<h2>
							Follow up Consultation<br>
							<small>30 Minutes</small>
						</h2>

						<div class="services__descriptions--signup">
							<a href="#maternalModal" class="btn-flatten hollow waves-effect waves-green modal-trigger" data-service="maternal followup consultation">Continue Your Success</a>
						</div>
					</section>
					<section class="s12 m6 col">
						<h4>How we can Lead you to a new health.</h4>
						<ul>
							<li>Review of your foundational action plan</li>
							<li>Analysis of your food journal (optional)</li>
							<li>Meal planning support & recipe ideas incorporating your preferences</li>
						</ul>

					<p>Follow-up visits are highly recommended. These sessions support your success and allow us to answer any questions you might have after implementing initial recommendations. These sessions can be completed by phone or in-person. </p>
					</section>
				</div>
			</div>
		</div>
	</div>

@endsection


@section('extra-scripts')
 	
@endsection