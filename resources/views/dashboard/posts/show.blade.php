@extends('layouts.admin.app')

@section('alert')
	@include('dashboard.partials._isDraft', ['permission' => 'publish_posts', 'model' => $post, 'model_name' => 'post'])
@endsection

@section('subnav')
	@include('dashboard.partials._show-buttons', ['title' => 'Posts', 'model' => $post, 'name' => 'post', 'publish_perm' => 'publish_posts' ])
@endsection

@section('content')
<section class="dashboard__show">
	
	<div class="dashboard__content--show-wrapper">
		
		@if ($post->post_image) 
		<header class="article__header hero" style="background-image:url({{ $post->post_image }})">	
			<h1>{{ $post->title }}</h1>
			<h4 class="article__author">
				<a href="#">{{ $post->blog->user->name }}</a>
				<small>{{ $post->publish_date }}</small>
			</h4>
		</header>
		@else 
			<header class="article__header--no-image">
				<h1>{{ $post->title }}</h1>
					<h4 class="article__author">
						<a href="#">{{ $post->blog->user->name }}</a>
						<small>{{ $post->publish_date }}</small>
					</h4>
			</header>
		@endif
		
		<article class="dashboard__content--content">
			{!! $post->content !!}
		</article>

		
		@if ($post->post_thumbnail)
		
		<div class="dashboard__content--thumbnails">
			 <div class="dashboard__content--thumbnails--large">
			 	<figure class="m-article large">
					<div class="m-article__image" style="background-image:url('{{ $post->post_thumbnail }}')"></div>
					<figcaption class="m-article__text">
						<h2><a href="#">{{ $post->title }}</a></h2>
						<div class="button reverse">
							<a href="#">Read</a>
						</div>
					</figcaption>
				</figure>
			 </div>
		

			<div class="dashboard__content--thumbnails--small">
				<figure class="m-article">
					<div class="m-article__image" style="background-image:url('{{ $post->post_thumbnail }}')"></div>
					<figcaption class="m-article__text">
						<h2><a href="#">{{ $post->title }}</a></h2>
						<div class="button reverse">
							<a href="#">Read</a>
						</div>
					</figcaption>
				</figure>
			</div>
		</div>
		@else 
			<article class="dashboard__content--content">
				<h5>No Images Loaded</h5>
			</article>
		@endif

	</div>
</section>

@endsection