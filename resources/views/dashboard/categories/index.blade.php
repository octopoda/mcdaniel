@extends('layouts.admin')


@section('content')
	<section>
		<ul>
			<li><a href="{{ route('dashboard.categories.create') }}">New Category</a></li>
		</ul>
	</section>


	
	<div class="">

		<ul>
			@foreach($categories as $category)
				<li>
					<a href="{{ route('dashboard.categories.edit', $category->id) }}">{{ $category->title }}</a>
					<ul>
						<li class="button--delete transparent">
							 {!! Form::open(['method'=>'DELETE', 'route' => ['dashboard.categories.destroy', $category->id]]) !!}
							 		{!! Form::submit('Delete', ['class' => 'transparent']) !!}
							  {!! Form::close() !!}
						</li>
					</ul>
				</li>
			@endforeach
		</ul>	
	</div>


@endsection