@extends('layouts.admin')


@section('content')

	@if ($errors->any())
		<ul>
			@foreach($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	@endif

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Edit {{ $post->title }}</h1>
		</div>
	</header>


	<section class="dashboard-form">
		 {!! Form::model($post, ['method'=>'POST', 'route'=>'dashboard.posts.update', "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.posts._form', ['submitButtonText' => 'Edit Post'])
		  {!! Form::close() !!}
	</section>



@endsection