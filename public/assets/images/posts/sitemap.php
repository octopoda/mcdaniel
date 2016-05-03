<?php  
	require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php');
	$sections = array('post', 'news');
	$sitemap = new Sitemap($sections);
	
	echo $sitemap->xml;

 ?>
 

    
