<?php 

	use Illuminate\Database\Seeder; 

	class post_categoriesTableSeeder extends Seeder { 
		/** 
		* Run the database seeds. 
		* 
		* @return void 
		*/ 
		public function run() { 
			DB::table("category_post")->delete(); 

			$item = [ 
				[ 
						"post_id" => "110", 
						"category_id" => "125", 
				],
				[ 
						"post_id" => "109", 
						"category_id" => "133", 
				],
				[ 
						"post_id" => "112", 
						"category_id" => "130", 
				],
				[ 
						"post_id" => "112", 
						"category_id" => "125", 
				],
				[ 
						"post_id" => "112", 
						"category_id" => "135", 
				],
				[ 
						"post_id" => "112", 
						"category_id" => "133", 
				],
				[ 
						"post_id" => "113", 
						"category_id" => "125", 
				],
				[ 
						"post_id" => "113", 
						"category_id" => "135", 
				],
				[ 
						"post_id" => "113", 
						"category_id" => "129", 
				],
				[ 
						"post_id" => "113", 
						"category_id" => "138", 
				],
				[ 
						"post_id" => "114", 
						"category_id" => "125", 
				],
				[ 
						"post_id" => "114", 
						"category_id" => "135", 
				],
				[ 
						"post_id" => "114", 
						"category_id" => "129", 
				],
				[ 
						"post_id" => "114", 
						"category_id" => "138", 
				],
				[ 
						"post_id" => "115", 
						"category_id" => "129", 
				],
				[ 
						"post_id" => "115", 
						"category_id" => "128", 
				],
				[ 
						"post_id" => "115", 
						"category_id" => "135", 
				],
				[ 
						"post_id" => "115", 
						"category_id" => "138", 
				],
				[ 
						"post_id" => "116", 
						"category_id" => "135", 
				],
				[ 
						"post_id" => "116", 
						"category_id" => "128", 
				],
				[ 
						"post_id" => "116", 
						"category_id" => "129", 
				],
				[ 
						"post_id" => "116", 
						"category_id" => "138", 
				],
				[ 
						"post_id" => "117", 
						"category_id" => "129", 
				],
				[ 
						"post_id" => "117", 
						"category_id" => "135", 
				],
				[ 
						"post_id" => "117", 
						"category_id" => "138", 
				],
				[ 
						"post_id" => "119", 
						"category_id" => "129", 
				],
				[ 
						"post_id" => "119", 
						"category_id" => "135", 
				],
				[ 
						"post_id" => "119", 
						"category_id" => "127", 
				],
				[ 
						"post_id" => "119", 
						"category_id" => "138", 
				],
				[ 
						"post_id" => "121", 
						"category_id" => "125", 
				],
				[ 
						"post_id" => "121", 
						"category_id" => "129", 
				],
				[ 
						"post_id" => "121", 
						"category_id" => "138", 
				],
				[ 
						"post_id" => "115", 
						"category_id" => "126", 
				],
				[ 
						"post_id" => "119", 
						"category_id" => "126", 
				],
				[ 
						"post_id" => "113", 
						"category_id" => "130", 
				],
				[ 
						"post_id" => "115", 
						"category_id" => "130", 
				],
				[ 
						"post_id" => "117", 
						"category_id" => "130", 
				],
				[ 
						"post_id" => "119", 
						"category_id" => "130", 
				],
				[ 
						"post_id" => "121", 
						"category_id" => "130", 
				],
				[ 
						"post_id" => "113", 
						"category_id" => "130", 
				],
				[ 
						"post_id" => "116", 
						"category_id" => "130", 
				],
				[ 
						"post_id" => "117", 
						"category_id" => "130", 
				],
				[ 
						"post_id" => "121", 
						"category_id" => "130", 
				],
				[ 
						"post_id" => "117", 
						"category_id" => "133", 
				],
				[ 
						"post_id" => "119", 
						"category_id" => "133", 
				],
				[ 
						"post_id" => "121", 
						"category_id" => "133", 
				]
			]; 

			DB::table("category_post")->insert($item); 

		} 

	}