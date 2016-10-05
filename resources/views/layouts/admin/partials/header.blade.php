<?php 
	$ex= explode(' ', Auth::user()->name);
	$letters = strtoupper(substr($ex[0], 0, 1) . substr($ex[1], 0, 1));
?>

<div class="col s4">
	<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
</div>

<div class="col s4 center-align">
	<div class="logo">
		<a href="{{ route('dashboard.index') }}">McDaniel Nutrition</a>
	</div>
</div>

<div class="col s4 right-align">
	<a href="#" class="chip dropdown-button" data-activates="logout-dropdown" data-beloworigin="true">{{ $letters }}</a>
	<ul id="logout-dropdown" class="dropdown-content"> 
		<li><a href="{{ url('/auth/logout') }}" title="logout">Logout</a></li>
	</ul>
</div>