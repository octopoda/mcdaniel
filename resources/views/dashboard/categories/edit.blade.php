@extends('layouts.admin.app')


@section('alert')
	@include('dashboard.partials._isDraft', ['permission' => 'publish_category', 'model' => $category, 'model_name' => 'category'])
@endsection


@section('content')

	@include('errors.errors')

	<section class="dashboard__form">
		  {!! Form::model($category, ['method'=>'PATCH', 'route'=>['dashboard.categories.update', $category->id], "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.categories._form', ['submitButtonText' => 'Edit Category'])
		  {!! Form::close() !!}
	</section>



@endsection