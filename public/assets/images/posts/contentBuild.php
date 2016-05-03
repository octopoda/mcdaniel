<?php 
	require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php'); 
	require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php');
  $image = null;

  if (isset($display->content->contentType)) {
    if ($display->content->contentType == 1) {
      $image = 'style="background:url('.$display->content->headerImage.'); background-size:cover"';
    } else {
      $image = null;
    }
  }

?>
<section class="mainContent">
  <div class="row headerImage" style="background:url(/files/uploads/american_family.jpg) top left no-repeat; background-size:cover"></div>
	<div class="row content">
        <article>
           	<h1>Angela Lemond Resouces</h1>
            <div class="sixcol">
              <h3>For Kids</h3>
              <ul>
                <li><a href="http://www.bam.gov/sub_yourbody/index.html">Body and Mind: Disease, Food & Nutrition, Physical Activity, Safety by CDC</a></li>
                <li><a href="http://www.choosemyplate.gov/children-over-five.html">Choose My Plate Tools for Kids by U.S. Department of Agriculture</a></li>
                <li><a href="http://www.epa.gov/waterscience/fish/kids/">Fish for Kids by Environmental Protection Agency</a></li>
                <li><a href="http://www.girlshealth.gov/nutrition/">For Girls: Be Healthy, Be Happy, Be you, Beautiful by U.S. Department of HHS</a></li>
                <li><a href="http://kidshealth.org/kid/">How the Body Works by Nemours Pediatric Health System</a></li>
                <li><a href="http://kidshealth.org/kid/diabetes_basics/what/nick_madi.html">Nick Jonas & Diabetes by Nemours Pediatric Health System</a></li>
                <li><a href="http://www.superkidsnutrition.com/">SuperKids Nutrition Provided by Registered Dietitians and Nutrition Scientists</a></li>
              </ul>
              <h3>For Unexpected Weight Loss Aged 3 and Up</h3>
              <ul>
                  <li><a href="http://www.angelalemond.com/upload/highcalliqdiet.pdf">High Calorie Liquid Diet by University of Virginia Health System’s Digestive Health Center (in PDF)</a></li>
                  <li><a href="http://www.angelalemond.com/upload/weight%20gain.pdf">Weight Gain the Healthy Way by Me (Angela) in PDF</a></li>
              </ul>
              </div>
              <div class="sixcol last">
                <h3>For Adults</h3>
                <ul>
                  <li><a href="http://www.choosemyplate.gov/">Choose My Plate Tools by U.S. Department of Agriculture</a></li>
                  <li><a href="http://www.thescramble.com/">Dinnertime Unscrambled a Favorite of Mine (Angela’s) Comes with Shopping Lists and Recipes that are Easy and Delicious</a></li>
                  <li><a href="http://ods.od.nih.gov/factsheets/list-all/">Easy to Understand Facts of over 75 Dietary Supplements by NIH</a></li>
                  <li><a href="http://www.cdc.gov/nutrition/everyone/index.html">Easy to Understand Nutrition for Everyone by CDC</a></li>
                  <li><a href="http://www.eatright.org/Public/content.aspx?id=206">Eat Right Nutrition Tip Sheets by Academy of Nutrition and Dietetics</a></li>
                  <li><a href="http://fnic.nal.usda.gov/dietary-guidance/dietary-reference-intakes/dri-tables">Find Out How Much of the Dietary References Intake (DRI) You Need by U.S. Department of Agriculture</a></li>
                  <li><a href="http://www.nutrition.gov/">Free Nutrition Information by U.S. Department of Agriculture</a></li>
                  <li><a href="http://www.healthcastle.com/">Health Community Run Exclusively by Registered Dietitians</a></li>
                  <li><a href="http://www.fruitsandveggiesmatter.gov/">How Many Fruits & Vegetables You Need and Recipes by Produce Type by CDC</a></li>
                  <li><a href="http://www.fda.gov/Food/ResourcesForYou/Consumers/NFLPM/ucm274593.htm">How to Understand and Use the Nutrition Facts Label by FDA</a></li>
                  <li><a href="http://ndb.nal.usda.gov/">Lookup Nutrition Content of Foods by U.S. Department of Agriculture</a></li>
                  <li><a href="http://www.shopwell.com/nutrition">Personalized Shopping Lists by Eating Goals and Even Trade-Up Products to Pack More Nutrition Power In</a></li>
                  <li><a href="http://gotexan.org/LocateGOTEXAN/CertifiedFarmersMarkets.aspx">Pick Texas – Certified Farmers Markets by City by Texas Department of Agriculture</a></li>
                  <li><a href="http://gotexan.org/Portals/1/doc/pdf/publications/produce_avail_050310.pdf">Pick Texas – In-Season Produce by Location by Texas Department of Agriculture (PDF)</a></li>
                  <li><a href="http://www.cdc.gov/healthyweight/losing_weight/eating_habits.html">Simple Ways to Improve Your Eating Habits by CDC</a></li>
                  <li><a href="http://www.nutrientrichfoods.org/living_nutrient_rich/index.html">Upping the Nutrition of You’re the Food You Eat by Nutrient Rich Foods Coalition</a></li>
                </ul>
              </div>
              <!-- Content -->
          </article>
              
    </div>
    <div class="videoBar row">
      <h3><?php echo $site->videoTitle; ?></h3>
     <?php echo $display->displayVideoBar(); ?>
    </div>

    <section class="row adBar">
      <?php if ($site->news == 1 && $site->ads == 1) : //Ads and News ?>
        <div class="eightcol">
          <?php echo $display->displayAds(1); ?> 
        </div>
        <div class="newsSection fourcol last">
          <?php echo $display->displayNews(1); ?>
        </div>
      

      <?php elseif ($site->news == 1 && $site->ads == 0) :  //News only ?>
        <div class="twelvecol newsOnly">
          <?php echo $display->displayNews(2); ?>
        </div>
      

      <?php elseif ($site->ads == 1 && $site->news == 0) : // Ads Only ?>
        <div class="twelvecol adsOnly">
          <?php echo $display->displayAds(2); ?> 
        </div>
      <?php endif; ?>
    </section>
  </section>


  <?php require_once($_SERVER['DOCUMENT_ROOT']. '/includes/footer.php'); ?>        
         