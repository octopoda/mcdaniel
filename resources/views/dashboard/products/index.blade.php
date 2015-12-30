@extends('layouts.app')


@section('content')

	<div class="">
		<table>
			<thead>
				<tr>
					<th>Product Id</th>
					<th>Product</th>
					<th>Price</th>
					<th colspan="2"><a href="{{ URL::route('dashboard.products.create') }}" class="btn btn-primary btn-block">Create</a></th>
				</tr>
			</thead>
			<tbody>
				@foreach ($products as $product) 
					<tr>
						<td>{{ $product->id }}</a></td>
						<td><a href="{{ route('dashboard.products.show', $product->id) }}">{!! $product->title !!}</a></td>
						<td>{{ $product->price }}</td>
						<td width="80"><a class="btn btn-primary" href="{{ URL::route('dashboard.products.edit', $product->id) }}">Edit</a></td>
						<td width="80">
							{!! Form::open(['route' => ['dashboard.products.update', $product->id], 'method' => 'DELETE']) !!}
                        	{!! Form::submit('Delete', ['class' => 'btn btn-danger', 'onclick' => 'return confirm("Are you sure?");']) !!}
                        	{!!  Form::close() !!}
                        </td>
					</tr>
				@endforeach
			</tbody>
		</table>
	</div>

	<div>
		{!! $products->render() !!}
	</div>

@endsection