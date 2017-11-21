@extends('layouts.frontend.page')

@section('content')

		<!-- Header -->
	<div class="store_hero hero">
		<section class="row">
			<h1>McDaniel<br>Nutrition<br>Store</h1>
		</section>
	</div>
	<nav class="m-sub-navigation store-subnav" id="subnav">
			<!-- <ul class="row">
				<li><a href="{{ $product->paypal_url }}">Buy Now</a></li>
				<li><a href="{{ $store->view_cart_url }}">View Cart</a></li>
			</ul> -->
		</nav>
	
	
	<div class="store__product">
		<div class="row">
			<section class="store__product--image">
				<img src="{{ $product->product_image }}" alt="{{ $product->title }}">
				@if($product->paypay_url)
					<div class="button">
						<a href="{{ $product->paypal_url }}">Add To Cart</a>
					</div>
				@endif

				@if($product->product_url)
					<div class="button">
						<a href="{{ $product->product_url }}">Buy Now</a>
					</div>
				@endif

			</section>

			<section class="store__product--content">
				<h3>{{ $product->title }}</h3>
				<h5>${{ number_format($product->price, 2) }}</h5>
				
				<div class="store__product--content-description">
					{!! $product->description !!}
				</div>
				
				<div class="button phone-only">
					<a href="{{ $product->paypal_url }}">Add To Cart</a>
				</div>
		</div>
	</div>

@endsection


