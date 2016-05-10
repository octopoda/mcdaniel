
<div data-ng-controller="ContactFormController as fc">
	<form name="contactForm" class="top-errors m-contact-form" data-ng-submit="fc.submitForm()" data-ng-init="fc.formData.formType = 'get-started-page'">
		<!-- Dynamic Form -->
		<div data-ng-switch="fc.service">
			<div class="form-group" data-ng-switch-when="all">
				<label for="service">Our Services:</label>
				<select id="interestedService" name="interestedService" data-ng-model="fc.formData.interestedService" >
					<option value="sustain" selected="selected">Sustain Weight Loss</option>
					<option value="sustain-premium">Sustain Weight Loss Premium</option>
					<option value="sports">Sports Nutrition</option>
					<option value="maternal">Maternal Nutrition</option>
					<option value="rmr-testing">RMR Testing</option>
					<option value="sustain-coporate">Sustain </option>
					<option value="sustain-virtual">Sustain Virtual</option>
					<option value="lunch-and-learn">Lunch &amp; Learn</option>
					<option value="teach-and-taste">Taste &amp; Teach</option>
					<option value="webinars">Webinars</option>
				</select>
			</div>

			<!-- Weight Loss -->
			<div class="form-group" data-ng-switch-when="weight-loss">
				<label for="service">Weight Loss Services:</label>
				<select id="interestedService" name="interestedService" data-ng-model="fc.formData.interestedService">
					<option value="sustain" selected="selected">Sustain </option>
					<option value="sustain-premium">Sustain Premium</option>
				</select>
			</div>

			<!-- Sustain Corporate -->
			<div class="form-group" data-ng-switch-when="sustain-corporate">
				<label for="service">Online Service:</label>
				<select id="interestedService" name="interestedService" data-ng-model="fc.formData.interestedService">
					<option value="sustain-corporate">In-Office</option>
					<option value="sustain-virtual">Online</option>
				</select>
			</div>


			<div class="form-group" data-ng-switch-default>
				<input type="hidden" id="interestedService" name="interestedService" data-ng-model="fc.formData.interestedService">
			</div>
		</div>

		<div class="form-group">
			<label for="customer_name">Name <i class="required">*</i></label>
			<div class="input-errors" data-ng-messages="contactForm.customer_name.$error" ng-if="contactForm.customer_name.$dirty">
				<small class="error" data-ng-message="required">Please provide your name</small>
			</div>	
			<input type="text" name="customer_name" id="customer_name"  placeholder="Full Name" data-ng-model="fc.formData.customerName" required>
		</div>

		
		<div class="form-group">
			<label for="email_address">Email <i class="required">*</i></label>
			<div class="input-errors" data-ng-messages="contactForm.email_address.$error" ng-if="contactForm.email_address.$dirty" role="alert">
				<small class="error" data-ng-message="required">Please provide your email</small>
				<small class="error" data-ng-message="email">Please provide a valid email</small>
			</div>
			<input type="email" name="email_address" id="emailAddress" placeholder="" ng-model="fc.formData.email" >
		</div>
		
		<div class="form-group">
			<label for="phone_number">Phone Number</label>
			<input phone-input target-id="bestTime" type="tel" name="phone_number" id="" ng-model="fc.formData.phone" placeholder="(555) 555-5555">
		</div>

		<div id="bestTime" class="hide">
			<p class=" form-group label">When is the best time to call</p>	
			<ul class="contact-address__form__checkboxes form-group">
				<li>
					<input type="checkbox" class="" name="best_contact_time" id="best-contact-time_morning" ng-model="fc.formData.bestContactTime.morning" value="morning">
					<label for="best_contact_time_morning">Morning</label>
				</li>
				<li>
					<input type="checkbox" class="" name="best_contact_time" id="best-contact-time_daytime" ng-model="fc.formData.bestContactTime.daytime" value="daytime">
					<label for="best_contact_time_daytime">Daytime</label>
				</li>
				<li>
					<input type="checkbox" class="" name="best_contact_time" id="best-contact-time_afternoon" ng-model="fc.formData.bestContactTime.afternoon" value="afternoon">
					<label for="best_contact_time_afternoon">Afternoon</label>
				</li>
				<li>
					<input type="checkbox" class="" name="best_contact_time" id="best-contact-time_night" ng-model="fc.formData.bestContactTime.night" value="night">
					<label for="best_contact_time_night">Night</label>
				</li>
			</ul>

		</div>
		
		<div class="form-group">
			<label for="contactMessage">Message</label>
			<textarea name="contact_message" id="contactMessage" cols="30" rows="10" ng-model="fc.formData.contactMessage"></textarea>
		</div>
		
		<div class="form-group__center">
			<input type="hidden" name="form_type" data-ng-model="fc.formData.formType" value="get-started-page">
			<button class="button__loading {! fc.loading !}" ng-disabled="contactForm.$invalid">
				<div class="progress-spinner"></div>
				<div class="button-text">Get Started</div> 
			</button>
		</div>
		<div class="contact__success" data-ng-show="fc.success" data-ng-cloak>
			<p>{! fc.successMessage  !}</p>
		</div>
	</form>
</div>