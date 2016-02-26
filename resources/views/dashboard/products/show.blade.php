@extends('layouts.admin.app')

@section('alert')
	@include('dashboard.partials._isDraft', ['permission' => 'manage_products', 'model' => $product, 'model_name' => 'post'])
@endsection

@section('subnav')
	@include('dashboard.partials._show-buttons', ['title' => 'Products', 'model' => $product, 'name' => 'product', 'publish_perm' => 'manage_products' ])
@endsection

@section('content')
<div class="row">
	<div class="col s12 m6">
		<div class="card">
			<div class="card-image">
				<img src="{{ $product->product_image }}" alt="{{ $product->title }}">
				<span class="card-title">{{ $product->title }} - ${{ $product->price }}</span>
			</div>
			<div class="card-content">
				<p>{!! $product->description !!}</p>
			</div>
			<div class="card-action">
				@if ($product->paypal_url == false) 
					<p>Please go to <a target="_blank" href="https://www.paypal.com/us/webapps/mpp/standard-integration#option1"> PayPal Creator </a> to create buy button and publish this product.</p>
				@else
					<p><a href="{{ $product->paypal_url }}" target="_blank">Buy Button Url</a></p>
				@endif
			</div>
		</div>
	</div>


	<div class="col s12 m6">
		<h5>Transaction for products</h5>
		<table class="striped responsive-table">
			<thead>
				<th>Email</th>
				<th>Price</th>
				<th>last 4</th>
			</thead>
			<tbody>

			</tbody>
		</table>
	</div>
</div>


@endsection



