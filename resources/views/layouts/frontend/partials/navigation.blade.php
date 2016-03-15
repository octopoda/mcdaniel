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
			<a href="{{ route('getStarted') }}" class="btn-flatten hollow waves-effect modal-trigger" >Get Started</a>
		</div>
	</section>
</div>


<nav id="navigation" class="main-navigation {{ (isset($fixed)) ? $fixed : '' }}">
  	<div class="main-navigation__logo" id="homeButton">
  		<div class="logo">
			<a href="/">McDaniel Nutrition</a>
		</div>
  	</div>

  	<div class="main-navigation__started">
		<a href="{{ route('getStarted') }}" class="btn-flatten hollow waves-effect">Get Started</a>
	</div>

  	<ul>
		<li class="Dropdown__trigger" data-dropdown="individualDropdown">
			<a class="Dropdown__link">Individuals</a>
			
			<ul id="individualDropdown" class="Dropdown__content">
				<li><a href="{{ route('weight-loss') }}">Weight Loss</a></li>
				<li><a href="{{ route('sports-nutrition') }}">Sports Nutrition</a></li>
				<li><a href="{{ route('maternal-nutrition') }}">Maternal Nutrition</a></li>
				<li><a href="{{ route('rmr') }}">RMR Testing</a></li>
			</ul>
		</li>
		
		<li>  <!-- class="Dropdown__trigger" data-dropdown="corporateDropdown"> -->
			<a href="{{ route('corporate') }}">Corporate Wellness</a>
			
			{{--  <ul id="corporateDropdown" class="Dropdown__content">
				<li><a href="{{ route('sustain') }}">Sustain Program</a></li>
				<li><a href="{{ route('lunchAndLearn') }}">Lunch and Learn</a></li>
				<li><a href="{{ route('teachAndTaste') }}">Teach and Taste</a></li>
				<li><a href="{{ route('webinars') }}">Webinars</a></li>
			 </ul> --}}
		</li>
		
		<li><a href="{{ route('allPosts') }}">Blog</a></li>
		<li><a href="{{ route('allAppearances') }}">Media</a></li>
		
		<li class="Dropdown__trigger" data-dropdown="aboutDropdown">
			<a class="Dropdown__link">About Us</a>
			
			<ul id='aboutDropdown' class='Dropdown__content'>
			    <li><a href="{{ route('about') }}">About McDaniel Nutrition</a></li>
			    <li><a href="{{ route('allFAQs') }}">FAQs</a></li>
			</ul>
		</li>
		
		<li><a href="{{ route('allProducts') }}">Store</a></li>
	</ul>

</nav>
