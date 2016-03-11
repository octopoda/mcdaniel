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
	<section class="faq__header">
		<div class="faq__header--text  container">
			<h1>Support Center</h1>
			<form id="faqSearch">
				<input type="text" name="query" id="faqQuery" class="filled">
				<input type="hidden" name="_token" value="{{ csrf_token() }}">
				<button><i class="material-icons">search</i></button>
			</form>	
		</div>
	</section>
	
	<div class="container">
		<div class="row">
			<section class="s12 m12 l8 col">
				<h3 class="underlined">Popular Questions</h3>
				
				<ul class="collapsible faq__wrapper" id="faqQuestions">
					@foreach ($faqs as $faq)
						<li class="faq__question">
							<div class="collapsible-header"><i class="material-icons">keyboard_arrow_right</i> {{ $faq->question }}</div>
							<div class="collapsible-body">{{ $faq->answer }}</div>
						</li>
					@endforeach
				</ul>
			</section>

			<section class="s12  m12 l4 col  faq__contact">
				<h3 class="underlined">Get in Touch</h3>
				
				<ul class="no-bullet">
					<li><a href="#contactModal" class="modal-trigger"><i class="material-icons">email</i> Email Us</a></li>
					<li><a href="{{ route('contact') }}"><i class="material-icons">phone_iphone</i> Call Us</a></li>
					
				</ul>

				</ul>
			</section>
		</div>
	</section>


	<div class="container faq__more">
		<div class="row">
			<section class="s12 col">
				<h3 class="underlined">Still have Questions?</h3>
				<p>Fill out the form below and we will help you find an answer.</p>	
				
				<div class="faq__more--form">
					@include('forms.faq')
				</div>
			</section>
		</div>
	</div>
	<div>
@endsection


@section('extra-scripts')
 	
@endsection