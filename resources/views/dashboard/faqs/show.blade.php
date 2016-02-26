@extends('layouts.admin.app')

@section('alert')
	@include('dashboard.partials._isDraft', ['model' => $faq, 'permission' => 'manage_faqs'])
@endsection

@section('subnav')	
	@include('dashboard.partials._show-buttons', ['title' => 'Faqs', 'model' => $faq, 'name' => 'faq', 'publish_perm' => 'manage_faqs' ])
@endsection


@section('content')

	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>{{ $faq->question }}</h1>
			{!! $faq->question !!}
		</div>
	</header>

	

@endsection