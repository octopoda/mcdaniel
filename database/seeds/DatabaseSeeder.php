<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(UsersTableSeeder::class);
        $this->call(blogTableSeeder::class);
        $this->call(postsTableSeeder::class);
        $this->call(categoriesTableSeeder::class);
        $this->call(post_categoriesTableSeeder::class);
        $this->call(appearancesTableSeeder::class);
        Model::reguard();
    }
}
