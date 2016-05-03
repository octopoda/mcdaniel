<?php
	require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/require.php');
	require_once($_SERVER['DOCUMENT_ROOT']. '/includes/header.php');


	if (!empty($_GET['g'])) {
		$u_id = Users::getUsersFromGuid($_GET['g']);
		if ($u_id == false) {
			echo '<h3>Your password request has expired. Please try again.</h3>';
			return;
		}

		$u = new Users($u_id);
		$action = 1;
	} else {
		$action = 2;
	}

?>
<section class="login">
<div class="row">
<?php if ($action == 1) : ?>


<form id="formSubmit" method="POST" >
    <fieldset class="step">
        <h4>Change Password for <?php echo $u->printName(); ?></h4>
        <p>
            <label for ="newPass">New Password</label>
            <input id="newPass" name="newPass" type="password" class="required" />

        </p>
        <p>
            <label for ="verifyPass">Verify Password</label>
            <input id="verifyPass" name="verifyPass" type="password" class="equalTo" />
        </p>

        <p class="submit">
            <input type="hidden" name="user_id" value="<?php echo $u->user_id ?>">
           <input type="hidden" name="changePassword" value="/users/profile.html"  />
           <button type="submit"><?php echo "Change Password"; ?></button>
        </p>
    </fieldset>



</form>
<?php endif; ?>
<?php if ($action == 2) : ?>
	<form id="formSubmit" method="POST" >
    	<fieldset>
        	<h1>Email on File</h1>
            <p>
            	<label for="email">Email:</label>
                <input type="email" name="email" id="email" class="email"/>
            </p>
            <p>
            	<input type="hidden" name="forgotPassword" value="1"  />
                <button type="submit">Change password</button>
            </p>
            <p class="mailMessage"></p>
        </fieldset>
    </form>
<?php endif; ?>

<div class="data"></div>
</div>
</section>
<?php require_once($_SERVER['DOCUMENT_ROOT']. '/includes/footer.php'); ?>
