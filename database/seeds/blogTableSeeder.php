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

        $blogs = [
            [
                "id" => 1,
                "user_id" => 2,
                "created_at" => new DateTime()
            ],
            [
                "id" => 2,
                "user_id" => 3,
                "created_at" => new DateTime()
            ] 
        ];
        
        DB::table('blogs')->insert($blogs);
    }
}
