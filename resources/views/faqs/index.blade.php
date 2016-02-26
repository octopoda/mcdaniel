@extends('layouts.frontend.page')

@section('content')
	
	<h1>Frequently Asked Questions</h1>
	
	<div>
	@foreach ($faqs as $faq) 
		<section>
			<h3><a href="{{ route('faqByTitle', str_replace(' ', '-', $faq->question)) }}">{{ $faq->question }}</a></h3>
			
		</section> 
	
	@endforeach
	</div>
	

@endsection