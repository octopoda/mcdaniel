
<p>Jennifer, </p>

<p>You have a new customer.</p>

@foreach($mailRequest as $key=>$value)
		@if (is_array($value)) 
			<h4> {{ ucwords(str_replace("-", " ", $key)) }}: </h4> 
			<p> {{ implode(", ", array_keys($value)) }}</p>
		@else 
			<h4> {{ ucwords(str_replace("-", " ", $key)) }}: </h4> 
			<p> {{ $value }}</p>
		@endif
@endforeach
