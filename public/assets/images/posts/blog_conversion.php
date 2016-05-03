
<?php
	/* Wordpress Blog to Black Ink Conversion */
	require_once('includes/require.php');
	include(PLUGIN_LIB .DS. 'simple_html_dom.php');




	$blog = file_get_contents('blog.xml');
	$xml = simplexml_load_string($blog);
	$commentXML = simplexml_load_string($blog);

	global $db;

	// $db->query("TRUNCATE TABLE post");
	// $db->query("TRUNCATE TABLE comments");
	// $db->query("TRUNCATE TABLE commentsForPost");
	// $db->query("TRUNCATE TABLE categories");
	// $db->query("TRUNCATE TABLE categoriesForPosts");


	foreach ($xml->channel->item as $i) {

		$post = array();
		$array = array();

		//Get and modify Images
		$namespace = $i->getNameSpaces(true);
		$i->content = $i->children($namespace['content']);
        if ($i->content == false) {
            continue;
        }

        $status = false;
        //check status.  If draft continue
        foreach ($i->children($namespace['wp']) as $key=>$val) {
            if ($key == 'status') {
                if ($val == 'draft' || $val == 'inherit') {
                    $status = true;
                }

            }
        }

        if ($status == true) {
            continue;
        }

		if (isset($comments)) unset($comments); //unset comments for next time


		//Look for Images in Content
		$post['mainImage'] = getImages((string)$i->content);

		//allImages($i->content); //Download All Images
		// $content = resetLinks((string)$i->content, $post['mainImage']); //Reset the Links


		// //Content
		// $post['title'] = (string)$i->title;
		// $post['content'] = '<p>'. cleanHTML($content) . '</p>';

		// $post['searchable'] = strip_tags($i->content);
		// $post['summary'] = truncate($i->content, 200, $break=".", $pad=" ");

		// $post['publish_date'] = date("Y-m-d H:i:s", strtotime((string)$i->pubDate));
		// $post['access'] = 1;
		// $post['published'] = 1;
		// $post['user_id'] = 2;


		//Get Comments for Post
		foreach ($i->children($namespace['wp']) as $key=>$com) {
			if ($key == 'comment') {
				$comments[] = grabComments($com);

			}
		}



		  foreach ($i->category as $key=>$cat) {
            $attr = $cat->attributes();  //Find Category with Attribute
            $name = $attr['nicename']; //Find nicename attribute
            if ($name != false) {
                $array[] = $cat;
            }
		  }



		// $post['categories'] = createCats($array);



		// $posts = new Post();
		// $p_id = $posts->createPostFromForm($post);

		// if (!empty($comments)) {
		// 	foreach ($comments as $comment) {
		// 		$c = new Comments();
		// 		$c->createCommentFromForm($comment, $p_id);
		// 	}
		// }

	}



	function cleanHTML($html) {

		$search = array('#<(strong|b)[^>]*>(.*?)</(strong|b)>#isu', '#<(em|i)[^>]*>(.*?)</(em|i)>#isu', '#<u[^>]*>(.*?)</u>#isu');
        $replace = array('<strong>$2</strong>', '<em>$2</em>', '<u>$1</u>');
        $text = preg_replace($search, $replace, $html);

		$html =  str_replace("\n", "", $html);
		$html =  str_replace("<br />", "</p><p>", $html);
		$html =  str_replace('<span>', ' ', $html);
		$html =  str_replace('</span>', ' ', $html);
		$html =  str_replace("<p></p>", " ", $html);
		$html =  str_replace("<strong><strong>", "<strong>", $html);
		$html =  str_replace("</strong></strong>", "</strong>", $html);
		$html =  str_replace("<o:p>", '' , $html);
		$html =  str_replace("</o:p>", '' , $html);


		$pattern = "/<(\w+)>(\s|&nbsp;)*<\/\1>/";
		$html = preg_replace($pattern, '', $html);
		return mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8');
	}

	function getImages ($content) {
		$html = str_get_html($content);
        $image = $html->find('img');
        if (isset($image))  {
    		foreach ($image as $e) {
                $position = strrpos($e->src, "/") + 1;
                $length = strlen($e->src) - $position;
                $img = substr($e->src, $position, $length);

                //return setImageURL($e->src);
    			save_image($e->src, $img);  //Uncomment to download all photos


    		}
        } else {
            return false;
        }
	}

	function allImages($content) {
		$html = str_get_html($content);
		foreach ($html->find('img') as $img) {
			$image = setImageURL($img->src);
			$imageArray = explode("/", $image);
			save_image($img->src, end($imageArray));
		}
	}

	function setImageURL($image) {
		$imageArray = explode("/", $image);
		return '/files/uploads/'.end($imageArray);
	}

	function save_image($inPath,$outPath) {
        /*$in = fopen($inPath, "rb");
        $out = fopen('files/uploads/'.$outPath, "wb");

    	while ($chunk = fread($in,8192)) {
        	fwrite($out, $chunk, 8192);
   		}
    	fclose($in);
    	fclose($out); */

        $ch = curl_init($inPath);
        $fp = fopen('files/uploads/'.$outPath, 'wb');
        curl_setopt($ch, CURLOPT_FILE, $fp);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_exec($ch);
        curl_close($ch);
        fclose($fp);
	}

	/* Reset Image Links to point to new spot */
	function resetLinks($content, $img) {
		$html = str_get_html($content);


		foreach ($html->find('span') as $f) {
			$f->removeAttribute('style');
		}

		foreach ($html->find('img') as $e) {
			$url = setImageURL($e->src);
			$e->setAttribute('src', $url);
		}


		foreach ($html->find('a') as $a){
			$pageURL = substr($a->href, -4);

		 	if ($pageURL == '.jpg' || $pageURL == '.png' || $pageURL == '.gif') {
		 		$a->href = NULL;
		 		$a->style = NULL;
		 		$a->imageanchor = NULL;
		 		$img = $a->innertext;
				$a->outertext = $img;


		 	}
		}

		foreach($html->find('table') as $t) {
			$t->class = null;
		}

		foreach ($html->find('tr') as $t) {
			$t->style = null;
			$t->class = null;
		}

		return $html;
	}





	function strip_word_html($text, $allowed_tags = '<a><b><i><sup><sub><em><strong><u><br><p><image><img><ul><li><ol><table><tr><td>')
    {
        mb_regex_encoding('UTF-8');
        //replace MS special characters first
        $search = array('/&lsquo;/u', '/&rsquo;/u', '/&ldquo;/u', '/&rdquo;/u', '/&mdash;/u');
        $replace = array('\'', '\'', '"', '"', '-');
        $text = preg_replace($search, $replace, $text);

        //make sure _all_ html entities are converted to the plain ascii equivalents - it appears
        //in some MS headers, some html entities are encoded and some aren't
        $text = html_entity_decode($text, ENT_QUOTES, 'UTF-8');

        //try to strip out any C style comments first, since these, embedded in html comments, seem to
        //prevent strip_tags from removing html comments (MS Word introduced combination)
        if(mb_stripos($text, '/*') !== FALSE){
            $text = mb_eregi_replace('#/\*.*?\*/#s', '', $text, 'm');
        }

        //introduce a space into any arithmetic expressions that could be caught by strip_tags so that they won't be
        //'<1' becomes '< 1'(note: somewhat application specific)
        $text = preg_replace(array('/<([0-9]+)/'), array('< $1'), $text);
        $text = strip_tags($text, $allowed_tags);

        //eliminate extraneous whitespace from start and end of line, or anywhere there are two or more spaces, convert it to one
        $text = preg_replace(array('/^\s\s+/', '/\s\s+$/', '/\s\s+/u'), array('', '', ' '), $text);

        //strip out inline css and simplify style tags
        $search = array('#<(strong|b)[^>]*>(.*?)</(strong|b)>#isu', '#<(em|i)[^>]*>(.*?)</(em|i)>#isu', '#<u[^>]*>(.*?)</u>#isu');
        $replace = array('<strong>$2</strong>', '<em>$2</em>', '<u>$1</u>');
        $text = preg_replace($search, $replace, $text);

        //on some of the ?newer MS Word exports, where you get conditionals of the form 'if gte mso 9', etc., it appears
        //that whatever is in one of the html comments prevents strip_tags from eradicating the html comment that contains
        //some MS Style Definitions - this last bit gets rid of any leftover comments */
        $num_matches = preg_match_all("/\<!--/u", $text, $matches);
        if($num_matches){
              $text = preg_replace('/\<!--(.)*--\>/isu', '', $text);
        }

		$text =  str_replace("\n", "", $text);
		$text =  str_replace('class="MSOnormal"', "", $text);
        return $text;
    }

	function createCats($array) {
		$string = '';

		if ($array != false) {
			foreach($array	as $cat) {
				$string = $string. $cat.', ';
			}
		}

		return substr($string, 0, -2);
	}

	function grabComments($j) {
		//Import Comment
		$comment['publish_date'] = $j->comment_date;
		$comment['published'] = 1;
		$comment['content'] = (string)$j->comment_content;
		$comment['user_name'] = (string)$j->comment_author;

		return $comment;
	}
?>