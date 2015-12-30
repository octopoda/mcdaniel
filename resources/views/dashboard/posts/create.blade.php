@extends('layouts.app')


@section('content')

	@include('errors.errors')

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Create Post</h1>
		</div>
	</header>


	<section class="dashboard-form">
		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.posts.store', "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.posts._form', ['submitButtonText' => 'Create Post'])
		  {!! Form::close() !!}
	</section>



@endsection