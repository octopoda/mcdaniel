<div class="form-group">
	{!! Form::label('question', 'Question:') !!}
	{!! Form::text('question', null, ['class'=>'class', 'placeholder'=>'placeholder']) !!}
</div>


<div class="form-group">
	{!! Form::label('answer', 'Answer:') !!}
	{!! Form::textarea('answer', null, ['class'=>'class', 'placeholder'=>'placeholder']) !!}
</div>


<div class="form-group">
	{!! Form::label('published', 'Published:') !!}
	{!! Form::select('published', ['yes', 'no'], 1,  ['class'=>'class', 'placeholder'=>'placeholder']) !!}
</div>


<div class="form-group">
	{!! Form::submit($submitButtonText , ['class'=>'button']) !!}
</div>
