@extends('layouts.admin.app')

@section('subnav')
	<a href="{{ route('dashboard.contacts.index') }}"><i class="material-icons" style="position:relative; top:5px;">keyboard_backspace</i> BACK</a>
@endsection

@section('content')
	<style>
		strong {
			font-weight:bold;
		}
	</style>
	<?php $message = json_decode($contact->message, true); ?>
	<section class="dashboard__show">
	
	<div class="dashboard__content--show-wrapper">
		<h1>{{ $message['customerName'] }}</h1>
		<p><strong>Contact Time:</strong> {{ date('M d Y - h:i:s A', strtotime($contact->created_at)) }}</p>
		
		<h3>Message</h3>
		@foreach($message as $k=>$v) 
			
			@if(is_array($v))
				@foreach($v as $a=>$b)
					<p><strong>{{ $a }}:</strong> {{ $b }}</p>
				@endforeach
			@else 
				<p><strong>{{ $k }}:</strong> {{ $v }}</p>
			@endif
		@endforeach



	</div>
</section>

@endsection