@extends('layouts.frontend.blog')


@section('content')

	<!-- Header -->
	<?php $mainImage = (empty($main->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/1.jpg' : $main->post_image; ?>
	<header class="article__header hero" style="background-image:url('{{ $mainImage }}')">	
			<h1>{{ $main->title }}</h1>
			<div class="button reverse">
				<a href="/posts/{{ $main->direct_link }}">Read</a>
			</div>
	</header>


	<div class="article-list row">
		<div class="article-list__categories">
			<div class="article-list__search">
				<a href="#">Search Posts <i class="material-icons">search</i></a>
			</div>
			<div class="article-list__topics">
				<h3>Topics</h3>
				<ul>
					@foreach($categories as $category)
						<li>
							<a href="/posts/category/{{ $category->direct_link }}">{{ $category->title }}</a>
						</li>
					@endforeach
				</ul>
			</div>
		</div>

		<div class="article-list__articles">
			<div class="article-list__articles-second row">
				<?php $secondImage = (empty($second->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/2.jpg' : $second->post_image; ?>
				<figure class="m-article large">
					
					<div class="m-article__image" style="background-image:url('{{ $secondImage }}')"></div>
					<figcaption class="m-article__text">
						<h2><a href="/posts/{{ $second->direct_link }}">{{ $second->title }}</a></h2>
						<div class="button reverse">
							<a href="/posts/{{ $second->direct_link }}">Read</a>
						</div>
					</figcaption>
				</figure>
			</div>
			<section class="article-list__articles-remaining row">
				<?php $nTimes = 3; ?>
				@foreach ($posts as $post)
					<?php  $image = (empty($post->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/'. $nTimes. '.jpg' : $post->post_image; ?>
						<div data-article-small data-title="{{ $post->title }}" data-image="{{ $image }}" data-link="{{ $post->direct_link }}" data-ng-cloak></div>
					<?php $nTimes++ ?>
				@endforeach
			</section> 


			<div class="pagination">
				{!! $posts->render() !!}
			</div>
		</div>


	</div>


	@include('layouts.frontend.partials.blog-ad')
	
@endsection


@section('extra-scripts')
<!-- 	<script type="text/javascript" async defer src="//assets.pinterest.com/js/pinit.js"></script>
	<script type="text/javascript">
		$(document).ready(function () {
			var pinButton = $('.pinterestButton');
			pinButton.on('click', function (e) {
				PinUtils.pinOne({
					'media': pinButton.attr('data-pin-media'),
					'description': pinButton.attr('data-pin-description'),
					'url' : 'https://' + pinButton.attr('data-pin-url')
				});
			});


			// var pinOneButton = document.querySelector('.pinIt');
		 //    pinOneButton.addEventListener('click', function() {
		 //        PinUtils.pinOne({
		 //            media: e.target.getAttribute('data-media'),
		 //            description: e.target.getAttribute('data-description')
		 //        });
		 //    });

		});
	</script> -->
@endsection