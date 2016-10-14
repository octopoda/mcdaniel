@extends('layouts.frontend.page')

@section('content')
	
	<div class="store_hero hero">
		<section class="row">
			<h1>McDaniel<br>Nutrition<br>Store</h1>
		</section>
	</div>
	


	
	<section class="store__downloads">
		<div class="row">
			<h2>Download Your Products</h2>

			@if (empty($products)) 
				<h3>Sorry There are no products for this transaction</h3>
			@else 
				<ul>
				@foreach ($products as $product)
					<li><a href="{{ route('downloadProduct', [$transaction->transaction_id, $product->id]) }}">{{ $product->title }}</a></li>
				@endforeach
				</ul>
			@endif
		</div>
	</section>

@endsection


