<?php 

namespace App\Repositories\Criteria\Post;

use Bosnadev\Repositories\Criteria\Criteria;
use Bosnadev\Repositories\Contracts\RepositoryInterface as Repository;


use App\User;

class SearchPosts extends Criteria {

	public function __construct($query) {
		$this->query = $query;
	}

	public function apply($model, Repository $repository) {
		$q = explode(',', $this->query);

		// $sql = "MATCH (title, content) AGAINST (";
		// $nTimes = 1;
		// foreach ($q as $query) {
		// 	$sql .= $query;
		// 	if ($nTimes < count($query)) {
		// 		$sql .= " + ";
		// 	}
		// }
		// $sql .= ")";

		$model = $model->whereRaw("MATCH(title, content) AGAINST(?)",  array($this->query))->orderBy('publish_date', 'desc');
		return $model;
	}
}


// $posts = $this->post->whereRaw(
// 06
//         "MATCH(title,body) AGAINST(? IN BOOLEAN MODE)", 
// 07
//         array($q)
// 08
//     )->get();

 
