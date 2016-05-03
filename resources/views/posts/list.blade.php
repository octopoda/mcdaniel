@extends('layouts.frontend.blog')

@section('content')
	

	

	@if (isset($category))
		<!-- Header -->
		<?php $mainImage = (empty($category->category_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/'. rand(1, 23) .'.jpg' : $category->category_image; ?>
		<header class="article__header hero category" style="background-image:url('{{ $mainImage }}')">	
			<h5>Topic</h5>
			<h1>{{ $category->title }}</h1>
		</header>
	@else 
		<!-- Header -->
		<?php $mainImage = 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/'. rand(1, 23) .'.jpg'; ?>
		<header class="article__header hero category" style="background-image:url('{{ $mainImage }}')">	
			<h5>Topic</h5>
			<h1>{{ ucwords($type) }}</h1>
		</header>
	@endif

	<div class="article-list row">
		@include('layouts.frontend.partials.blog-sidebar', ['categories' => $categories])

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