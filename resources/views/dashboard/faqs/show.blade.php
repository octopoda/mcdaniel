@extends('layouts.app')


@section('content')

	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>{{ $faq->question }}</h1>
			{!! $faq->question !!}
		</div>
	</header>

	

@endsection