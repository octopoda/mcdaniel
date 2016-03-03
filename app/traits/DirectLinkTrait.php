<?php 


namespace App\Traits;

trait DirectLinkTrait {
	
  /**
   * Santize the Direct Link
   * @param  string $string 
   * @return string         
   */
  protected function santize($string) {
    $strip = array("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+", "[", "{", "]",
                           "}", "\\", "|", ";", ":", "\"", "'", "&#8216;", "&#8217;", "&#8220;", "&#8221;", "&#8211;", "&#8212;",
                           "â€”", "â€“", ",", "<", ".", ">", "/", "?", ".", '©', '®', '℗');
    $clean = trim(str_replace($strip, "", strip_tags($string)));
    $clean = strtolower(preg_replace('/\s+/', "-", $clean));
    return $clean;
 }


}

