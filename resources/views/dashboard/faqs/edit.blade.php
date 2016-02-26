@extends('layouts.admin.app')

@section('subnav') 
@endsection


@section('content')
	<section class="dashboard__form">
	 {!! Form::model($faq, ['route'=>['dashboard.faqs.update', $faq->id], 'method'=>'PATCH']) !!}
	 	@include('dashboard.faqs._form', ['submitButtonText' => 'Edit Question'])
	  {!! Form::close() !!}
	</section>

@endsection



@section('extra-scripts')
	@include('dashboard.partials.redactorScripts')
@endsection