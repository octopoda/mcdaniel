<h2>You just made {{ $transaction->total }}!</h2>

<p>Woohoo! {{ $transaction->email }} just bought {{ count($transaction->items) }} items from your store. </p>

<p><a href="{{ route('transactionDetail', $transaction->id) }}">Visit transaction Detail</a></p>