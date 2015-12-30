@extends('layouts.page')

@section('content')
	
	<ul>
		<li>{{ $appearance->title }}</li>
		<li>{{ $appearance->publication }}</li>
		<li>{{ $appearance->link }}</li>
		<li>{!! $appearance->video_url !!}</li>
	</ul>
	
@endsection