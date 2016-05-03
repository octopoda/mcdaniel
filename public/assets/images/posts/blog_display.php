<?php
  require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php');
  require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php');


  if (isset($_GET['name'])) {
    $blog = $_GET['name'];
  }

  $u = new Users($display->content->user_id);
  $video = $display->content->video;

?>



  <section class="row fpContent mainBlogs">
    <article class="eightcol last">
      <h1><?php echo $display->displayTitle();?></h1>
      <p class="author">By <?php echo  $u->printName() . ' // ' . date("M d, Y", strtotime($display->content->publish_date)); ?></p>
      <?php if ($display->content->mainImage != false) : ?>

      <?php endif; ?>

      <?php if ($video == 1) {
         echo $display->content->embedCode;
        } else if ($display->content->mainImage != false && $video != 1) {
          echo '<img src="'.$display->content->mainImage.'" alt="'. $display->content->title.'" class="blogImage" />';
        } ?>


      <?php $display->displayContent();  //Content?>

      <?php   //All the Share Stuff
        $fullURL = curPageURL();
        $share = '
              <hr />
              <div id="sharing" class="row">
              <h3>Share this Article</h3>
                <div id="twitterShare" data-url="'.$fullURL.'" data-text="'.$display->content->title.'" data-title="Tweet" class="shareButton teal"></div>
                <div id="facebookShare" data-url="'.$fullURL.'" data-text="'.$display->content->title.'" data-title="Like" class="shareButton blue"></div>
            </div>';



        echo $share;
        ?>

        <?php echo '<hr /><p>Filed Under: '. $display->content->categoriesForPrint().'</p>'; //Categories  ?>
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
<?php $b = new Blogs();
     if ($b->comments == 1) :  ?>
  <div class="row comments">
    <?php
        echo '<article id="comment">
            <h3>Comments </h3>
            <a class="fillComment">Fill Comment</a>';

        if ($display->content->commentsForPost != false) {
          foreach ($display->content->commentsForPost as $c) {
            echo $c->printComment($display->user_access);
          }
        } else {
          echo '<p>There are no comments for the post yet.  </p>';
        }

        //Comment Form
        $comment = new Comments();
        echo  $comment->commentForm($display->content->post_id);

        echo '</article>';

    ?>
    <p class="testErrors"></p>
  </div>
<?php endif; ?>
<div class="videoBar row" style="height:10px;"></div>



<?php
  $display->addScript("/js/libs/jquery.sharrre.min.js");
  require_once($_SERVER['DOCUMENT_ROOT']. '/includes/footer.php');
?>
