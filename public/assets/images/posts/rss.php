<?php  
	require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php');
	$site = new Site();
	
	
	$feed = new RSSFeed();
	$post = new Post();
	$blog = new Blogs();
	$post->allPublishedPost();
	
	$feed->SetChannel(
		  'http://'.$site->siteURL.'/rss.xml',
          $blog->blog_name,
          strip_tags($blog->blog_description),
          'en-us',
          '©2007 - '. date("Y") .' Angela Lemond RD, CSP, LD, All Rights Reserved',
          'Angela Lemond',
          'Family and Individual Registered Dietitian');
	
	$feed->SetImage($site->siteURL.'/images/logo.jpg');
	
	foreach ($post->allPost as $post) {
			$p = new Post($post);
			$feed->SetItem($site->siteURL.$p->directLink, $p->title, $p->content);
	}
	
	echo $feed->output();

 ?>
 

    
