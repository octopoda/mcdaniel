@if (session()->has('flash_message'))
	<script>
		Materialize.toast('{{ session('flash_message.message') }}', 1400, '{{ session('flash_message.type') }}');
	</script>
	 
	{!! session()->forget('flash_message') !!}
@endif