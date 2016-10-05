@extends('layouts.admin.app')


@section('subnav')
	
@endsection


@section('content')

	<div class="row">
		<div class="col l6 m12 s12">
			 <h4>Trending Posts (90 Days)</h4>
			 <table class="striped responsive-table">
		        <thead>
		        <tr>
		            <th data-field="Post Title">Post Title</th>
		            <th data-field="Reads">Reads</th>
		        </tr>
		        </thead>
		        <tbody>
		        @foreach($trendingPosts as $post)
		            <tr>
		                <td><a href="{{ route('dashboard.posts.show', $post->id) }}">{{ $post->title }}</a></td>
		                <td>{{ $post->reads }}</td>
		            </tr>
		        @endforeach
		        </tbody>
		    </table>
		</div>

		<div class="col l6 m12 s12">
			 <h4>Top Read Posts (all-time)</h4>
			 <table class="striped responsive-table">
		        <thead>
		        <tr>
		            <th data-field="Post Title">Post Title</th>
		            <th data-field="Reads">Reads</th>
		        </tr>
		        </thead>
		        <tbody>
		        @foreach($topPosts as $post)
		            <tr>
		                <td><a href="{{ route('dashboard.posts.show', $post->id) }}">{{ $post->title }}</a></td>
		                <td>{{ $post->reads }}</td>
		            </tr>
		        @endforeach
		        </tbody>
		    </table>
		</div>
	</div>

	
	<div class="row" style="margin-top:90px;">
		<div class="col l6 m12 s12">
			 <h4 style="float:left;">Latest Contacts</h4>
			  <a 
				class="test-email"
				id="testEmail"
				data-method="get"
				data-remote="true"
				rel="nofollow"
				href="{{ route('testEmail') }}"
				style="float:right; color:white; background:#78A22E; padding:8px 6px 8px 6px;"
			 >Test Email</a>
			 <table class="striped responsive-table" style="clear:both">
		        <thead>
		        <tr>
		            <th data-field="Email">Email</th>
		            <th data-field="Date Contacted">Date Contacted</th>
		        </tr>
		        </thead>
		        <tbody>
		        @foreach($latestContacts as $contact)
		            <tr>
		                <td><a href="#">{{ $contact->email }}</a></td>
		                <td>{{ date('M d Y - h:i:s A', strtotime($contact->created_at)) }}</td>
		            </tr>
		        @endforeach
		        </tbody>
		    </table>
		</div>

		<div class="col l6 m12 s12">
			 <h4>Latest Transaction</h4>
			
			 <table class="striped responsive-table">
		        <thead>
		        <tr>
		            <th data-field="Email">Email</th>
		            <th data-field="Date Contacted">Date Sold</th>
		            <th data-field="Date Contacted">Total</th>
		        </tr>
		        </thead>
		        <tbody>
		        @foreach($latestTransactions as $transaction)
		            <tr>
		                <td><a href="{{ route('transactionDetail', $transaction->id) }}">{{ $transaction->email }}</a></td>
		                <td>{{ date('M d Y - h:i:s A', strtotime($transaction->created_at)) }}</td>
		                <td>{{ $transaction->total }}</td>
		            </tr>
		        @endforeach
		        <tr>
		        	<td colspan="2">Store Total Income</td>
		        	<td>${{ number_format($totalIncome, 2) }}</td>
		        </tr>
		        </tbody>
		    </table>
		</div>
	</div>

	<!-- <div class="row">
		<div class="col l12 m12">
			<h4>Other Info</h4>
			<ul>
				<li><span></span></li>
			</ul>
		</div>

	</div> -->



@endsection