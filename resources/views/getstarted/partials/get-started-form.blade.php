<div data-ng-controller="ContactFormController as fc">
	<form name="contactForm" class="top-errors m-contact-form" data-ng-submit="fc.submitForm()" data-ng-init="fc.formData.formType = 'get-started-page'; fc.getStarted = true">
		<!-- Dynamic Form -->
		<div data-ng-switch="fc.service">
			<div class="form-group" data-ng-switch-when="all">
				<label for="service">Our Services:</label>
				<select id="interestedService" name="interestedService" data-ng-model="fc.formData.interestedService" data-ng-change="fc.updatePrice()" >
					<option value="weight-loss-sustain" selected="selected" data-item-price="150">Sustain Weight Loss</option>
					<option value="weight-loss-sustain-premium" data-item-price="450">Sustain Weight Loss Premium</option>
					<option value="weight-loss-sustain-online" data-item-price="400">Sustain Weight Loss Online</option>
					<option value="sports" data-item-price="180">Sports Nutrition</option>
					<option value="maternal" data-item-price="150">Maternal Nutrition</option>
					<option value="rmr-testing" data-item-price="75">RMR Testing</option>
					<option value="sustain-coporate" data-item-price="null">Sustain </option>
					<option value="sustain-virtual" data-item-price="null">Sustain Virtual</option>
					<option value="lunch-and-learn" data-item-price="300">Lunch &amp; Learn</option>
					<option value="teach-and-taste" data-item-price="400">Taste &amp; Teach</option>
					<option value="webinars">Webinars</option>
				</select>
			</div>

			<!-- Weight Loss -->
			<div class="form-group" data-ng-switch-when="weight-loss">
				<label for="service">Weight Loss Services:</label>
				<select id="interestedService" name="interestedService" data-ng-model="fc.formData.interestedService" data-ng-change="fc.updatePrice()">
					<option value="weight-loss-sustain" selected="selected" data-item-price="150" data-item-name="Weight Loss <br> Individual Consultation">Sustain</option>
					<option value="weight-loss-sustain-premium" data-item-price="450" data-item-name="Premium Sustain Weight Loss Consultation">Sustain Premium</option>
					<option value="weight-loss-sustain-online" data-item-price="400" data-item-name="Sustain Weight Loss Online">Sustain Online</option>
				</select>
			</div>

			<!-- Sustain Corporate -->
			<div class="form-group" data-ng-switch-when="sustain-corporate">
				<label for="service">Online Service:</label>
				<select id="interestedService" name="interestedService" data-ng-model="fc.formData.interestedService" data-ng-change="fc.updatePrice()">
					<option value="sustain-corporate" data-item-price=null>In-Office</option>
					<option value="sustain-online" data-item-price=null>Online</option>
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
					<input type="checkbox" class="" name="best_contact_time" id="best_contact_time_morning" ng-model="fc.formData.bestContactTime.morning" value="morning">
					<label for="best_contact_time_morning">Morning</label>
				</li>
				<li>
					<input type="checkbox" class="" name="best_contact_time" id="best_contact_time_daytime" ng-model="fc.formData.bestContactTime.daytime" value="daytime">
					<label for="best_contact_time_daytime">Daytime</label>
				</li>
				<li>
					<input type="checkbox" checked class="" name="best_contact_time" id="best_contact_time_afternoon" ng-model="fc.formData.bestContactTime.afternoon" value="afternoon">
					<label for="best_contact_time_afternoon">Afternoon</label>
				</li>
				<li>
					<input type="checkbox" class="" name="best_contact_time" id="best_contact_time_night" ng-model="fc.formData.bestContactTime.night" value="night">
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