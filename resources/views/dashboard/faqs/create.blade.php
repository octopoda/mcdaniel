@extends('layouts.app')


@section('content')
	
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Create Question</h1>
		</div>
	</header>


	<section class="dashboard-form">
		 {!! Form::open(['method'=>'POST', 'route'=>'dashboard.faqs.store']) !!}
		 	@include('dashboard.faqs._form', ['submitButtonText' => 'Create Question'])
		  {!! Form::close() !!}
	</section>



@endsection