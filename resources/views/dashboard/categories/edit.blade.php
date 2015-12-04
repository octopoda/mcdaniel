@extends('layouts.admin')


@section('content')

@include('errors.errors')

		
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Edit {{ $category->title }}</h1>
		</div>
	</header>


	<section class="dashboard-form">
		  {!! Form::model($category, ['method'=>'PATCH', 'route'=>['dashboard.categories.update', $category->id]]) !!}
		 	@include('dashboard.categories._form', ['submitButtonText' => 'Edit Category'])
		  {!! Form::close() !!}
	</section>



@endsection