    <div class="form-group">
        {!! Form::label('name', 'Full Name:') !!}
        {!! Form::text('name', null, ['class'=>'class', 'placeholder'=>'Jon Doe']) !!}
    </div>

    <div class="form-group">
        {!! Form::label('email', 'Email') !!}
        {!! Form::text('email', null, ['class' => 'form-control']) !!}
    </div>

    <div class="form-group">
        {!! Form::label('password', 'Password') !!}
        {!! Form::password('password', ['class' => 'form-control']) !!}
    </div>

    <div class="form-group">
        {!! Form::label('password_confirmation', 'Password confirmation') !!}
        {!! Form::password('password_confirmation', ['class' => 'form-control']) !!}
    </div>

     <div class="form-group">
        <label for="">Roles</label>
        @foreach($roles as $role)

            <?php $checked = (isset($userRoles)) ? in_array($role->id, $userRoles->lists('id')->toArray()) : false ?>
            <div class="checkbox">
                <label>
                    {!! Form::checkbox('role[]', $role->id, $checked) !!} {{ $role->display_name }}
                </label>
            </div>
        @endforeach
    </div>

    <div class="form-group">
        <div class="form-group">
            {!! Form::submit($submitButtonText , ['class'=>'button']) !!}
        </div>
    </div>