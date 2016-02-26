

<header class="dashboard__section-title row">
	<div class="dashboard__form--title col s8">
		<h3>{{ $submitButtonText }}</h3>
	</div>
	
	<div class="col s4 dashboard__form--publish-switch">
			<div class="switch">
			<label>
				Draft
				<input type="checkbox" {{ (Entrust::can('manage_product')) ? '' : 'disabled' }}  {{ (isset($product) && $product->isPublished()) ? 'checked' : '' }} name="published" value="1"><span class="lever"></span>
				Published
			</label>
		</div>
	</div>
</header>

<div class="row col s12">
	<div class="row">
		<div class="s12 col input-field">
			{!! Form::text('title', null, ['class'=>'validate']) !!}
			{!! Form::label('title', 'Title:') !!}
		</div>
	</div>


	<div class="row">
		<div class="file-field input-field">
	      	<div class="btn blue">
	        	<span><i class="material-icons right">cloud</i> Upload Product File</span>
	        	<input type="file" name="url" id="url">
	      	</div>
	      	<div class="file-path-wrapper">
		        <input class="file-path validate" type="text">
	    	</div>
    	</div>
	</div>

	<div class="row">
		{!! Form::label('description', 'Description:', ['class' => 'dashboard__form--ta-label']) !!}
		<div class="s12 col input-field">
			{!! Form::textarea('description', null, ['class'=>'redactor']) !!}
		</div>
	</div>

	<div class="row">
		<div class="s12 col input-field">
			{!! Form::text('price', null, ['class'=>'']) !!}
			{!! Form::label('price', 'Price:') !!}
		</div>
	</div>

	<div class="row">
		<div class="s12 col input-field">
			{!! Form::text('paypal_url', null, ['class'=>'']) !!}
			{!! Form::label('paypal_url', 'Paypal Email Url:') !!}
		</div>
	</div>

	<div class="row">
		<div class="file-field input-field">
	      	<div class="btn blue">
	        	<span><i class="material-icons right">cloud</i> Upload Product Image</span>
	        	<input type="file" name="product_image" id="product_image">
	      	</div>
	      	<div class="file-path-wrapper">
		        <input class="file-path validate" type="text">
	    	</div>
    	</div>
	</div>

	
	<div class="row">
		<div class="s12 col input-field">
			{!! Form::text('product_url', null, ['class'=>'validate']) !!}
			{!! Form::label('product_url', 'Product URL:') !!}
		</div>
	</div>

	<div class="row center-align">
		{!! Form::submit($submitButtonText , ['class'=>'btn waves-effect dashboard__form--submit']) !!}
	</div>
</div>