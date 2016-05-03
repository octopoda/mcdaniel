<?php require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php'); ?>
<?php require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php'); ?>
<?php
	$site = new Site();
?>

<!-- Tip Header -->
<section class="mainContent">
    <header class="row">
        <div class="fourcol fork"></div>
        <div class="eightcol">
          <?php echo $display->randomTip(); ?>
        </div>
    </header>
</section>

<section class="row fpContent">
    <article class="fpBlog sidebar fourcol">
      <?php include(MODULES. 'sidebar.php'); ?>
    </article>
    <article class="eightcol last">
      <h1>Thanks for signing up for My Newsletter</h1>

    <p>I can’t wait to read how I can help you separate fact from fiction in eating for a healthy life. </p>
    <p>You are not quite signed up just yet.  You will receive an email from my mailing list asking you to confirm you subscription.  Once you have confirmed you will start to receive my monthly newsletters  </p>

    <p>Thanks, </p>
    <p>Jennifer McDaniel, MS, RD, CSSD, LD<br />
    <p>Registered Dietitian and Certified Specialist in Sports Dietetics</p>
    </article>
  </section>





<?php require_once($_SERVER['DOCUMENT_ROOT']. '/includes/short_footer.php'); ?>
