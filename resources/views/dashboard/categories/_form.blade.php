<div class="form-group">
	{!! Form::label('title', 'Category Title:') !!}
	{!! Form::text('title', null, ['class'=>'class', 'placeholder'=>'Post Title']) !!}
</div>

<div class="form-group">
	<div class="form-group">
		{!! Form::submit($submitButtonText , ['class'=>'button']) !!}
  	</div>
</div>

	