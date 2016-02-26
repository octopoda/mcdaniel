<?php

class TestCase extends Illuminate\Foundation\Testing\TestCase
{
    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://localhost';

    /**
     * Creates the application.
     *
     * @return \Illuminate\Foundation\Application
     */
    public function createApplication()
    {
        putenv('DB_CONNECTION=mysql_testing');

        $app = require __DIR__.'/../bootstrap/app.php';

        $app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

        return $app;
    }

  
    /**
     * Sign a User
     * @param  App\User $user 
     * @return this;
     */
    public function signIn($user = null) {
        if (!$user) {
            $user = factory(App\User::class)->create();
            $admin = \App\Role::find(1);
            $user->attachRole($admin);
        }

        $this->user = $user;
        $this->actingAs($user);

        return $this;
    }
}
