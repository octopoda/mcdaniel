@extends('layouts.page')

@section('content')
	<h1>An Error Occured With PayPal</h1>
	<p>Something happened with PayPal that we cannot resolve. Please let us know by clicking the button below</p>

	<div class="button">
		<a href="">Alert Us</a>
	</div>
@endsection


{{-- https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GP4FT5HCUMXEU --}}



{{-- <form target="paypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
	<input type="hidden" name="cmd" value="_s-xclick">
	<input type="hidden" name="hosted_button_id" value="GP4FT5HCUMXEU">
	<input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
	<img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
 --}}



{{-- tx=5WN61474F7919662W&st=Completed&amt=13%2e04&cc=USD&cm=&item_number= --}}



https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8VLDD25UH96P6$item_number=1