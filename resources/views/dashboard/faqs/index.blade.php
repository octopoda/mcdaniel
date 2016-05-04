@extends('layouts.admin.app')

@section('subnav')
	@include('dashboard.partials._create-new', [
        'title' => 'Faqs', 
        'permission' => 'create_faqs',
        'route' =>  'dashboard.faqs.create' 
    ])
@endsection


@section('content')


	@if (count($faqs) == 0)
		<h4>There are no questions created. </h4>
	@else
		<table class="striped responsive-table">
			<thead>
				<tr>
					<th data-field="Question">Question</th>
					<th data-field="Status">Status</th>
					<th data-field="featured">Featured</th>
					<th data-field="Edit">Edit</th>
				</tr>
			</thead>
			<tbody>

				@foreach ($faqs as $faq) 
					<tr>
						<td>
							@if (Entrust::can('manage_faqs'))
								<a href="{{ route('dashboard.faqs.show', $faq->id) }}" title="See the Faq">{!! $faq->question !!}</a>
							@else
								{{ $faq->question }}
							@endif
						</td>
						<td>{{ $faq->published }}</td>
						<td>
							<a 
								class="faq-star {{ ($faq->stared) ? '' : 'disabled' }}"
								id="faqStarButton"
								data-method="put"
								data-remote="true"
								rel="nofollow"
								href="{{ route('faqStar', ['id' => $faq->id]) }}"
							>
								<i class="material-icons">star</i>
							</a>
						</td>
						
						<td class="button-group">
							@include('dashboard.partials._delete-table', [
                        		'model' => $faq,
                        		'title' => 'Faqs',
                        		'name' => 'faq'
               				])
						</td>
					</tr>
				@endforeach
			</tbody>
		</table>
	@endif
	

	@include('dashboard.partials.pagination', ['paginator' => $faqs])

@endsection