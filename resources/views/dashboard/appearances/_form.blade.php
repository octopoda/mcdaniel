<header class="dashboard__section-title row">
	<div class="dashboard__form--title col s8">
		<h3>{{ $submitButtonText }}</h3>
	</div>
	
	<div class="col s4 dashboard__form--publish-switch">
			<div class="switch">
			<label>
				Draft
				<input type="checkbox"  {{ (isset($appearance) && $appearance->isPublished()) ? 'checked' : '' }} name="published" value="1"><span class="lever"></span>
				Published
			</label>
		</div>
	</div>
</header>


@if ($users->isEmpty()) 
	<h5>There are no Users Approved for Appearances.  You need to go to the Roles section and approve and appearance.</h5>
@else 
<div class="s12 col">
	 <div class="row">
	 	<div class="input-field col s12 l6">
			{!! Form::select('user_id',  $users->lists('name', 'id'), (isset($appearance)) ? $appearance->user_id : null, ['class'=>'dashboard-select']) !!}
			{!! Form::label('user_id', 'Appearance For:') !!}
		</div>

		<div class="input-field col s12 l6">
			{!! Form::text('publication', null, ['class'=>'class', 'placeholder'=>'Where was this appearance published?']) !!}
			{!! Form::label('publication', 'Publication:') !!}
		</div>
		
	</div> 

	<div class="row">
		
	</div>

	<div class="row">
		<div class="input-field col s12">
			{!! Form::text('title', null, ['class'=>'class', 'placeholder'=>'Title of the appearance']) !!}
			{!! Form::label('title', 'Title:') !!}
		</div>
	</div>

	<div class="row">
		<div class="input-field col s12">
			{!! Form::text('link', null, ['class'=>'class', 'placeholder'=>'Direct link to appearance']) !!}
			{!! Form::label('link', 'Link to Appearance:') !!}
		</div>
	</div>

	<div class="row">
		<div class="input-field col s12">
			<input type="date" class="datepicker" name="appearance_date" id="appearance_date" value="{{ (isset($appearance) && !$appearance->appearance_date == null) ? $appearance->appearance_date : '' }}"
			{!! Form::label('appearance_date', 'Appearance Date:') !!}
		</div>
	</div>

	

	<div class="row">
			<div class="switch  dashboard__form-regular-switch">
			<label>
				No Video
				<input type="checkbox"  {{ (isset($appearance) && !$appearance->video_url == null)  ? 'checked' : '' }}  name="video" id="videoSwitch" value="1"><span class="lever"></span>
				Embeded Video
			</label>
		</div>
	</div>

	
	<div class="row" id="embedVideoField" {{ (isset($appearance) && !$appearance->video_url == null) ? '' : 'style=display:none'}}>
		<div class="input-field col s12">
		{!! Form::text('video_url', null, ['class'=>'class', 'placeholder'=>'http://youtube.com/joijas']) !!}
		{!! Form::label('video_url', 'Video Embed Code:') !!}
		</div>
	</div>

	<div class="row center-align">
		{!! Form::submit($submitButtonText , ['class'=>'btn waves-effect waves-light dashboard__form--submit']) !!}
	</div>
</div>
@endif