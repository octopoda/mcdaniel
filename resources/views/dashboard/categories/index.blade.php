@extends('layouts.admin.app')


@section('subnav') 
@include('dashboard.partials._create-new', [
        'title' => 'Categories', 
        'permission' => 'create_posts',
        'route' =>  'dashboard.categories.create' 
    ])
@endsection


@section('content')
	
<table class="striped responsive-table">
	<thead>
		<tr>
			<th data-field="Title">Title</th>
			<th data-field="Search Terms">Search Terms</th>
			<th data-field="Status">Status</th>
			<th data-field="Edit">Edit</th>
		</tr>
	</thead>
	<tbody>
		@foreach ($categories as $category) 
			<?php
				$search_terms = explode(',',  $category->search_terms);
			?>
			<tr>
				<td>{!! $category->title !!}</td>
				<td>
					@foreach($search_terms as $term)
						<span class="chip">{{ $term }}</span>
					@endforeach
				</td>
				<td>{{ $category->published }}</td>

				<td class="button-group">
					@include('dashboard.partials._delete-table', [
	            		'model' => $category,
	            		'title' => 'categories',
	            		'name' => 'category'
	       			])
				</td>
			</tr>
		@endforeach
	</tbody>
</table>


	@include('dashboard.partials.pagination', ['paginator' => $categories])


@endsection