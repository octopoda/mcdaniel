@extends('layouts.page')

@section('content')
	<a href="{{ $store->biew_cart_url }}">View Cart</a>
	<section>
		<div>
			<h3>{{ $product->title }}</h3>
			<div>
				<div>
					<img src="{{ $product->product_image }}" alt="{{ $product->title }}">
				</div>
				<div>
					{!! $product->description !!}

					${{ number_format($product->price, 2) }}
				</div>

				<div>
					<a href="{{ $product->paypal_url }}">Buy Now</a>
				</div>



			</div>

		</div>
	</section>

@endsection


