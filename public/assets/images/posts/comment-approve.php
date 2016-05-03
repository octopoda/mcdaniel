<?php  
	require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/require.php');
	
	if (!empty($_GET['id'])) {
		$comment = new Comments();
		$comment->commentFromGuid($_GET['id']);
	} else {
		echo '<h1>There is nothing here.  Please <a href="/index.html">click here</a></h1>';
		return;
	}

	if ($_GET['action'] == 'approve') {
		$comment->publish();

		echo '<h1>Your Coment has been published:</h1>
			<p>'.$comment->content.'</p>
			';
	} else if ($_GET['action'] == 'delete') {
		$comment->deleteFromForm();
		echo '<h1>The comment was deleted.</h1>';
	}

?>