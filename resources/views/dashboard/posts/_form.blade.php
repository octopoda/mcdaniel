<div class="form-group">
	{!! Form::label('title', 'Post Title:') !!}
	{!! Form::text('title', null, ['class'=>'class', 'placeholder'=>'Post Title']) !!}
</div>

<div class="form-group">
	{!! Form::label('content', 'Post Content:') !!}
	{!! Form::textarea('content', null, ['class'=>'class', 'placeholder'=>'']) !!}
</div>


<div class="form-group">
	{!! Form::label('summary', 'Post Summary:') !!}
	{!! Form::textarea('summary', null, ['class'=>'class', 'placeholder'=>'']) !!}
</div>


<div class="form-group">
	{!! Form::label('publish_date', 'Publish Date:') !!}
	{!! Form::text('publish_date', "2015-11-12 18:00:00", []) !!}
</div>

<div class="form-group">
	{!! Form::label('post_image', 'Post Image:') !!}
	{!! Form::file('post_image', null, ['class'=>'class', 'placeholder'=>'placeholder']) !!}
</div>


<div class="form-group">
	<div class="form-group">
		{!! Form::submit($submitButtonText , ['class'=>'button']) !!}
  </div>
</div>