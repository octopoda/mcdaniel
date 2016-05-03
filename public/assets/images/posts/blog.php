<?php
  require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php');
  require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php');

    $post = new Post();
    $post->allPublishedPost();
  $site = new Site();

  $top = $post->topPosts(4);
?>

<section class="topBlog row">
  <article class="mainBlog">
    <div class="fourcol blogImage" style="background:url(<?php echo $top[0]->mainImage; ?>) top center no-repeat"></div>
    <div class="onecol"></div>
    <div class="fivecol">
        <?php echo $top[0]->printBlogDetail(); ?>
    </div>
    <div class="twocol last"></div>
  </article>
  <article class="secondaryBlogs">
      <?php for ($i = 1; $i < count($top); $i++) { ?>
          <div class="fourcol">
            <?php echo $top[$i]->printBlogDetail(); ?>
          </div>
      <?php  } ?>
  </article>
</section>
<section class="row categories">
    <div class="fourcol">
      <h4>Search the Blog</h4>
      <form id="form" method="GET" action="/search.php"  class="searchForm">
        <input type="search" name="h" id="search" placeholder="search..." />
        <button id="searchButton">Search</button>
      </form>

           <nav class="topCategories">

                <?php
                    $cats = new Categories();
                    $cats->listCategories();
                ?>
                <h4>Categories</h4>
                <ul>
                    <?php foreach($cats->categoryList as $k=>$v) {
                        $category = new Categories($k);
                    ?>

                        <li><a href="/categories/<?php echo $category->directLink; ?>"><?php echo $v ?></a></li>
                    <?php } ?>
                </ul>

            </nav>
      </div>
      <div class="twocol"></div>
      <div class="fivecol">
           <h4>More Posts</h4>
           <?php
              $posts =  $post->nextPost(4, 5);
              foreach ($posts as $p) { ?>
                  <h6><a href="<?php echo $p->directLink; ?>"><?php echo $p->title; ?></a></h6>
                  <p><?php echo date('l, M d, Y', strtotime($p->publish_date)); ?></p>
              <?php } ?>
      </div>
      <div class="twocol"></div>
</section>

<?php

  $display->addScript("/js/libs/jquery.sharrre.min.js");
  require_once($_SERVER['DOCUMENT_ROOT']. '/includes/footer.php');

?>

