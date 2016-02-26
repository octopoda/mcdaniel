<?php

use Illuminate\Database\Seeder;

class FAQTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

		DB::table('faqs')->truncate();

        // $faqs = factory(App\Faq::class, 10)->create()->toArray();
        // dd($faqs);

        // DB::table('faqs')->insert($faqs);
    }
}
