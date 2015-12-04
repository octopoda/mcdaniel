@extends('layouts.blog')

@section('content')
	
	<article>	
		<h1>{{ $post->title }}</h1>
		{!! $post->content !!}
	</article>

	
	@if (count($post->category) > 0)
	<section>
		@foreach($post->categories as $category)	
			<li>{{ $category }}</li>
		@endforeach
	</section>
	@endif
	
	
@endsection