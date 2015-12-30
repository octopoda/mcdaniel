@extends('layouts.page')

@section('content')

	<section>
	@foreach($products as $product)
		<div>
			<h3><a href="{{ route('productByTitle', $product->direct_link) }}">{{ $product->title }}</a></h3>
			<div>
				<div>
					<img src="{{ $product->product_image }}" alt="{{ $product->title }}">
				</div>
				<div>
					{!! $product->description !!}

					${{ number_format($product->price, 2) }}
				</div>
			</div>

		</div>
	@endforeach
	</section>

@endsection


{{-- rwZ1wgfwH_YjPauEhirIRSfM5WoCYvTme7Ik5jknuC___b8Aae_OSP-HLMG --}}