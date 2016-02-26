@extends('layouts.admin.app')


@section('subnav')
@include('dashboard.partials._create-new', [
        'title' => 'Appearances', 
        'permission' => 'create_appearances',
        'route' =>  'dashboard.appearances.create' 
    ])

@endsection

@section('content')
	
		<table clss="striped responsive-table">
			<thead>
				<tr>
					<th>Title</th>
					<th>Publication</th>
					<th>Dietitian</th>
					<th>Status</th>
					<th colspan="1"></th>
				</tr>
			</thead>
			<tbody>
				@foreach ($appearances as $appearance) 
					<tr>
						<td width="30%">
							@if (Entrust::can('manage_appearances'))
								<a href="{{ route('dashboard.appearances.show', $appearance->id) }}">{{ $appearance->title }}</a>
							@else
								{{ $appearance->title }}
							@endif

						</td>
						<td>{{ $appearance->publication }}</td>
						<td>{{ $appearance->user->name }}</td>
						<td>{{ $appearance->published }}</td>
						<td class="button-group">
							@include('dashboard.partials._delete-table', [
                        		'model' => $appearance,
                        		'title' => 'Appearances',
                        		'name' => 'appearance'
                   			])
                        </td>
					</tr>
				@endforeach
			</tbody>
		</table>
	

	@include('dashboard.partials.pagination', ['paginator' => $appearances])


@endsection