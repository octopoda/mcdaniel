<?php require_once($_SERVER['DOCUMENT_ROOT'].'/includes/require.php'); ?>
<?php require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php'); ?>
<?php
	$site = new Site();
  $contact = new ContactInformation();
  $id = null;

  if (isset($_GET['id'])) {
    $id = $_GET['id'];
  }

  $name = Contact::ContactIds($id);

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
<!-- Content Section -->
<section class="row fpContent contactUs">
    <article class="eightcol">
        <h1><?php echo (empty($id)) ? 'Contact Jennifer' : 'Sign Up'; ?></h1>
    <div class="contactWrapper">
      <div class="contactRemove">
       <?php if (empty($id)) : ?>
         <div class="textIntro">
        <p>Please get in touch with me to book a one-on-one consultation, media interview or speaking event. </p>

<p>I will get back to you as quickly as I can.  Usually it is within 24 hours during the week or less. You are always welcome to call me directly at: <?php echo $contact->phonenumber; ?>.</p>

<p>Looking forward to helping you achieve optimal health for an enriching life. </p>
        </div>
       <div class="sixcol">
          <h3>Stop on by:</h3>
          <?php echo $contact->address->printAddress(); ?>
       </div>
       <div class="sixcol">
          <h3>Give me a Call</h3>
          <?php echo $display->printPhones(); ?>
       </div>
     <?php endif; ?>
       <form id="contactForm" method="POST" class="row">

        <fieldset class="sixcol">
            <h3>Send Jennifer an Email</h3>
            <p>
              <label for="name">Name:</label>
              <input type="text" name="name" id="name" class="required" autocomplete="off" />
            </p>
            <p>
              <label for="email">Email:</label>
              <input type="email" name="email" id="email" class="email" autocomplete="off" />
            </p>
            <!-- <p>
              <label for="phone">Phone:</label>
              <input type="phone" name="phone" id="phone"  placeholder="e.g. (972) 867-5309" autocomplete="off" />
            </p> -->
            <p>
              <label for="message">Additional Comments:</label>
              <textarea type="text" name="message" id="message" class="required" autocomplete="off" rows=10 ></textarea>
            </p>
        </fieldset>
        <fieldset class="sixcol last">
          <h3>I am Interested In</h3>
          <?php  if (empty($id)) : ?>
          <ul class="radio">
            <li><label for="interest"><input type="radio" name="interest" id="interest" value="wl" /> Weight Management</label></li>
            <li><input type="radio" name="interest" id="interest" value="cl" /> Corporate Wellness /Speaking Engagements</li>
            <li><input type="radio" name="interest" id="interest" value="sn" /> Sports Nutrition </li>
            <li><input type="radio" name="interest" id="interest" value="rmr" /> Resting Metabolic Rate (RMR) Testing</li>
            <li><input type="radio" name="interest" id="interest" value="o" class="otherRadio" /> Other <input type="text" name="other" id="other" class="other" /></li>
          </ul>
        <? else : ?>
            <h5 class="interestType"><?php echo $name; ?></h5>
            <input type="hidden" name="interest" id="interest" value="<?php echo $id ?>" />

        <? endif; ?>
          <h3 class="how">How did you hear about us?</h3>
          <div class="style_select">
            <select name="hear" id="hear">
              <option value="1">Friend</option>
              <option value="2">Physician/Therapist</option>
              <option value="3">Presentation</option>
              <option value="4">Print Article</option>
              <option value="5">Radio</option>
              <option value="6">TV</option>
              <option value="7">Web Search</option>
            </select>
          </div>

          <p class="honeyPot"></p>

        </fieldset>

          <p class="submitArea">
            <input type="hidden" name="sendEmail" value="1" />
            <button name="sendEmail" id="sendEmail" class="button" >Email Jennifer</button>
          </p>

          <div class="formMessage"></div>
        </div>
        </form>
        <div class="contactShow">
          <h1>Hi!</h1>

          <p>Thanks for reaching out to me. Your email has made it to my inbox and I will do my best  to get you an answer in 24 hours or less during the week. </p>

          <p>If you need a response sooner, please call me at: <?php echo $contact->phonenumber; ?></p>

          <p>I can’t wait to see how I can help you achieve a healthy lifestyle that is easy and delicious so you can live a fuller life. </p>
          <p>To your health,</p>

          <p>Jennifer</p>

          <p>Jennifer McDaniel, MS, RD, CSSD, LD<br/>
          Registered Dietitian and Certified Specialist in Sports Dietetics</p>
        </div>
      </div>
      </article>
      <!-- Sidebar -->
      <article class="sidebar right fourcol">
        <?php include(MODULES. 'social_sidebar.php'); ?>
    </article>
</section>




<?php require_once($_SERVER['DOCUMENT_ROOT']. '/includes/short_footer.php'); ?>
