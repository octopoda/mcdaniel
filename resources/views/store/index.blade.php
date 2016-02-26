@extends('layouts.frontend.page')

@section('content')

	<section class="row">
	@foreach($products as $product)
		<div class="col s12 m4">
			<div class="card">
				<div class="card-image">
					<img src="{{ $product->product_image }}" alt="{{ $product->title }}">
					<span class="card-title">{{ $product->title }} - ${{ $product->price }}</span>
				</div>
				<div class="card-content">
					<p>{!! $product->description !!}</p>
				</div>
				<div class="card-action">
					<a href="{{ route('productByTitle', $product->direct_link) }}">View Product</a>
					<a href="{{ $product->paypal_url }}" target="_blank">Buy Now</a>
				</div>
			</div>
		</div>
	@endforeach
	</section>

@endsection


{{-- rwZ1wgfwH_YjPauEhirIRSfM5WoCYvTme7Ik5jknuC___b8Aae_OSP-HLMG --}}