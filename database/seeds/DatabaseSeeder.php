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

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        $this->call(UsersTableSeeder::class);
        $this->call(blogTableSeeder::class);
        $this->call(postsTableSeeder::class);
        $this->call(categoriesTableSeeder::class);
        $this->call(post_categoriesTableSeeder::class);
        $this->call(appearancesTableSeeder::class);
        $this->call(EntrustTableSeeder::class);
        $this->call(FAQTableSeeder::class);
        $this->call(ProductTableSeeder::class);
        $this->call(StoreTableSeeder::class);
        $this->call(SitesTableSeeder::class);
        
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        Model::reguard();
    }
}
