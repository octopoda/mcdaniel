<?php
	require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php');
	require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php');

	if (isset($_GET['h'])) {
		$searchTerm = $_GET['h'];
	} else {
		$nosearch = 1;
	}

?>

<section class="searchContent row fpContent">
        <article class="eightcol">
            <h1>Searching <?php echo (isset($searchTerm)) ? 'for '.$searchTerm : '' ?></h1>
			<?php
				if (!isset($nosearch))
					$search->siteSearch($searchTerm, 1);
				 else
				 	echo '<p>Nothing matched your search term.  Please try again.</p>';
            ?>
        </article>

    	<aside class="fourcol last fpBlog right sidebar blogSidebar">
            <?php include(MODULES. 'sidebar.php'); ?>
            <nav class="topCategories">

                <?php
                    $cats = new Categories();
                    $cats->listCategories();
                ?>
                <h3>Categories</h3>
                <ul>
                    <?php foreach($cats->categoryList as $k=>$v) {
                        $category = new Categories($k);
                    ?>

                        <li><a href="/categories/<?php echo $category->directLink; ?>"><?php echo $v ?></a></li>
                    <?php } ?>
                </ul>

            </nav>
            <nav class="archives">
              <h3>Archives</h3>
              <?php $display->displayArchives(); ?>
            </nav>
    	</aside>


          <div class="videoBar row" style="height:10px;"></div>
</section>


<?php require_once($_SERVER['DOCUMENT_ROOT']. '/includes/footer.php'); ?>
