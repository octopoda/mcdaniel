@extends('layouts.app')


@section('content')

	<header class="dashboard__section-title">
		<div class="dashboard__section-title__title">
			<h1>Frequent Questions</h1>
		</div>
	</header>


	<div class="">
		@if (count($faqs) == 0)
			<h2>There are no questions created. </h2>
			<div class="button">
				<a href="{{ URL::route('dashboard.faqs.create') }}" class="btn btn-primary btn-block">Create a New Question</a>
			</div>
		@else
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Question</th>
						<th colspan="2"><a href="{{ URL::route('dashboard.faqs.create') }}" class="btn btn-primary btn-block">Create</a></th>
					</tr>
				</thead>
				<tbody>

					@foreach ($faqs as $faq) 
						<tr>
							<td><a href="{{ route('dashboard.faqs.edit', $faq->id) }}">{!! $faq->title !!}</a></td>
							<td>{{ $faq->question }}</td>
							<td width="80"><a class="btn btn-primary" href="{{ URL::route('dashboard.faqs.edit', $faq->id) }}">Edit</a></td>
							<td width="80">
								{!! Form::open(['route' => ['dashboard.faqs.update', $faq->id], 'method' => 'DELETE']) !!}
	                        	{!! Form::submit('Delete', ['class' => 'btn btn-danger', 'onclick' => 'return confirm("Are you sure?");']) !!}
	                        	{!!  Form::close() !!}
	                        </td>
						</tr>
					@endforeach
				</tbody>
			</table>
		@endif
	</div>

	<div>
		{!! $faqs->render() !!}
	</div>

@endsection