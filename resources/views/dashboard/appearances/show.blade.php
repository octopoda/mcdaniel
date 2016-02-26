@extends('layouts.admin.app')

@section('alert')
	@include('dashboard.partials._isDraft', ['model' => $appearance, 'permission' => 'manage_appearances'])
@endsection

@section('subnav')
	@include('dashboard.partials._show-buttons', ['title' => 'Appearances', 'model' => $appearance, 'name' => 'appearance', 'publish_perm' => 'manage_appearances' ])	
@endsection

@section('content')
	
		<div class="row dashboard__content--card">
        <div class="col s12 m8">
          <div class="card">
            <div class="card-image">
              @if ($appearance->video_url) 
			 	<div class="video-container">
        			{!! $appearance->video_url !!}
      			</div>
      		  @else 
      		  	<div class="dashboard__content--no-video-container"></div>
			 @endif
              <span class="card-title">{{ $appearance->title }}</span>
            </div>
            <div class="card-content">
              <p>{{ $appearance->date }}</p>
            </div>
            <div class="card-action">
              <a href="{{ $appearance->link }}" target="_blank">View Appearanace</a>
            </div>
          </div>
        </div>
      </div>

	



@endsection