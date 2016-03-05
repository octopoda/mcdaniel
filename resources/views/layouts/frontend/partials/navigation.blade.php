<div class="navigation__modal phone-only" id="navigationModal" id="closeMenu"></div>

<div class="quick-navigation" id="quickNavigation">
	<div class="hamburger hamburger--slider"  aria-label="Menu" aria-controls="navigation" id="openMenu">
	  <span class="hamburger-box">
	    <span class="hamburger-inner"></span>
	  </span>
	</div>


	<section>
		<div class="quick-navigation__logo" class="home-button">
	  		<div class="logo">
				<a href="/">McDaniel Nutrition</a>
			</div>
  		</div>

	  	<div class="quick-navigation__started">
			<a href="" class="btn-flatten hollow waves-effect">Get Started</a>
		</div>
	</section>
</div>

<nav id="navigation" class="main-navigation">
  	<div class="main-navigation__logo" class="home-button">
  		<div class="logo">
			<a href="/">McDaniel Nutrition</a>
		</div>
  	</div>

  	<div class="main-navigation__started">
		<a href="" class="btn-flatten hollow waves-effect">Get Started</a>
	</div>

  	<ul>
		<li>
			<a  href="#" class="Dropdown__trigger" data-dropdown="individualDropdown">Individuals</a>
			
			<ul id="individualDropdown" class="Dropdown__content">
				<li><a href="{{ route('weight-loss') }}">Weight Loss</a></li>
				<li><a href="{{ route('sports-nutrition') }}">Sports Nutrition</a></li>
				<li><a href="{{ route('maternal-nutrition') }}">Maternal Nutrition</a></li>
			</ul>
		</li>
		
		<li>
			<a href="#" class="Dropdown__trigger" data-dropdown="corporateDropdown">Corporate Wellness</a>
			
			<ul id="corporateDropdown" class="Dropdown__content">
				<li><a href="{{ route('sustain') }}">Sustain Program</a></li>
				<li><a href="{{ route('lunchAndLearn') }}">Lunch and Learn</a></li>
				<li><a href="{{ route('teachAndTaste') }}">Teach and Taste</a></li>
				<li><a href="{{ route('webinars') }}">Webinars</a></li>
			</ul>
		</li>
		
		<li><a href="{{ route('allPosts') }}">Blog</a></li>

		<li>
			<a href="#" class="Dropdown__trigger" data-dropdown='mediaDropdown' >Media</a>
			
			<ul id='mediaDropdown' class='Dropdown__content'>
			    <li><a href="href="{{ route('allAppearances') }}"">Appearances</a></li>
			    <li><a href="#!">Speaking</a></li>
			</ul>
		</li>
		
		<li>
			<a href="#" class="Dropdown__trigger" data-dropdown="aboutDropdown">About Us</a>
			
			<ul id='aboutDropdown' class='Dropdown__content'>
			    <li><a href="href="{{ route('about') }}"">About McDaniel Nutrition</a></li>
			    <li><a href="{{ route('allFAQs') }}">FAQs</a></li>
			    <li><a href="#">Jennifer</a></li>
			    <li><a href="#">Kayli</a></li>
			</ul>
		</li>
		
		<li><a href="{{ route('allProducts') }}">Store</a></li>
	</ul>


	
</nav>
