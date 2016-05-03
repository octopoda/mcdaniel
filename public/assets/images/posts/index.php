<?php
	require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php');
	require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php');
?>


<!-- Header -->
	<div class="row fpJen">
		<article class="fourcol homeJen"></article>
		<article class="sixcol last">
			<h1><?php echo $display->displayTitle();?></h1>
			<?php echo $display->displayContent(); ?>
		</article>
	</div>

<!-- Carousel -->
<section id="mc-carousel" class="owl-carousel row" style="height:400px;" >
	<?= $display->getLatest('carousel'); ?>
</section>


<!-- Home Page -->
<section class="row fpContent home">
<?php if (!$detect->isMobile()) : ?>
	
	<article class="videobar fourcol sidebar">
		<?php echo $display->displayVideoBar(); ?>
	</article>
	<article class="eightcol last">
		<?php $display->displayFrontPage(); ?>
	</article>


<?php else : ?>
	<article class="eightcol last">
		<?php $display->displayFrontPage(); ?>
	</article>
	<article class="videobar fourcol sidebar">
		<?php echo $display->displayVideoBar(); ?>
	</article>

<?php endif; ?>
</section>
<?php 
	$script = '
 					$("#mc-carousel").owlCarousel({
 						navigation : false, // Show next and prev buttons
      					slideSpeed : 300,
      					paginationSpeed : 400,
      					singleItem:true,
      					autoPlay: true
      				});
      			';
	$display->addScriptFunctions($script);
	$display->addScript('/js/libs/owl.min.js');
?>

<?php require_once($_SERVER['DOCUMENT_ROOT']. '/includes/footer.php'); 



// });