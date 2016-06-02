<?php
$header = [
	"title" => "Articles for McDaniel Nutrition Therapy",
	"Keywords" => "Nutrition, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition",
	];
?>

@extends('layouts.frontend.blog')


@section('content')

	<!-- Header -->
	<?php $mainImage = (empty($main->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/1.jpg' : $main->post_image; ?>
	<header class="article__header hero" style="background-image:url('{{ $mainImage }}')" itemprop="http://schema.org/Article">	
			<h1 itemprop="headline">{{ $main->title }}</h1>
			<div class="button reverse">
				@if ($main->video == 0)
					<a href="/posts/{{ $main->direct_link }}">Read</a>
				@else
					<a href="/posts/{{ $main->direct_link }}">Watch</a>
				@endif
			</div>
	</header>


	<div class="article-list row">
		@include('layouts.frontend.partials.blog-sidebar', ['categories' => $categories])
		

		@if ($second)
		<div class="article-list__articles">
			<div class="article-list__articles-second row" itemprop="http://schema.org/Article">
				<?php $secondImage = (empty($second->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/2.jpg' : $second->post_image; ?>
				<figure class="m-article large">
					
					<div class="m-article__image" style="background-image:url('{{ $secondImage }}')"></div>
					<figcaption class="m-article__text">
						<h2 itemprop="headline"><a href="/posts/{{ $second->direct_link }}">{{ $second->title }}</a></h2>
						<div class="button reverse">
							@if ($second->video == 0)
								<a href="/posts/{{ $second->direct_link }}">Read</a>
							@else 
								<a href="/posts/{{ $second->direct_link }}">Watch</a>
							@endif
						</div>
					</figcaption>
				</figure>
			</div>
			@endif

			@if($posts)
			<section class="article-list__articles-remaining row">
				<?php $nTimes = 3; ?>
				@foreach ($posts as $post)
					<?php  $image = (empty($post->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/'. $nTimes. '.jpg' : $post->post_image; ?>
						<div data-article-small data-title="{{ $post->title }}" data-image="{{ $image }}" data-link="{{ $post->direct_link }}" data-video="{{ $post->video }}" data-ng-cloak></div>
					<?php $nTimes++ ?>
				@endforeach
			</section> 
			@endif

			<div class="pagination">
				{!! $posts->render() !!}
			</div>
		</div>


	</div>


	@include('layouts.frontend.partials.blog-ad')
	
@endsection


@section('extra-scripts')

@endsection