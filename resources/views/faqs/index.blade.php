<?php
$header = [
	"title" => "Support Center  McDaniel Nutrition Therapy St Louis Missouri",
	"description" => "Wnat to know more about our nutrition services. Frequently asked questions for McDaniel",
	"Keywords" => "FAQS, Frequently Asked Questions,  St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition, dietitian, consultation, nutritionist, speaking, media",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')
	<!-- Header -->
	<div class="faqs__hero hero">
		<section class="row">
			<h1>Questions About <br> Getting Healthy</h1>
		</section>
	</div>

<div class="faq" data-ng-controller="FaqController as vm">
	<div class="faq__question__search">
		<div class="row">
			<div class="search-icon"><i class="material-icons">search</i></div>
			<input type="text" placeholder="Search" data-faq-search-input>
		</div>
	</div>

	<div class="faqs__questions__wrapper">
		<div class="row">
			<section class="faqs__questions">
				<h2 class="underlined">Popular Questions</h2>
				<div data-loading></div>
				<div class="faq-block" data-faq-block data-faqs="vm.Faqs">
				
			</section>

			<section class="faqs__contact">
				<h3 class="underlined">Get in Touch</h3>
				
				<ul class="no-bullet">
					<li><a href="#contactModal" class="modal-trigger"><i class="material-icons">email</i> Email Us</a></li>
					<li><a href="{{ route('contact') }}"><i class="material-icons">phone_iphone</i> Call Us</a></li>
				</ul>

				</ul>
			</section>
		</div>
	</div>
</div> <!-- Div -->

<div class="faqs__more">
	<div class="row">
		<section>
			<h3>Still have Questions?</h3>
			<p>Fill out the form below and we will help you find an answer.</p>	
			
			<div class="faq__more--form">
				@include('forms.faq')
			</div>
		</section>
	</div>
</div>
	
@endsection


@section('extra-scripts')
 	
@endsection