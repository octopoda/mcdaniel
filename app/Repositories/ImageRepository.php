<?php 
	namespace App\Repositories;

	use Storage;
	use Response;

	class ImageRepository {

		public function storeImage($request, $folder, $name) {

			if (!$request->hasFile($name))
				return Response::json(['error'=> 'No File Sent']);

			if (!$request->file($name)->isValid())
				return Response::json(['error'=> 'File is not valid']);				

			$file = $request->file($name);

			$filename = $file->getClientOriginalName();

			Storage::disk('s3')->put('posts/' . $filename, file_get_contents($file));

			return $filename;
		}
		

	}