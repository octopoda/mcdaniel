<?php 

	use Illuminate\Database\Seeder; 

	class categoriesTableSeeder extends Seeder { 
		/** 
		* Run the database seeds. 
		* 
		* @return void 
		*/ 
		public function run() { 
			DB::table("categories")->delete(); 

			$item = [ 
				[ 
						"id" => "1", 
						"title" => "Weight Loss", 
						"published" => "1", 
						"direct_link" => "weight-loss", 
				],
				[ 
						"id" => "2", 
						"title" => "Family Nutrition ", 
						"published" => "1", 
						"direct_link" => "family-nutrition", 
				],
				[ 
						"id" => "3", 
						"title" => "Corporate Wellness", 
						"published" => "1", 
						"direct_link" => "corporate-wellness", 
				],
				[ 
						"id" => "4", 
						"title" => "Maternal Nurtition", 
						"published" => "1", 
						"direct_link" => "maternal-nutrition", 
				],
				[ 
						"id" => "5", 
						"title" => "Sports Nutrition ", 
						"published" => "1", 
						"direct_link" => "sports-nutrition", 
				],
			]; 

			DB::table("categories")->insert($item); 

		} 

	}