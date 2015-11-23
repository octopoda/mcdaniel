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
						"id" => "125", 
						"title" => "Health", 
						"published" => "1", 
						"direct_link" => "health", 
				],
				[ 
						"id" => "126", 
						"title" => "Cooking ", 
						"published" => "1", 
						"direct_link" => "cooking", 
				],
				[ 
						"id" => "127", 
						"title" => "Recipes", 
						"published" => "1", 
						"direct_link" => "recipes", 
				],
				[ 
						"id" => "128", 
						"title" => "Weight Loss", 
						"published" => "1", 
						"direct_link" => "weight-loss", 
				],
				[ 
						"id" => "129", 
						"title" => "DIets", 
						"published" => "1", 
						"direct_link" => "diets", 
				],
				[ 
						"id" => "130", 
						"title" => "Family Nutrition ", 
						"published" => "1", 
						"direct_link" => "family-nutrition", 
				],
				[ 
						"id" => "131", 
						"title" => "Child Nutrition ", 
						"published" => "1", 
						"direct_link" => "child-nutrition", 
				],
				[ 
						"id" => "132", 
						"title" => "Nutrition ", 
						"published" => "1", 
						"direct_link" => "nutrition", 
				],
				[ 
						"id" => "133", 
						"title" => "Sports Nutrition ", 
						"published" => "1", 
						"direct_link" => "sports-nutrition", 
				],
				[ 
						"id" => "135", 
						"title" => "Wellness", 
						"published" => "1", 
						"direct_link" => "wellness", 
				],
				[ 
						"id" => "138", 
						"title" => "No Category", 
						"published" => "1", 
						"direct_link" => "no-category", 
				]
			]; 

			DB::table("categories")->insert($item); 

		} 

	}