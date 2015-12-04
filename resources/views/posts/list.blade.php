@extends('layouts.blog')

@section('content')
	
	@foreach($posts as $post) 
		<h3><a href="{{ route('postByTitle', ['title' => $post->direct_link]) }}">{{ $post->title }}</a></h3>
		<p>{{ $post->summary }}</p>
	@endforeach
	
	
@endsection