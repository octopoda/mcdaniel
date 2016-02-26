<?php

use Illuminate\Database\Seeder;

class SitesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

		DB::table('sites')->truncate();
        
        $site = [
            'id' => 1,
            'site_name' => 'McDaniel Nutrition',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sapiente ipsum ratione vitae eum molestiae beatae, illo hic debitis labore necessitatibus rem facere nulla nam laborum culpa adipisci, voluptates voluptatem. Ipsum temporibus dolore recusandae nisi accusantium vel sit ullam quaerat, ab dolores esse vero, repudiandae, error iusto commodi, necessitatibus perspiciatis.',
            'keywords' => 'nutrition, dieting, diets, nutrition saint louis, dietitian, sports dietitian, sports nutrition, food, cooking, nutrition consulting, weight loss dietitian saint louis, weight loss dietitian',
            'site_url' => 'http://mcdanielnutrition.com'
        ];
        
        DB::table('sites')->insert($site);
    }
}
