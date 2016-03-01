@extends('layouts.frontend.blog')

@section('content')
	<article class="article">
		<div class="article__image">
			<div class="article__image--gradient"></div>
			<div class="article__image--image">
				<img src="{{ $post->post_image }}" alt="{{ $post->title }}" >
			</div>
		</div>
		
		<header class="article__header">	
			<h1>{{ $post->title }}</h1>
			<h4><a href="{{ route('postForAuthors', strtolower(str_replace(' ', '-', $post->blog->user->name))) }}">{{ $post->blog->user->name }}</a></h4>
		</header>

		
		<main class="article__content container" id="articleContent">	
			{!!  $post->content !!}
		</main>


		<section class="article__share">
		</section>

		<footer class="article__footer" id="articleFooter">
			<div class="container">
				<div class="row">
					<h3 class="col s12 m6 l4"> Get Fresh Nutrition Articles Delivered to Your Inbox </h3>
					<div class="col s12 m6 l8 article__footer--mailchimp">
						 <form id="mailChimpSubscribe">
						 	<div class="input-field">
								<input type="email" name="email" required placeholder="Enter Your Email Address" class="m8 col">
						 		<button type="submit" class="btn waves-effect waves-light z-depth-1" class="col m4">Subscribe</button>
						 	</div>
						 </form>
					</div>
				</div>
			</div>
		</footer>
	</article>
	
	
@endsection