
<h2>Your Transaction has been processed</h2>


<dl>
	<dt>Transaction Id:</dt>
	<dd>{{ $transaction->transaction_id }}</dd>
	<dt>Purchased On:</dt>
	<dd>{{ date('M d, Y h:i a', strtotime($transaction->created_at)) }}</dd>

	<dt>Products Purchased</dt>
	<dd class="dashboard__content--list">
		<ul>
			@foreach ($products as $product)
				<li><a href="{{ route('getDownloads', $transaction->transaction_id) }}">{{ $product->title }}</a></li>
			@endforeach
		</ul>
	</dd>

</dl>

<p>Please feel free to contact us with any questions you might have.  Thanks again for the purchase and have a great day.</p>