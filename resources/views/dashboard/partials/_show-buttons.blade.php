<?php 
	  $update_perm = 'update_' . strtolower($title); 
    $update_route = "dashboard." . strtolower($title) . '.edit';

    $delete_perm = 'delete_' . strtolower($title);
    $delete_route = "dashboard." . strtolower($title) . '.destroy';

    $form_name = strtolower($title) . 'Form_' . $model->id;

    $singular = strtolower(rtrim($title, 's'));
?>

 <div class="fixed-action-btn horizontal" style="bottom: 45px; right: 24px;">
    <a class="btn-floating btn-large blue">
      <i class="large material-icons">mode_edit</i>
    </a>
    <ul>
      
      @if (Entrust::can($publish_perm)) 
		    	<li><a class="btn-floating green publish-button" 
                  id="publishButton" 
                  data-method="put"
                  data-remote="true"
                  rel="nofollow"
                  href="{{ route('ajaxPublish', ['class' => $singular, 'id'=> $model->id]) }}">
                  <i class="material-icons" >{{ ($model->isPublished()) ? 'file_download' : 'publish' }}</i>
                </a>
          </li>
	    @endif
	  
      
      @if (Entrust::can($update_perm))
      	<li><a class="btn-floating yellow darken-1" href="{{ route($update_route, $model->id) }}"><i class="material-icons">create</i></a></li>
      @endif
      
      @if (Entrust::can($delete_perm))
      	<li>
             {!! Form::open(['method' => 'DELETE', 'route' => [$delete_route, $model->id]]) !!}
                  <button type="submit"  class="btn-floating red darken-1"><i class="material-icons">delete</i></button>
             {!! Form::close() !!}
        </li>
      @endif
    </ul>
  </div>
