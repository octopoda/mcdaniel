@extends('layouts.frontend.page')

@section('content')
	<section class="faq__header container">
		<div class="faq__header--text">
			<h1>Support Center</h1>
			<form id="faqSearch">
				<input type="text" name="query" id="faqQuery">
				<input type="hidden" name="_token" value="{{ csrf_token() }}">
				<button><i class="material-icons">search</i></button>
			</form>	
		</div>
	</section>
	
	<section class="container">
		<div class="row">
			<div class="s12 m12 l8 col">
				<h3 class="underlined">Popular Questions</h3>
				
				<ul class="collapsible faq__wrapper" id="faqQuestions">
					@foreach ($faqs as $faq)
						<li class="faq__question">
							<div class="collapsible-header"><i class="material-icons">keyboard_arrow_right</i> {{ $faq->question }}</div>
							<div class="collapsible-body">{{ $faq->answer }}</div>
						</li>
					@endforeach
				</ul>
			</div>

			<div class="s12  m12 l4 col">
				<h3 class="underlined">Get in Touch</h3>
				
				<ul class="no-bullet">
					<li><i class="material-icons">email</i> Email Us</li>
					<li><i class="material-icons">phone_iphone</i> Call Us</li>
					
				</ul>

				</ul>
			</div>
		</div>
	</section>
	<div>
@endsection


@section('extra-scripts')
 	
@endsection