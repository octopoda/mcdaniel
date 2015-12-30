@if ($users == false) 
	<h3>There are no Users Approved for Appearances.  You need to go to the Roles section and approve and appearance.</h3>
@else 
	<div class="form-group">
		{!! Form::label('user_id', 'Appearance For:') !!}
		{!! Form::select('user_id',  $users->lists('name', 'id'), $appearance->user_id, ['class'=>'class', 'placeholder'=>'placeholder']) !!}
	</div>

	<div class="form-group">
		{!! Form::label('publication', 'Publication:') !!}
		{!! Form::text('publication', null, ['class'=>'class', 'placeholder'=>'placeholder']) !!}
	</div>

	<div class="form-group">
		{!! Form::label('title', 'Title:') !!}
		{!! Form::text('title', null, ['class'=>'class', 'placeholder'=>'placeholder']) !!}
	</div>

	<div class="form-group">
		{!! Form::label('link', 'Link to Appearance:') !!}
		{!! Form::text('link', null, ['class'=>'class', 'placeholder'=>'placeholder']) !!}
	</div>

	<div class="form-group">
		{!! Form::label('created_at', 'Appearance Date:') !!}
		{!! Form::text('created_at', null, ['class'=>'class', 'placeholder'=>'placeholder']) !!}
	</div>

	<div class="form-input">
		{!! Form::label('video', 'Is there a Video:') !!}
		{!! Form::select('video', ['yes', 'no'], ['class'=>'class', 'placeholder'=>'placeholder']) !!}
	</div>

	<div class="form-group">
		{!! Form::label('video_url', 'Video Url:') !!}
		{!! Form::text('video_url', null, ['class'=>'class', 'placeholder'=>'http://youtube.com/joijas']) !!}
	</div>

	<div class="form-group">
		{!! Form::submit($submitButtonText , ['class'=>'button']) !!}
	</div>
@endif