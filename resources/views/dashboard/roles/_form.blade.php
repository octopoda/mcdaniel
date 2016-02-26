<header class="dashboard__section-title">
        <div class="dashboard__section-title__title">
            <h3>{{ $submitButtonText }}</h3>
        </div>
</header>


<div class="col s12">
    <div class="row">
        <div class="input-field col s12">
            {!! Form::text('name', null, ['class' => 'form-control']) !!}
            {!! Form::label('name', 'Name') !!}
        </div>
    </div>

    <div class="row">
        <div class="input-field col s12">
            {!! Form::text('display_name', null, ['class' => 'form-control']) !!}
            {!! Form::label('display_name', 'Display name') !!}
        </div>
    </div>

    <div class="row">
        <div class="input-field col s12">
            {!! Form::text('description', null, ['class' => 'form-control']) !!}
            {!! Form::label('description', 'Description') !!}
        </div>
    </div>

    <div class="row">
        <div class="input-field col s12">
            {!! Form::text('level', null, ['class' => 'form-control', 'min' => '0']) !!}
            {!! Form::label('level', 'Level') !!}
        </div>
    </div>

    <div class="form-group dashboard__content--list">
        <p>Permissions for Role</p>
        <ul>
        @foreach($permissions as $permission)

            <?php 
                //Check Relationship on Roles
                if (isset($role)) {
                    $checked = $role->permissions->filter(function ($perm) use ($permission){
                        if ($perm->name == $permission->name) {
                            return true;
                        } 
                    })->isEmpty();
                } else {
                    $checked = 1;
                }
            ?>

            <li class="checkbox col s4">
                <input type="checkbox" name="permissions[]" id="{{ $permission->name }}" value="{{ $permission->id }}" {{ (!$checked) ? 'checked="checked"' : '' }}>
                <label for="{{ $permission->name }}">{{ $permission->display_name }}</label>
            </li>
        @endforeach
        </ul>
    </div>

    <div class="row center-align">
        <div class="input-field col s12">
            {!! Form::submit($submitButtonText, ['class' => 'btn dashboard__form-submit waves-effect waves-light']) !!}
        </div>
    </div>
</div>