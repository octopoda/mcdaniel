<header class="dashboard__section-title row">
	<div class="dashboard__form--title col s8">
		<h3>{{ $submitButtonText }}</h3>
	</div>
	
	<div class="col s4 dashboard__form--publish-switch">
			<div class="switch">
			<label>
				Draft
				<input type="checkbox" {{ (Entrust::can('manage_faqs')) ? '' : 'disabled' }}  {{ (isset($faq) && $faq->isPublished()) ? 'checked' : '' }} name="published" value="1"><span class="lever"></span>
				Published
			</label>
		</div>
	</div>
</header>



<div class="row col s12">
	<div class="row">
		<div class="input-field col s12">
			{!! Form::text('question', null, ['class'=>'validate', 'placeholder'=>'Frequently asked question ']) !!}
			{!! Form::label('question', 'Question:') !!}
		</div>
	</div>


	<div class="row">
		<div class="input-field col s12">
			{!! Form::textarea('answer', null, ['class'=>'redactor']) !!}
			{!! Form::label('answer', 'Answer:') !!}
		</div>
	</div>


	
	<div class="row center-align">
		{!! Form::submit($submitButtonText , ['class'=>'btn waves-effect dashboard__form--submit']) !!}
	</div>
</div>