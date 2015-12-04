@extends('layouts.app')


@section('content')
	<div class="">
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Author</th>
					<th>Publish Date</th>
					<th>Status</th>
					<th colspan="2"><a href="{{ URL::route('dashboard.posts.create') }}" class="btn btn-primary btn-block">Create</a></th>
				</tr>
			</thead>
			<tbody>
				@foreach ($posts as $post) 
					<tr>
						<td><a href="{{ route('dashboard.posts.show', $post->id) }}">{{ $post->id }}</a></td>
						<td>{!! $post->title !!}</td>
						<td>{{ $post->blog->user->name }}</td>
						<td>{{ $post->publish_date }}</td>
						<td>{{ $post->draft }}</td>
						<td width="80"><a class="btn btn-primary" href="{{ URL::route('dashboard.posts.edit', $post->id) }}">Edit</a></td>
						<td width="80">
							{!! Form::open(['route' => ['dashboard.posts.update', $post->id], 'method' => 'DELETE']) !!}
                        	{!! Form::submit('Delete', ['class' => 'btn btn-danger', 'onclick' => 'return confirm("Are you sure?");']) !!}
                        	{!!  Form::close() !!}
                        </td>
					</tr>
				@endforeach
			</tbody>
		</table>
	</div>

	<div>
		{!! $posts->render() !!}
	</div>


@endsection