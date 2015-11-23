<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

		DB::table('users')->delete();


        $users = [
            [
        		"id"=> 1,
                "name"=>"Zack Davis",
        		"email"=> "zack@octopodainteractive.com",
        		"password" => bcrypt('12345'),	
                "created_at" => new DateTime()
        	],
        	[
        		"id" => 2,
                "name"=>"Jennifer McDaniel",
        		"email"=> "mcdanielnutrition@gmail.com",
        		"password" => bcrypt('secret'),
                "created_at" => new DateTime()
        	]
        ];
        
       
        DB::table('users')->insert($users);
    }
}
