@extends('layouts.admin')


@section('content')

	@if ($post->draft) 
		<section class="dashboard__draft-flash">
			<div>Draft Mode</div>
			<div>
				<a href="">Publish Article</a>
			</div>
		</section>
	@endif

	<section>
		<a href="{{ route('dashboard.posts.edit', $post->id) }}" class="button small">Edit Post</a>
		<a href="{{ route('dashboard.posts.destroy', $post->id) }}" class="button small">Delete Post</a>
	</section>
	
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>{{ $post->title }}</h1>
			<h4>{{ $author->name }}</h4>
		</div>
	</header>

	<article>
		{!! $post->content !!}
	</article>
	
	<ul>
		@foreach($post->categories as $category) 
			<li>{{ $category->title}}</li>
		@endforeach 
	</ul>



@endsection