<?php

use Illuminate\Database\Seeder;

class blogTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blogs')->delete();

        DB::table('blogs')->insert([
        	"id" => 1,
            "user_id" => 2,
            "created_at" => new DateTime()
        ]);
    }
}
