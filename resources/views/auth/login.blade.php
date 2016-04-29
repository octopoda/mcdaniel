@extends('layouts.frontend.page')

@section('content')
	<div class="about__hero hero">
		<section class="row">
			<h1>Login</h1>
		</section>
	</div>

	<div class="m-login">
		
		<div class="m-login__errors row">
			@if (count($errors) > 0)
				<div class="errors">
					<ul>
						@foreach ($errors->all() as $error)
							<li>{{ $error }}</li>
						@endforeach
					</ul>
				</div>
			@endif
		</div>
		
		<section class="m-login__form row">
			<h3>Login into System</h3>
			<form class="form-horizontal" role="form" method="POST" action="{{ url('/auth/login') }}">
				<input type="hidden" name="_token" value="{{ csrf_token() }}">

				<div class="form-group">
					<label>E-Mail Address</label>
					<input type="email" class="form-control" name="email" value="{{ old('email') }}">
				</div>

				<div class="form-group">
					<label>Password</label>
					<input type="password" class="form-control" name="password" required>
				</div>

				<div class="form-group">
					<input type="checkbox" class="" name="remember" id="remember">
					<label for="remember">Remember Me</label>
					
				</div>

				<div class="form-group">
						<button type="submit" class="button green">Login</button>
						<a href="{{ url('/password/email') }}">Forgot Your Password?</a>
					</div>
				</div>
			</form>
		</section>
	</div>

@endsection
