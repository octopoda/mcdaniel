<?php

use Illuminate\Database\Seeder;

class StoreTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

		DB::table('stores')->truncate();
        
        $store = [
            'id' => 1,
            'published' => 1,
            'store_email' => 'jennifer@mcdanielnutrition.com'
        ];
        
        DB::table('stores')->insert($store);
    }
}
