@extends('layouts.frontend.blog')

@section('content')
	
	@foreach($posts as $post) 
		<div class="row">
			<div class="s12 m4 col ">
				<img src="{{ $post->post_image }}" alt="{{ $post->title }}">
			</div>
			<div class="s12 m8 col">
				<h3><a href="{{ route('postByTitle', ['title' => $post->direct_link]) }}">{{ $post->title }}</a></h3>
				<p>{!! $post->summary !!}</p>
			</div>
		</div>
	@endforeach
	
	{!!$posts->render() !!}
@endsection