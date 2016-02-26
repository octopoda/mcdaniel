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
		<div style="background:url({{ $post->post_image }}) center center cover no-repeat;" class="dashboard__content--post-background"></div>
		<div>
			<h3>{{ $post->title }}</h3>
			<h5>{{ $post->blog->user->name }} : {{  $post->publish_date }}</h5>
		</div>
		<hr>
		<article>
			{!! $post->content !!}
		</article>
	</div>
</section>

@endsection