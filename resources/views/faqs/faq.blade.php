@extends('layouts.page')

@section('content')
	
	<h1>{{ $faq->question }}</h1>
	

	{!! $faq->answer !!}

	

@endsection