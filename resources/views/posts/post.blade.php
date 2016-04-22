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
		<?php $mainImage = (empty($main->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/' . rand(1, 25) . '.jpg' : $main->post_image; ?>
		<header class="article__header hero" style="background-image:url({{ $mainImage }})">	
			<h1>{{ $post->title }}</h1>
			<h4 class="article__author">
				<a href="{{ route('postForAuthors', strtolower(str_replace(' ', '-', $post->blog->user->name))) }}">{{ $post->blog->user->name }}</a>
				<small>{{ $post->publish_date }}</small>
			</h4>
			
		</header>

		
		<main class="article__content container" id="articleContent">	
			<div class="article__content--content row">
				{!!  $post->content !!}
			</div>
		</main>


		<section class="article__also row">
			<h3>You Might Also Like</h3>
			<div class="article__also--articles">
				<?php $nTimes = 17; ?>
				@foreach ($random as $p)
					<?php  $image = (empty($p->post_image)) ? 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/'. $nTimes. '.jpg' : $p->post_image; ?>
					<figure class="m-article">
						<div class="m-article__image" style="background-image:url('{{ $image }}')"></div>
						<figcaption class="m-article__text">
							<h2><a href="/posts/{{ $p->direct_link }}">{{ $p->title }}</a></h2>
							<div class="button reverse">
								<a href="/posts/{{ $p->direct_link }}">Read</a>
							</div>
						</figcaption>
					</figure>
					<?php $nTimes++ ?>
				@endforeach
			</div>
		</section>

		<footer class="article__footer" id="articleFooter">
			<div class="article__footer--close phone-only"><i class="material-icons">close</i></div>
			<div class="row">
				<h4 class="article__footer--title"> Get Fresh Nutrition Articles<small> Delivered to Your Inbox</small> </h4>
				<div class="article__footer--mailchimp">
					 <form id="mailChimpSubscribe">
					 	<div class="input-field">
							<input type="email" name="email" required placeholder="Enter Your Email Address" class="m8 col">
					 		<button type="submit" class="btn waves-effect waves-light z-depth-1" class="col m4">Subscribe</button>
					 	</div>
					 </form>
				</div>
			</div>
		</footer>
	</article>
	
	
@endsection

@section('extra-scripts')

@endsection