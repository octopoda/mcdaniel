<div class="form-group">
	{!! Form::label('title', 'Post Title:') !!}
	{!! Form::text('title', null, ['class'=>'class', 'placeholder'=>'Post Title']) !!}
</div>

<div class="form-group">
	{!! Form::label('content', 'Post Content:') !!}
	{!! Form::textarea('content', null, ['class'=>'class', 'placeholder'=>'', 'id'=>'content']) !!}
</div>


<div class="form-group">
	{!! Form::label('summary', 'Post Summary:') !!}
	{!! Form::textarea('summary', null, ['class'=>'class', 'placeholder'=>'', 'id'=>'summary']) !!}
</div>


<div class="form-group">
	{!! Form::label('publish_date', 'Publish Date:') !!}
	{!! Form::text('publish_date', null, ['class'=> 'class']) !!}
</div>

<div class="form-group">
	{!! Form::label('post_image', 'Post Image:') !!}
	{!! Form::file('post_image', null, ['class'=>'class', 'placeholder'=>'placeholder']) !!}
</div>


<div class="form-group">
	@if ($post->blog->id) 
		{!! Form::hidden('blog_id', null, ['class'=>'class']) !!}
	@endif
	
	{!! Form::submit($submitButtonText , ['class'=>'button']) !!}
</div>
