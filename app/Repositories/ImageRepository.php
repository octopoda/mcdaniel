<?php 
	namespace App\Repositories;

	use Storage;
	use Response;

	class ImageRepository {

		/**
		 * Image Path
		 * @var string
		 */
		protected $imagePath = "https://s3-us-west-2.amazonaws.com";


		/**
		 * Store Image on S3 from 
		 * @param  \App\Http\Request $request 
		 * @param  string $folder  
		 * @param  string $name    
		 * @return string filepath
		 */
		public function storeImage($request, $folder, $name) {

			if (!$request->hasFile($name))
				return Response::json(['error'=> 'No File Sent']);

			if (!$request->file($name)->isValid())
				return Response::json(['error'=> 'File is not valid']);				

			$file = $request->file($name);
			$filename = $file->getClientOriginalName();

			Storage::disk('s3')->put($folder. '/' . $filename, file_get_contents($file), 'public');

			

			return  $this->imagePath . '/' .  env('S3_BUCKET') . '/' . $folder . '/' . $filename;
			
		}

	}