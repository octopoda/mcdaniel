@extends('layouts.frontend.page')

@section('content')
	
	<h2>Download Your Products</h2>
	<section>
		@foreach ($products as $product)
			<li><a href="{{ $product->url }}">{{ $product->title }}</a></li>
		@endforeach
	</section>

@endsection


