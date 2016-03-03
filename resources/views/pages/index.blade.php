@extends('layouts.frontend.page')

@section('content')
	
	<section class="index__header container">
		<div class="index__header--main">
			<h1>Go Beyond Dieting and Thrive</h1>
		</div>
		
		<div class="index__header--main-text">
			<h4>We&rsquo;re dedicated to your unique possibilities. Whether you’re an individual, athlete, or organization, we want to see you empowered to change</h4>
		</div>

		<div class="index__header--followup-text">
			<p>We’ve worked with thousands of nutrition clients in a range of specialties and bring years of education in the science of dietetics and nutrition to all of our clients. Beyond our credentials, we are marathoners, mothers, wives, entrepreneurs, and foodies ourselves, so we know first-hand what it means to make health a priority in the midst of a busy lifestyle. </p>
		</div>
	</section>

	<section class="container'" style="width:85%; margin:auto">
		
	</section>

	
 <!-- 
	<section class="full-screen-fixed index__weight-loss">
		<div class="full-screen-fixed__image">
			<img src="/assets/images/pages/index-weight-loss.png" alt="weight loss">
		</div>
		<div class="full-screen-fixed__diagonal"></div>
		<div class="full-screen-fixed__text container">
			<h2>Weight Loss</h2>
			<p>Ease your journey to weight loss with personally tailored nutrition and support.</p>
			<a class="btn-flatten hollow waves-effect waves-lighten" href="">Get Your Journey Started</a>
		</div>
	</section>

	
	<section class="full-screen-fixed index__sports-nutrition">
		<div class="full-screen-fixed__diagonal"></div>
		<div class="full-screen-fixed__text container">
			<h2>Sports Nutrition</h2>
			<p>Power up with the fuel you need to compete at higher levels, set new PR's, and build lasting results. </p>
			<a class="btn-flatten hollow waves-effect waves-lighten" href="">Set Your New PR's</a>
		</div>
	</section>


	<section class="full-screen-fixed index__corporate-wellness">
		
		<div class="full-screen-fixed__diagonal"></div>
		<div class="full-screen-fixed__text container">
			<h2>Corporate Wellness</h2>
			<p>Learn what it takes to build a healthy foundation that your company can grow from. </p>
			<a class="btn-flatten hollow waves-effect waves-lighten" href="">Build your Healthy Foundation</a>
		<div class="full-screen-fixed__text container">
	</section>
 -->

	<section class="index__articles container">
			<div class="index__articles--header row">
				<h2>Latest Posts</h2>
				<p>Articles, Videos, and Recipes to help you live happier and healthier</p>
			</div>
	
			<div class="index__articles--articles row" id="articleDisplay">
					@include('layouts.frontend.partials._loading')
			</div>
			

			<div class="index__articles--more">
				<a class="btn-flatten hollow waves-effect waves-green" href=" {{ route('allPosts') }}">Read More Articles</a>
			</div>
	</section>


@endsection