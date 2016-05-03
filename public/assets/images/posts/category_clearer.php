<?php
    require_once('includes/require.php');


    global $db;
    $cat = new Categories();
    $new_id_array = array();
    $new_id_with_cats = array();
    $old_id_array = array();
    $old_id_with_cats = array();
    $post_array = array();
    $duplicate_name_array = array();
    $category_id_array = array();


    //REMOVE all links to post




    //Make everything published;
    //$db->query("UPDATE categories SET published = 1");

    //Create new temp table
    $db->query("CREATE TEMPORARY TABLE cat_temp(category_id INT(11), category VARCHAR(255));");
    $db->query("INSERT INTO cat_temp(category) SELECT DISTINCT category FROM categories");

    $new_cats = $db->queryFill("SELECT * FROM cat_temp");

    foreach ($new_cats as $new) {
        $name = $new['category'];

        $ids = $db->queryFill("SELECT category_id FROM categories WHERE category = '{$name}' LIMIT 1");
        $ids = array_shift($ids);
        $i = $ids['category_id'];

        //echo $i;

        $db->query("UPDATE cat_temp SET category_id = '{$i}' WHERE category = '{$name}'");



    }

    //Get new list of categories without duplicates
    $results = ($db->queryFill("SELECT * FROM cat_temp"));
    foreach ($results as $r) {
        //echo 'id:'. $r['category_id'] . '  name:'.$r['category']. '<br />';
        $new_id_array[] = $r['category_id'];
    }

    //Get all Categories
    $result = $db->queryFill("SELECT category, category_id FROM categories");
    foreach ($result as $r) {
        $old_id_array[] = $r['category_id'];
    }

    // print_r($new_id_with_cats);
    // print_r($old_id_array);

    //Get list of duplicate ids
    $duplicates = $cat->_array_diff($old_id_array, $new_id_array);


    //Check duplicates against categoriesForPosts and return post ids;
    foreach ($duplicates as $d) {
        $result  = $db->queryFill("SELECT category_id, post_id FROM categoriesForPosts WHERE category_id = '{$d}'");
        foreach ($result as $r) {
            $post_array[] = $r['post_id'];
            $category_id_array[] = $r['category_id'];
        }
    }


    //print_r($duplicate_name_array);
    $catNames = array();

    foreach($category_id_array as $v) {
        $result = $db->queryFill("SELECT category FROM categories WHERE category_id = {$v}");

        foreach ($result as $r) {
            $catNames[] = $r['category'];
        }
    }


    //Get new category ids from old category names
    $final_id = array();
    foreach($catNames as $cat) {
        $id = $db->queryFill("SELECT category_id FROM cat_temp WHERE category = '{$cat}'");
        $id = array_shift($id);
        $final_id[] =  $id['category_id'];
    }

    // echo count($post_array);
    // echo count($final_id);

    //Update categoriesForPost to reflect new cat ids;
    for ($i = 0; $i < count($post_array); $i++) {
        echo 'Post Id: '. $post_array[$i];
        echo ' Cat Id: '. $category_id_array[$i];
        echo ' New Cat Id: '. $final_id[$i]. '<br /><br />';

        $db->query("UPDATE categoriesForPosts SET category_id = '{$final_id[$i]}' WHERE post_id = {$post_array[$i]} AND category_id = {$category_id_array[$i]}");

    }


    //Clear the categories Table
    $db->query("DELETE FROM categories;");

    //Insert the temp into the table.
    $db->query("INSERT INTO categories (category_id, category) SELECT category_id, category FROM cat_temp");

    //Create temp catsForPost
    $db->query("CREATE TEMPORARY TABLE catPosts AS SELECT DISTINCT * FROM categoriesForPosts");

    //Clear thePosts
    $db->query("TRUNCATE TABLE categoriesForPosts");

    //Insert the temp into the table
    $db->query("INSERT INTO categoriesForPosts (post_id, category_id) SELECT post_id, category_id FROM catPosts");

    //Drop both tables

    $db->query("DROP TABLE cat_temp");
    $db->query("DROP TABLE catPosts");



    //Delete all Empty Categories
    $result = $db->queryFill("SELECT category_id FROM categories WHERE category = ''");

    foreach ($result as $r) {
        $delete_id = $r['category_id'];
        $db->query("DELETE FROM categoriesForPosts WHERE category_id = '{$delete_id}'");
        $db->query("DELETE FROM categories WHERE category_id = '{$delete_id}'");
    }

    //Delete Orphaned Post Ids
    $result = $db->queryFill("SELECT category_id, post_id FROM categoriesForPosts");
    foreach($result as $r) {
        $c_id = $r['category_id'];
        $p_id = $r['post_id'];

        $n = $db->queryFill("SELECT category_id FROM categories WHERE category_id = '{$c_id}'");

        if ($n == false) {
            $db->query("DELETE FROM categoriesForPosts WHERE post_id = '{$p_id}' AND category_id = {$c_id}");
        } else {
            continue;
        }
    }


    //Publish and add Direct Links
    $result = $db->queryFill("SELECT category_id, category FROM categories");
    foreach ($result as $r) {
        $cat = new Categories();

        $id = $r['category_id'];
        $link = $cat->sanitize($r['category'], true);
        $db->query("UPDATE categories SET published = 1, directLink = '{$link}' WHERE category_id = {$id}");

    }





    //echo 'done';

?>