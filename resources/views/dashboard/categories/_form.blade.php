<header class="dashboard__section-title row">
	<div class="dashboard__section-title__title  col s8">
		<h3>{{ $submitButtonText }}</h3>
	</div>

	<div class="col s4 dashboard__form--publish-switch">
			<div class="switch">
			<label>
				Draft
				<input type="checkbox" {{ (Entrust::can('publish_categories')) ? '' : 'disabled' }}  {{ (isset($category) && $category->isPublished()) ? 'checked' : '' }} name="published" value="1"><span class="lever"></span>
				Published
			</label>
		</div>
	</div>
</header>


<div class="col s12">
	<div class="row">
		<div class="s12 col input-field">
			{!! Form::text('title', null, ['class'=>'validate']) !!}
			{!! Form::label('title', 'Category Title:') !!}
		</div>
	</div>


	<div class="row">
		<div class="s12 col input-field">
			 {!! Form::text('search_terms', null, ['class'=>'validate']) !!}
			 {!! Form::label('search_terms', 'Search Terms:') !!}
		</div>
	</div>

	<div class="row center-align">
		{!! Form::submit($submitButtonText , ['class'=>'btn waves-effect dashboard__form--submit']) !!}
	</div>
</div>

	