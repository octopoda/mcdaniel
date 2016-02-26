<header class="dashboard__section-title">
    <div class="dashboard__section-title__title">
       <h3>{{ $submitButtonText }}</h3>
    </div>
</header>


<div class="col s12">

	<div class="row">
		<div class="input-field col s12">
	    	{!! Form::text('name', null, ['class' => 'validate']) !!}
	    	{!! Form::label('name', 'Name') !!}
	    </div>
	</div>

	<div class="row">
		<div class="input-field col s12">
	    	{!! Form::text('display_name', null, ['class' => 'validate']) !!}
	    	{!! Form::label('display_name', 'Display name') !!}
	    </div>
	</div>

	<div class="row">
		<div class="input-field col s12">
	    	{!! Form::text('description', null, ['class' => 'validate']) !!}
	    	{!! Form::label('description', 'Description') !!}
	    </div>
	</div>

	<div class="row">
		<div class="input-field col s12">
	    	{!! Form::text('route', null, ['class' => 'form-control']) !!}
	    	{!! Form::label('route', 'Route') !!}
	    </div>
	</div>

	<div class="row">
	    {!! Form::submit($submitButtonText, ['class' => 'btn dashboard__form-submit']) !!}
	</div>
	
</div>
