<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
// use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract
{
    use Authenticatable, CanResetPassword, EntrustUserTrait;

    protected $table ="users";
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];



    /*
    |--------------------------------------------------------------------------
    | Relationships
    |--------------------------------------------------------------------------
    |
    |
    */
    
    /**
     * Define one to Many Relationship with Social Acounts
     * @return App\SocialAccount
     */
    public function socialAccounts() {
        return $this->hasMany('App\SocailAccount');
    }


    /**
     * Define One to One relationship with Blogs
     * @return  App\Blog
     */
    public function blog() {
        return $this->hasOne('App\Blog');
    }


    /**
     * Relationship with Roles
     * @return App\Role 
     */
    public function roles() {
        return $this->belongsToMany('App\Role');
    }

    /**
     * Has Many Through Relationship with Posts
     * @return App\Post
     */
    public function posts() {
        return $this->hasManyThrough('App\Blog');
    }


    /*
    |--------------------------------------------------------------------------
    | Model Methods
    |--------------------------------------------------------------------------
    |
    |
    */
   

   /**
    * Bcrytpt the Password
    * @param string $value 
    */
   public function setPasswordAttribute($value) {
        $this->attributes['password']  = bcrypt($value);
   }


   /**
    * Get the Top Level of Role
    * @return int
    */
   public function getMaximumLevel() {
        $roles = [];
        foreach ($this->roles as $role) {
            $roles[] = $role->level;
        }

        return max($roles);
   }
}
