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
			</div>
			<div class="card-content">
				<span class="card-title">{{ $product->title }} - ${{ $product->price }}</span>
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
		<h5>Transaction for product # {{ $product->id }}</h5>
		<table class="striped responsive-table">
			<thead>
				<th>Transaction Id</th>
				<th>Email</th>
				<th>Price</th>
			</thead>
			<tbody>
				@if (empty($transactions))
					<tr>
					 	<td colspan="3">There are no transactions for this product</td>
					</tr>
				@else 
					@foreach($transactions as $transaction)
						<tr>
							<td><a href="{{ route('transactionDetail', $transaction->id) }}">{{ $transaction->transaction_id }}</a></td>
							<td>{{ $transaction->email }}</td>
							<td>{{ $transaction->total }}</td>
						</tr>
					@endforeach
				@endif
				
			</tbody>
		</table>
	</div>
</div>


@endsection



