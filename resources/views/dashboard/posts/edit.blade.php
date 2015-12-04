@extends('layouts.app')


@section('content')

	@include('errors.errors')

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Edit {{ $post->title }}</h1>
		</div>
	</header>


	<section class="dashboard-form">
		 {!! Form::model($post, ['route'=>['dashboard.posts.update', $post->id], 'method'=>'PATCH',  "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.posts._form', ['submitButtonText' => 'Edit Post'])
		  {!! Form::close() !!}
	</section>



@endsection