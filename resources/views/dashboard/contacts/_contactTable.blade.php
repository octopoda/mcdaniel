<table clss="striped responsive-table">
	<thead>
		<tr>
			<th>Email</th>
			<th>Customer Name</th>
			<th>Contact Time</th>
			<th>Interested Service</th>
			<th>Status</th>
		</tr>
	</thead>
	<tbody>
		@foreach ($contacts as $contact) 
			<tr>
				<td width="30%">
					<a href="{{ route('dashboard.contacts.show', $contact->id) }}">{{ $contact->email }}</a>
				</td>
				<td>
					@if(isset($contact->message['customerName']))
						{{ $contact->message['customerName'] }}
					@else
						No Name Submitted
					@endif
				</td>
				<td>{{ date('M d Y - h:i:s A', strtotime($contact->created_at)) }}</td>
				<td>
					@if (isset($contact->message['service']))
						{{ $contact->message['service']['name'] }}
					@elseif (isset($contact->message['serviceType']))
						{{ $contact->message['serviceType'] }}
					@elseif(isset($contact->message['interestedService']))
						{{ $contact->message['interestedService'] }}
					@else 
						No Service Selected
					@endif
				</td>
				<td>
					@if ($contact->status != "Sent") 
						{{ $contact->status }}
					@endif
				</td>
			</tr>
		@endforeach
	</tbody>
</table>