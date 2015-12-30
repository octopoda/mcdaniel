@extends('layouts.page')

@section('content')
	
	<ul>
	@foreach($appearances as $appearance) 
		<li>{{ $appearance->title }}</li>
	@endforeach
	</ul>
	
@endsection