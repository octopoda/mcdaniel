<?php 
	$header = [
		"title" => $post->title,
		"description" => $post->summary,
		"fixed" => true
	];

?>

@extends('layouts.frontend.blog', compact('header'))

@section('content')

	<article class="article">
		<?php $mainImage = (empty($post->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/' . rand(1, 25) . '.jpg' : $post->post_image; ?>
		<header class="article__header hero" style="background-image:url({{ $mainImage }})">	
			<h1>{{ $post->title }}</h1>
			<h4 class="article__author">
				<a href="{{ route('postForAuthors', strtolower(str_replace(' ', '-', $post->blog->user->name))) }}">{{ $post->blog->user->name }}</a>
				<small>{{ $post->publish_date }}</small>
			</h4>

			<ul class="article__share-links">
				<li data-facebook-share data-title="{{ $post->title }}"><i class="fa fa-facebook"></i></li>
				<li data-twitter-share data-title="{{ $post->title }}"><i class="fa fa-twitter"></i></li>
				<li data-pinterest-share data-title="{{ $post->title }}" data-media="{{ $post->post_facebook }}"><i class="fa fa-pinterest"></i></li>
				<li data-linkedin-share data-title="{{ $post->title }}" data-summary="{{ $post->summary }}"><i class="fa fa-linkedin"></i></li>
			</ul>
			
		</header>

		@if ($post->video == 1)
			<main class="article__content--video container" id="articleContent">	
				<div class="video-container">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/{{ $post->video_url }}" frameborder="0" allowfullscreen></iframe>
				</div>
			</main>
		@else
			<main class="article__content container" id="articleContent">	
				<div class="article__content--content row">
					{!!  $post->content !!}
				</div>
			</main>
		@endif

		<section class="article__also row">
			<h3>You Might Also Like</h3>
			<div class="article__also--articles">
				<?php $nTimes = 17; ?>
				@foreach ($random as $p)
					<?php  $image = (empty($p->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/'. $nTimes. '.jpg' : $p->post_image; ?>
					<div data-article-small data-title="{{ $p->title }}" data-image="{{ $image }}" data-link="{{ $p->direct_link }}" data-ng-cloak></div>
					<?php $nTimes++ ?>
				@endforeach
			</div>
		</section>

		<div data-footer-rollup></div>
	</article>
	
	
@endsection

@section('extra-scripts')
	
@endsection