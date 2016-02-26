@extends('layouts.admin.app')

@section('subnav') 
	@include('dashboard.partials._create-new', [
        'title' => 'Posts', 
        'permission' => 'create_posts',
        'route' =>  'dashboard.posts.create' 
    ])
@endsection

@section('content')
	<table class="striped responsive-table">
		<thead>
			<tr>
				<th data-field="title">Title</th>
				<th data-field="author">Author</th>
				<th data-field="publish date">Publish Date</th>
				<th data-feild="status">status</th>
				<th data-field="edit"></th>
				
			</tr>
		</thead>
		<tbody>
			@foreach ($posts as $post) 
				<tr>
					<td width="40%">
						@if (Entrust::can('manage_posts'))
							<a href="{{ route('dashboard.posts.show', $post->id) }}" title="See the Post">{!! $post->title !!}</a>
						@else
						{{ $post->title }}
						@endif
					</td>
					<td>{{ $post->blog->user->name }}</td>
					<td>{{ $post->publish_date }}</td>
					<td>{{ $post->published }}</td>
					<td class="button-group">
						@include('dashboard.partials._delete-table', [
                    		'model' => $post,
                    		'title' => 'Posts',
                    		'name' => 'post'
               			])
					</td>
				</tr>
			@endforeach
		</tbody>
	</table>
	

	@include('dashboard.partials.pagination', ['paginator' => $posts])


@endsection