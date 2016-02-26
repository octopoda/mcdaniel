@extends('layouts.frontend.page')

@section('content')
	<div class="row>"
		<h3>{{ $faq->question }}</h3>
	</div>
	
	<div class="row">
		{!! $faq->answer !!}
	</div>

	

@endsection