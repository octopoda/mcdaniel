@extends('layouts.frontend.blog')

@section('content')

	<div class="article-search row">
		<div class"article-search__wrapper">
			<h5>Searching For</h5>
			<input type="text" value="{{ $query }}" class="article-search-">
		</div>
	</div>
		
	<div class="article-list row">
		<div class="article-list__categories">
			
			<div class="article-list__topics">
				<h3>Topics</h3>
				<ul>
					<li><a href="/posts/types/recipes">Recipes</a></li>
					<li><a href="/post/types/videos">Videos</a></li>
					@foreach($categories as $category)
						<li>
							<a href="/posts/category/{{ $category->direct_link }}">{{ $category->title }}</a>
						</li>
					@endforeach
				</ul>
			</div>

			<div class="article-list__topics">
				<h3>Authors</h3>
				<ul>
					<li><a href="/posts/types/recipes">Jennifer McDaniel</a></li>
					<li><a href="/post/types/videos">Kaylie Dice</a></li>
				</ul>
			</div>


			<div class="article-list__topics">
				<h3>Dates</h3>
				<ul>
					<li><a href="/posts/types/recipes">2011</a></li>
					<li><a href="/post/types/videos">2012</a></li>
					<li><a href="/post/types/videos">2013</a></li>
					<li><a href="/post/types/videos">2014</a></li>
					<li><a href="/post/types/videos">2015</a></li>
					<li><a href="/post/types/videos">2016</a></li>
				</ul>
			</div>


		</div>

		<div class="article-list__articles">
			<section class="article-list__articles-remaining category row">
				@if(count($posts) == 0) 
					<div class="article-list__none">
						<h3>Sorry we can find no post under that category</h3>
						<p>Please select a different category</p>
					</div>
				@else 
					<?php $nTimes = 1; ?>
					@foreach ($posts as $post)
						<?php  $image = (empty($post->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/'. $nTimes. '.jpg' : $post->post_image; ?>
							<div data-article-small data-title="{{ $post->title }}" data-image="{{ $image }}" data-link="{{ $post->direct_link }}" data-ng-cloak></div>
						<?php $nTimes++ ?>
					@endforeach
				@endif
			</section> 


			<div class="pagination">
				{!! $posts->render() !!}
			</div>
		</div>


	</div>


	@include('layouts.frontend.partials.blog-ad')
	
@endsection
