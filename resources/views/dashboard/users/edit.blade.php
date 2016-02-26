@extends('layouts.admin.app')


@section('subnav')
	
@endsection

@section('content')

	@include('errors.errors')

	<section class="dashboard__form">
		 {!! Form::model($user, ['method'=>'PATCH', 'route'=>['dashboard.users.update', $user->id]]) !!}
		 	@include('dashboard.users._form', ['submitButtonText' => 'Edit User'])
		  {!! Form::close() !!}
	</section>



@endsection