<?php 


/**
 * Default to main Flash File
 * @param  string $title   
 * @param  string $message 
 * @return App\Http\Flash 
 */
function flash($title = null, $message = null) 
{
	$flash =  app('App\Http\Flash');

	if (func_num_args() == 0) {
		return $flash;
	}

	return $flash->info($title, $message);
}