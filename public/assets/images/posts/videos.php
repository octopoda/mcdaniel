<?php
	require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php');
	require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php');
?>
<link href='http://fonts.googleapis.com/css?family=Aldrich' rel='stylesheet' type='text/css'>
<section class="mainContent">

  <header class="row">
    <div class="fourcol fork"></div>
    <div class="eightcol nutriBites">
      <h2><?php echo $site->videoTitle; ?></h2>
      <h4>Helping you eat what matters</h4>

      <p>Practical tips, easy and delicious recipes including videos covering an abundance of ideas on how to eat healthy and enjoy the journey of becoming a more healthy individual/family.</p>

      <p>I believe healthy living is more than healthy cooking.  True wellness comes from how you approach everything in life.  </p>

    </div>
  </header>
  <div class="row videoContent">
        <article class="twelvecol last videoPlacement">
            <h2><?php $display->displayTitle(); ?></h2>
            <?php $display->displayContent(); ?>
        </article>
        <h2 class="moreVideosTitle">More Videos</h2>
  </div>
  <div class="moreVideos row">
    <?php echo $display->displayAllVideos(); ?>
  </div>

</section>


<?php
$display->addScript('/js/libs/mediaelement-and-player.min.js');
$function = "$('#youtube').mediaelementplayer({enableAutosize: true});";
$display->addScriptFunctions($function);
require_once($_SERVER['DOCUMENT_ROOT']. '/includes/footer.php'); ?>
