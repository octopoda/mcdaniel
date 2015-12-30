@extends('layouts.app')


@section('content')
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Edit Question: {{ $faq->question }}</h1>
		</div>
	</header>


	<section class="dashboard-form">
	 {!! Form::model($faq, ['route'=>['dashboard.faqs.update', $faq->id], 'method'=>'PATCH']) !!}
	 	@include('dashboard.faqs._form', ['submitButtonText' => 'Edit Question'])
	  {!! Form::close() !!}
	</section>



@endsection