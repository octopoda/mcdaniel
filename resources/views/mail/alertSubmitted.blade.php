<h2>An Alert has been submitted</h2>

@foreach($mailRequest as $key=>$value) 
	@if (is_array($value))
		@foreach ($value as $k=>$v) 
			<p>{{ $k }} : {{ $v }}</p>		
		@endforeach
	@endif
	<p>{{ $key }} : {{ $value }}</p>

@endforeach