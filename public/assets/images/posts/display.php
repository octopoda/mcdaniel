<?php
	require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php');
	require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php');

  curPageURL();

  $sidebar = $display->whichSidebar();

  if ($sidebar == 'sidebar') {
    $link = 'sidebar.php';
    $footer =  'footer.php';
  } else if ($sidebar == 'social') {
    $link = 'social_sidebar.php';
    $footer =  'short_footer.php';
  }



?>

<!-- Normal Sidebars -->
  <section class="mainContent">
    <header class="row">
        <div class="fourcol fork"></div>
        <div class="eightcol">
          <?php $display->randomTip(); ?>
        </div>
    </header>
  </section>


<?php if ($sidebar == 'sidebar') : ?>
  <section class="row fpContent <?php echo $display->navTitle ?>">
    <?php  if (!$mobile->isMobile()) : ?>
      <article class="fpBlog sidebar fourcol">
        <?php include(MODULES. $link); ?>
      </article>
      <article class="eightcol last <?php echo (isset($display->contentTitle)) ? $display->contentTitle : '' ?>">
        <!-- For all other Pages -->
        <?php if ($display->getSecondNav()) {
            $display->displaySecondNav();
        } ?>
          <h1><?php echo $display->displayTitle(); ?></h1>
          <?php echo $display->displayContent();?>
      </article>
    <?php elseif($mobile->isMobile()) : ?>
    <?php if ($display->getSecondNav()) {
            $display->displaySecondNav();
        } ?>
      <article class="eightcol last">
        <!-- For all other Pages -->

          <h1><?php echo $display->displayTitle(); ?></h1>
          <?php echo $display->displayContent();?>
      </article>
      <article class="fpBlog sidebar fourcol">
        <?php include(MODULES. $link); ?>
      </article>
    <?php endif; ?>
  </section>

<!-- Social Sidebars -->
<?php elseif ($sidebar == 'social') : ?>
  <section class="row fpContent <?php echo $display->navTitle ?>">
    <article class="eightcol">
      <?php if ($display->getSecondNav()) {
        $display->displaySecondNav();
      } else { ?>
        <h1><?php echo $display->displayTitle(); ?></h1>
        <?php echo $display->displayContent();?>
      <? } ?>
    </article>
    <article class="fourcol sidebar right">
      <?php include(MODULES. $link); ?>
    </article>
  </section>
<?php endif; ?>


<!-- Media Page -->


  <section class="videoBarInside row">
    <?php echo $display->displayVideoBar(); ?>
  </section>





<?php
  if ($display->navTitle == "appearances") {
    $display->addScript('/js/libs/mediaelement-and-player.min.js');
    $function = "$('#youtube').mediaelementplayer({enableAutosize: true});";
    $display->addScriptFunctions($function);
  }
  require_once(INCLUDES. $footer);
?>
