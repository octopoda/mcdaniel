<?php
$header = [
	"title" => "Searching for $query - McDaniel Nutrition Therapy",
	"Keywords" => "$query, Nutrition, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition",
	"navigation_style" => "black"
	];
?>

@extends('layouts.frontend.blog', ['navigation_style' => 'black'])

@section('content')
	<article data-ng-controller="SearchController as vm">
	<div class="article-search row">
		<div class="article-search__wrapper">
			<h5>Searching For:</h5>
			<form action="/search" method="GET" id="searchForm">
				<input type="text" value="{{ $query }}" name="q" id="q">
				<button> <i class="material-icons">search</i> </button>
			</form>
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
					@foreach ($authors as $author)
						<li><a href="{{ route("postForAuthors", str_replace(' ', '-', $author->user->name)) }}">{{ $author->user->name }}</a></li> 
					@endforeach
				</ul>
			</div>


			<div class="article-list__topics">
				<h3>Dates</h3>
				<ul>
					@foreach ($dates as $date)
						<li><a href="{{ route('postByDate', $date) }}">{{ $date }}</a></li>
					@endforeach
				</ul>
			</div>


		</div>

		<div class="article-list__articles">
			<section class="article-list__articles-remaining category row">
				@if(count($posts) == 0) 
					<div class="article-list__none">
						<h3>Sorry there are no post for that search term</h3>
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
	</article>

	@include('layouts.frontend.partials.blog-ad')
	
@endsection
