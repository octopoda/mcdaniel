@extends('layouts.frontend.blog')

@section('content')
	
	<div class="container">
		
		<div class="row post-list__header">
			<div class="container">
				<h1>McDaniel Nutrition Blog</h1>
				<h2>Features Of Health</h2>
			</div>
		</div>


		<div class="row">
			<ul class="post-list__types">
				@foreach ($types as $type) 
					<li>{{ $type }}</li>
				@endforeach 
			</ul>
		</div>


		<div class="row">
			<div class="s12 m8 col">
				@foreach ($posts as $post) 
					<div class="post-list__post">
						<h3 class="post-list__title"><a href="{{ route('postByTitle', ['title' => $post->direct_link]) }}">{{ $post->title }}</a></h3>
						<h5 class="post-list__date">{{ $post->publish_date }}</h5>
						
						<div class="post-list__summary">
							{!! $post->summary !!}
						</div>
						
						<a class="btn-flatten hollow waves-effect waves-green post-list__read-button">Read More</a>
					</div>
				@endforeach

				<div class="post-index__pagination">
					{!!$posts->render() !!}
				</div>
			</div>
			<div class="s12 m4 col post-list__categories">
				<ul>
					@foreach($categories as $category) 
						<li><a href="#">{{ $category->title }}</a></li>
					@endforeach
				</ul>
			</div>
		</div>
	</div>
@endsection