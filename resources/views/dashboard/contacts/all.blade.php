@extends('layouts.admin.app')

@section('subnav')
 
<div class="dashboard__subnav-title s8 col">
    <h3>Recent Contacts with Tests</h3>
</div>
<div class="dashboard__subnav--create s4 col right-align">
    <a href="{{ route('dashboard.contacts.index') }}">See non-tested Contacts</a>
</div>
@endsection

@section('content')
		
	@include('dashboard.contacts._contactTable', ['contacts' => $contacts])	
	@include('dashboard.partials.pagination', ['paginator' => $contacts])
@endsection