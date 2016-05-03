
<header class="dashboard__section-title row">
	<div class="dashboard__form--title col s8">
		<h3>{{ $submitButtonText }}</h3>
	</div>
	

	<div class="col s4 dashboard__form--publish-switch">
			<div class="switch">
			<label>
				Draft
				<input type="checkbox" {{ (Entrust::can('publish_posts')) ? '' : 'disabled' }}  {{ (isset($post) && $post->isPublished()) ? 'checked' : '' }} name="published" value="1"><span class="lever"></span>
				Published
			</label>
		</div>
	</div>
</header>


 <div class="col s12">
 	

 	<div class="row">
		<div class="input-field col s12">
			{!! Form::text('title', null, ['class'=>'validate',]) !!}
			{!! Form::label('title', 'Post Title') !!}
		</div>
 	</div>

 	<div class="row">
		
		<div class="input-field col s12 l6">
			{!! Form::select('post_type', $post->post_types, (isset($post)) ? $post->post_type : null, ['class'=>'dashboard-select']) !!} 
			{!! Form::label('post_type', 'Post Types') !!}
		</div>


		<div class="input-field s12 m6 col">
			{!! Form::label('publish_date', 'Publish Date:') !!}
			<input type="date" class="datepicker" name="publish_date" id="publish_date" value="{{ (isset($post)) ? $post->publish_date : '' }}">
		</div>
	
 	</div>




 	<div class="row">
 		{!! Form::label('content', 'Post Content') !!}
 		<div class="input-field col s12">
 			{!! Form::textarea('content', null, ['class'=>'redactor validate', 'rows' => '20']) !!}
 		</div>	
 	</div>

	<div class="row">
 		{!! Form::label('summary', 'Post Summary') !!}
 		<div class="input-field col s12">
 			{!! Form::textarea('summary', null, ['class'=>'redactor validate',]) !!}
 		</div>		
 	</div> 	
	
	
	<h4>Images for Post</h4>
	

	<div class="row">
		<div class="file-field input-field">
	      	<div class="btn blue">
	        	<span><i class="material-icons right">cloud</i> Upload Post Header Image (w: 1920px X h:600px) </span>
	        	<input type="file" name="post_image" id="post_image">
	      	</div>
	      	<div class="file-path-wrapper">
		        <input class="file-path validate" type="text" value="{{ (isset($post->post_image)) ? $post->post_image  : null }}">
	    	</div>
    	</div>
	</div>
	

	<div class="row">
		<div class="file-field input-field">
	      	<div class="btn blue">
	        	<span><i class="material-icons right">cloud</i> Upload Post Thumbnail Image (w: 800px X h: 400px) </span>
	        	<input type="file" name="post_thumbnail" id="post_thumbnail">
	      	</div>
	      	<div class="file-path-wrapper">
		        <input class="file-path validate" type="text" value="{{ (isset($post->post_thumbnail)) ? $post->post_thumbnail  : null }}">
	    	</div>
    	</div>
	</div>

	<div class="row">
		<div class="file-field input-field">
	      	<div class="btn blue">
	        	<span><i class="material-icons right">cloud</i> Upload Post Facebook Image (w: 1200px X h: 630px) </span>
	        	<input type="file" name="post_facebook" id="post_facebook">
	      	</div>
	      	<div class="file-path-wrapper">
		        <input class="file-path validate" type="text" value="{{ (isset($post->post_facebook)) ? $post->post_facebook  : null }}">
	    	</div>
    	</div>
	</div>


	


	<div class="row center-align">
		@if (isset($post->blog->id))
			{!! Form::hidden('blog_id', null, ['class'=>'class']) !!}
		@endif

		{!! Form::submit($submitButtonText , ['class'=>'btn dashboard__form--submit']) !!}
	</div>

 </div>