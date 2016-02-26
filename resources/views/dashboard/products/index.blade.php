@extends('layouts.admin.app')

@section('subnav')
		@include('dashboard.partials._create-new', [
        'title' => 'Products', 
        'permission' => 'create_products',
        'route' =>  'dashboard.products.create' 
    ])

@endsection


@section('content')

	
		<table class="striped responsive-table">
			<thead>
				<tr>
					<th data-field="Product">Product</th>
					<th data-field="Product Id">Product Id</th>
					<th data-field="Price">Price</th>
					<th data-field="Edit">Edit</th>
				</tr>
			</thead>
			<tbody>
				@foreach ($products as $product) 
					<tr>
						<td>
							@if (Entrust::can('manage_faqs'))
								<a href="{{ route('dashboard.products.show', $product->id) }}">{!! $product->title !!}</a>
							@endif
						</td>
						<td>{{ $product->id }}</td>
						<td>${{ $product->price }}</td>
						<td class="button-group">
							@include('dashboard.partials._delete-table', [
                        		'model' => $product,
                        		'title' => 'Products',
                        		'name' => 'product'
                   			])
					</tr>
				@endforeach
			</tbody>
		</table>
	</div>

	@include('dashboard.partials.pagination', ['paginator' => $products])

@endsection