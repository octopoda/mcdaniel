@extends('layouts.app')


@section('content')


	<section>
		<a href="{{ route('dashboard.appearances.edit', $appearance->id) }}" class="button small">Edit Appearance</a>
		<a href="{{ route('dashboard.appearances.destroy', $appearance->id) }}" class="button small">Delete Appearance</a>
	</section>
	
	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>{{ $appearance->title }}</h1>
			{{-- <h4>{{ $appearance->user->name }}</h4> --}}
		</div>
	</header>

	
	<section>
		<dl>
			<dd>Appearance Date:</dd>
			<dt>{{ $appearance->created_at }}</dt>
		</dl>
		<dl>
			<dd>Appearance Link:</dd>
			<dt>{{ $appearance->link }}</dt>
		</dl>
	</section>

	<section>
		@if ($appearance->video_url) 
			
		@endif
	</section>



@endsection