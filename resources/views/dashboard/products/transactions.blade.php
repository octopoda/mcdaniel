@extends('layouts.admin.app')

@section('content')
<div class="dashboard__show">
		
	
	<div class="dashboard__content">
		<h3>Transaction <small>{{ $transaction->transaction_id }}</small></h3>
		<h2>${{ $transaction->total }}</h2>
		
		<dl>
			<dt>Transaction Id:</dt>
			<dd>{{ $transaction->transaction_id }}</dd>
			<dt>User Email:</dt>
			<dd>{{ $transaction->email }}</dd>
			<dt>Purchased On:</dt>
			<dd>{{ date('M d, Y h:i a', strtotime($transaction->created_at)) }}</dd>
			<dt>Pay Pal Payer Id:</dt>
			<dd>{{ $transaction->payer_id }}</dd>
			<dt>Fee Paid to Paypal</dt>
			<dd>${{ $transaction->fee }}</dd>
			<dt>Products Purchased</dt>
			<dd class="dashboard__content--list">
				<ul>
					@foreach ($products as $product)
						<li><a href="{{ route('dashboard.products.show', $product->id) }}">{{ $product->title }}</a></li>
					@endforeach
				</ul>
			</dd>

		</dl>
	</div>
	

</div>


@endsection



