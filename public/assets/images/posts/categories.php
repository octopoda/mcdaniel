<?php
  require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php');
  require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php');

$cat ="";

 if (isset($_GET['category'])) {
    $page = "cat";
    $cat = $_GET['category'];
  }

  if (isset($_GET['archives'])) {
    $page = "arc";
    $cat = $_GET['archives'];
  }



  $title = str_replace("_", " ", $cat);


?>

  <section class="row fpContent mainBlogs categoryContent">
    <article class="eightcol last">
    <h2><?php echo $title; ?></h2>

      <?php
        if ($page == 'cat') {
          $display->paginateCategories($cat);
        } else {
            $display->printArchives($cat);
        }

      ?>
    </article>
    <article class="fourcol last categories blogSidebar right sidebar">
      <div class="row searchSidebar">
        <form id="form" method="GET" action="/search.php"  class="searchForm">
          <input type="search" name="h" id="search" placeholder="Search..." />
          <button id="searchButton">Search</button>
        </form>
      </div>
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
    </article>
</section>


<?php
  $display->addScript("/js/libs/jquery.sharrre.min.js");
  require_once($_SERVER['DOCUMENT_ROOT']. '/includes/footer.php');
?>
