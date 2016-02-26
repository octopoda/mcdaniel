@extends('layouts.frontend.blog')

@section('content')

	@if(count($posts) == 0) 
		<h2>Sorry we can find no post under that category</h2>
		<p>Please select a different category</p>
	@endif
	
	@foreach($posts as $post) 
		<h3><a href="{{ route('postByTitle', ['title' => $post->direct_link]) }}">{{ $post->title }}</a></h3>
		<p>{!! $post->summary !!}</p>
	@endforeach
	

	<div class="pagination">
		{!! $posts->render() !!}
	</div>
	
@endsection