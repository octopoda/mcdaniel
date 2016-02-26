<header class="dashboard__section-title row s12">
    <div class="dashboard__section-title__title">
        <h3>{{ $submitButtonText }}</h3>
    </div>
</header>    

<div class="row col s12">
    <div class="row">
        <div class="input-field col s12">
            {!! Form::text('name', null, ['class'=>'validate']) !!}
            {!! Form::label('name', 'Full Name:') !!}
        </div>
    </div>

    <div class="row">
        <div class="input-field col s12">
            {!! Form::text('email', null, ['class' => 'validate']) !!}
            {!! Form::label('email', 'Email') !!}
        </div>
    </div>

    <div class="row">
        <div class="input-field col s12">
            {!! Form::password('password', ['class' => 'validate']) !!}
            {!! Form::label('password', 'Password') !!}
        </div>
    </div>

    <div class="row">
        <div class="input-field col s12">
            {!! Form::password('password_confirmation', ['class' => 'validate']) !!}
            {!! Form::label('password_confirmation', 'Password confirmation') !!}
        </div>
    </div>

     <div class="row dashboard__content--list">
        <p>Roles</p>
        <ul>
        @foreach($roles as $role)

            <?php $checked = (isset($userRoles)) ? in_array($role->id, $userRoles->lists('id')->toArray()) : false ?>
            <li class="checkbox col s4">
                {!! Form::checkbox('role[]', $role->id, $checked, ['id' => "roleId_{$role->id}"]) !!} 
                <label for="roleId_{{ $role->id }}">{{ $role ->display_name }}</label>
            </li>
        @endforeach
        </ul>
    </div>

    <div class="row center-align">
        {!! Form::submit($submitButtonText , ['class'=>'btn waves-effect dashboard__form--submit']) !!}
    </div>
</div>