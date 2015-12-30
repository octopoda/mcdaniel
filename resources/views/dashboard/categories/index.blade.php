@extends('layouts.app')


@section('content')
	<div class="">
		<table>
			<thead>
				<tr>
					<th>Title</th>
					<th>Status</th>
					<th colspan="2"><a href="{{ URL::route('dashboard.categories.create') }}" class="btn btn-primary btn-block">Create</a></th>
				</tr>
			</thead>
			<tbody>
				@foreach ($categories as $category) 
					<tr>
						<td><a href="{{ route('dashboard.categories.edit', $category->id) }}">{!! $category->title !!}</a></td>
						<td>{{ $category->published }}</td>
						<td width="80"><a class="btn btn-primary" href="{{ URL::route('dashboard.categories.edit', $category->id) }}">Edit</a></td>
						<td width="80">
							{!! Form::open(['route' => ['dashboard.categories.update', $category->id], 'method' => 'DELETE']) !!}
                        	{!! Form::submit('Delete', ['class' => 'btn btn-danger', 'onclick' => 'return confirm("Are you sure?");']) !!}
                        	{!!  Form::close() !!}
                        </td>
					</tr>
				@endforeach
			</tbody>
		</table>
	</div>

	<div>
		{!! $categories->render() !!}
	</div>


@endsection