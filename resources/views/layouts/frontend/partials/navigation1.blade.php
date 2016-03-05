<section class="navigation" id="navigationWrapper">
	<div class="navigation__quick-nav row" id="quickNav">
		<a href="#" class="menu-button" id="openMenu"><i class="material-icons">menu</i></a>
		<a href="#contactModal" class="btn-flatten hollow modal-trigger">Get Started</a>
	</div>


	
	<div class="navigation__logo row">
		<div class="logo">
			<a href="/">McDaniel Nutrition</a>
		</div>
	</div>
	
	<!-- Main Nav -->
	<nav class="col s12 m8 navigation__menu" id="mainMenu">
		<a href="#" class="navigation__menu--close-button" id="menu-close-button"><i class="material-icons">close</i></a>
		<ul>
			<li>
				<a  data-beloworigin="true"  data-activates="individualDropdown" href="#" class="dropdown-button">Individuals</a>
				
				<ul id="individualDropdown" class="dropdown-content">
					<li><a href="{{ route('weight-loss') }}">Weight Loss</a></li>
					<li><a href="{{ route('sports-nutrition') }}">Sports Nutrition</a></li>
					<li><a href="{{ route('maternal-nutrition') }}">Maternal Nutrition</a></li>
				</ul>
			</li>
			
			<li>
				<a  data-beloworigin="true"  data-activates="corporateDropdown" href="#" class="dropdown-button">Corporate Wellness</a>
				<ul id="corporateDropdown" class="dropdown-content">
					<li><a href="{{ route('sustain') }}">Sustain Program</a></li>
					<li><a href="{{ route('lunchAndLearn') }}">Lunch and Learn</a></li>
					<li><a href="{{ route('teachAndTaste') }}">Teach and Taste</a></li>
					<li><a href="{{ route('webinars') }}">Webinars</a></li>
				</ul>
			</li>
			
			<li><a href="{{ route('allPosts') }}">Blog</a></li>

			<li>
				<a data-beloworigin="true"  data-activates='mediaDropdown' class="dropdown-button" href="#">Media</a>
				<ul id='mediaDropdown' class='dropdown-content'>
				    <li><a href="href="{{ route('allAppearances') }}"">Appearances</a></li>
				    <li><a href="#!">Speaking</a></li>
				</ul>
			</li>
			
			<li>
				<a data-beloworigin="true"  href="#" class="dropdown-button" data-activates="aboutDropdown">About Us</a>
				<ul id='aboutDropdown' class='dropdown-content'>
				    <li><a href="href="{{ route('about') }}"">About McDaniel Nutrition</a></li>
				    <li><a href="{{ route('allFAQs') }}">FAQs</a></li>
				    <li><a href="#">Jennifer</a></li>
				    <li><a href="#">Kayli</a></li>
				</ul>
				
			</li>
			
			
			<!-- <li><a href="{{ route('allProducts') }}">Store</a></li> -->
		</ul>
	</nav>
</section>

{{--
<section>
	<!-- Side Nav -->
	 <nav class="col s12 m6 l4 navigation__side-menu " id="sideMenu">
		<div class="logo white-logo">
			<a href="/">McDaniel Nutrition</a>
		</div>	
		
		<a href="#" class="navigation__side-menu--close-button" id="menu-close-button"><i class="material-icons">close</i></a>
		
		<ul>
			<li><a href="{{ route('individuals') }}">Individuals</a></li>
			<li><a href="{{ route('corporate') }}">Corporate Wellness</a></li>
			<li><a href="{{ route('allPosts') }}">Blog</a></li>
			
			<li><a href="{{ route('allAppearances') }}">Media</a></li>
			<li><a href="{{ route('about') }}">About Us</a></li>
			<li><a href="{{ route('allFAQs') }}">FAQs</a></li>
			
			<li><a href="{{ route('allProducts') }}">Store</a></li>
		</ul>
	</nav>
</section> --}}

