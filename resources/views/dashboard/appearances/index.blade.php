@extends('layouts.app')


@section('content')
	<div class="">
		<table>
			<thead>
				<tr>
					<th>Title</th>
					<th>Publication</th>
					<th>Dietitian</th>
					<th>Status</th>
					<th colspan="2"><a href="{{ URL::route('dashboard.appearances.create') }}" class="btn btn-primary btn-block">Create</a></th>
				</tr>
			</thead>
			<tbody>
				@foreach ($appearances as $appearance) 
					<tr>
						<td><a href="{{ route('dashboard.appearances.show', $appearance->id) }}">{{ $appearance->title }}</a></td>
						<td>{{ $appearance->publication }}</td>
						<td>{{ $appearance->user->name }}</td>
						<td>{{ $appearance->published }}</td>

						<td width="80"><a class="btn btn-primary" href="{{ URL::route('dashboard.appearances.edit', $appearance->id) }}">Edit</a></td>
						<td width="80">
							{!! Form::open(['route' => ['dashboard.appearances.update', $appearance->id], 'method' => 'DELETE']) !!}
                        	{!! Form::submit('Delete', ['class' => 'btn btn-danger', 'onclick' => 'return confirm("Are you sure?");']) !!}
                        	{!!  Form::close() !!}
                        </td>
					</tr>
				@endforeach
			</tbody>
		</table>
	</div>

	<div>
		{!! $appearances->render() !!}
	</div>


@endsection