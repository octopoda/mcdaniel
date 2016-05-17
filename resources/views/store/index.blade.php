@extends('layouts.frontend.page')

@section('content')
	<!-- Header -->
	<div class="store_hero hero">
		<section class="row">
			<h1>McDaniel<br>Nutrition<br>Store</h1>
		</section>
	</div>
	

	<div class="store__products ">
		<div class="row"> 
		@foreach($products as $product)
			<div class="store__products--card">
				<div class="store__products--card-image">
					<a href="{{ route('productByTitle', $product->direct_link) }}">
						<div class="view">View</div>
						<img src="{{ $product->product_image }}" alt="{{ $product->title }}">
						<h3 class="store__products--card-title">{{ $product->title }}</h3>
					</a>
				</div>
				
				
			</div>
		@endforeach
		</div>
	</div>
@endsection

