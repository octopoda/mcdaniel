@extends('layouts.admin')


@section('content')
	<section>
		<ul>
			<li><a href="{{ route('dashboard.posts.create') }}">New Post</a></li>
		</ul>
	</section>


	
	<div class="">

		<ul>
			@foreach($posts as $post)
				<li><a href="{{ route('dashboard.posts.show', $post->id) }}">{{ $post->title }}</a></li>
			@endforeach
		</ul>	
	</div>


@endsection