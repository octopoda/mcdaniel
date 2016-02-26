 <?php  
    $update_perm = 'update_' . strtolower($title); 
    $update_route = "dashboard." . strtolower($title) . '.edit';

    $delete_perm = 'delete_' . strtolower($title);
    $delete_route = "dashboard." . strtolower($title) . '.destroy';

    $form_name = strtolower($title) . 'Form_' . $model->id;
 ?>
 


 
 @if (Entrust::can($update_perm))
      <div>
        <a class="btn-flat waves-effect waves-light blue-text" href="{{ route($update_route, $model->id) }}"><i class="material-icons right">mode_edit</i></a>
      </div>
  @endif
  @if (Entrust::can($delete_perm))
      <div class="dashboard__content--table-delete">
          <a href="{{ route($delete_route, $model->id) }}" 
            class="destroy-button btn-flat waves-effect waves-light red-text"  
            data-method="delete" 
            data-remote="true"
            data-title="{{ $name }}"
            data-confirm="Are you sure you want to delete entry"
            rel="nofollow"
          >
              <i class="material-icons">delete</i>
          </a>
      </div>
  @endif

 


 