@extends('layouts.admin.app')

@section('content')

	@include('errors.errors')

	<section class="dashboard-form">
		 {!! Form::model($post, ['route'=>['dashboard.posts.update', $post->id], 'method'=>'PATCH',  "enctype"=>"multipart/form-data"]) !!}
		 	@include('dashboard.posts._form', ['submitButtonText' => 'Edit Post'])
		  {!! Form::close() !!}
	</section>



@endsection


@section('extra-scripts')
	@include('dashboard.partials.redactorScripts')
@endsection