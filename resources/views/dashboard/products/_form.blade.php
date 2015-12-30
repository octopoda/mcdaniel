<div class="form-group">
	{!! Form::label('title', 'Title:') !!}
	{!! Form::text('title', null, ['class'=>'', 'placeholder'=>'']) !!}
</div>

<div class="form-group">
	{!! Form::label('description', 'Description:') !!}
	{!! Form::textarea('description', null, ['class'=>'', 'placeholder'=>'']) !!}
</div>

<div class="form-group">
	{!! Form::label('price', 'Price:') !!}
	{!! Form::text('price', null, ['class'=>'', 'placeholder'=>'']) !!}
</div>

<div class="form-group">
	{!! Form::label('paypal_url', 'Paypal Email Url:') !!}
	{!! Form::text('paypal_url', null, ['class'=>'', 'placeholder'=>'']) !!}
</div>



<div class="form-group">
	{!! Form::label('product_image', 'Product Image:') !!}
	{!! Form::file('product_image', null, ['class'=>'class', 'placeholder'=>'placeholder']) !!}
</div>


<div class="form-group">
	{!! Form::label('product_download', 'Upload Porduct:') !!}
	{!! Form::file('product_download', null, ['class'=>'', 'placeholder'=>'']) !!}
</div>

<div class="form-group">
	{!! Form::label('product_url', 'Product Url:') !!}
	{!! Form::text('product_url', null, ['class'=>'', 'placeholder'=>'']) !!}
</div>

<div class="form-group">
	{!! Form::submit($submitButtonText , ['class'=>'button']) !!}
</div>
