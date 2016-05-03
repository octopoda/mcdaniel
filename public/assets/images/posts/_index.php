<?php
	require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php');
	require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php');
?>



	<div class="row fpJen">
		<article class="fourcol homeJen"></article>
		<article class="sixcol last">
			<h1><?php echo $display->displayTitle();?></h1>
			<?php echo $display->displayContent(); ?>
		</article>
	</div>

<!-- No Mobile -->
<?php if (!$mobile->isMobile()) : ?>
<section class="row fpContent home">
	<article class="fpBlog fourcol sidebar">
		<?php $display->getLatest(); //$display->frontPageBlog(5); ?>
	</article>
	<article class="eightcol last">
		<?php $display->displayFrontPage(); ?>
	</article>
</section>

<!-- Mobile -->
<?php elseif ($mobile->isMobile()) :?>
	<section class="row fpContent">
		<article class="eightcol last mobileFPTabs">
			<?php $display->displayFrontPage(); ?>
		</article>
		<article class="fpBlog fourcol sidebar">
			<?php $display->frontPageBlog(5); ?>
		</article>
	</section>

<?php endif; ?>




<section class="videoBar row">
	<?php echo $display->displayVideoBar(); ?>
</section>



<?php require_once($_SERVER['DOCUMENT_ROOT']. '/includes/footer.php'); ?>
