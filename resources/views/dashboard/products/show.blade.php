@extends('layouts.app')


@section('content')
	<div>
		<ul>
			<li><a class="btn btn-primary" href="{{ URL::route('dashboard.products.edit', $product->id) }}">Edit</a></li>
			<li>
				{!! Form::open(['route' => ['dashboard.products.update', $product->id], 'method' => 'DELETE']) !!}
            	{!! Form::submit('Delete', ['class' => 'btn btn-danger', 'onclick' => 'return confirm("Are you sure?");']) !!}
            	{!!  Form::close() !!}
            </li>
		</ul>
	</div>

	
	<img src="{{ $product->product_image }}" alt="{{ $product->title }}">

	<p>Product id: {{ $product->id }}</p>

	<h1>{{ $product->title }}</h1>
	<section>
		{!! $product->description !!}
	</section>

	<h5>${{ $product->price }}</h5>
	

	@if ($product->paypal_url == false) 
		<p>Please go to <a target="_blank" href="https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=jUufOaxDIqJ3jylgYb24u3DqA8pwQQg9g6H0ypxP40piu2mKaCIiMaQbRN4&dispatch=5885d80a13c0db1f8e263663d3faee8d64ad11bbf4d2a5a1a0d303a50933f9b2"> PayPal Creator </a> to create buy button and publish this product.</p>
	@else
		<p>Buy Button Url: {{ $product->paypal_url }}</p>
	@endif

@endsection