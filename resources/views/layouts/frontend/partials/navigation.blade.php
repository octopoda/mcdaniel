<section class="navigation" id="navigationWrapper">
	<div class="navigation__quick-nav row" id="quickNav">
		<a href="#" class="menu-button" id="openMenu"><i class="material-icons">menu</i></a>
		<a href="#" class="btn-flatten hollow">Get Started</a>
	</div>


	
	<div class="navigation__logo row">
		<div class="logo">
			<a href="/">McDaniel Nutrition</a>
		</div>
	</div>
	
	<!-- Main Nav -->
	<nav class="col s12 m8 navigation__menu" id="mainMenu">
		<ul>
			<li><a href="{{ route('patients') }}">Patients</a></li>
			<li><a href="{{ route('corporate') }}">Corporate Wellness</a></li>
			<li><a href="{{ route('allAppearances') }}">Press</a></li>
			<li><a href="{{ route('allAppearances') }}">Speaking</a></li>
			<li><a href="{{ route('about') }}">About Us</a></li>
			<li><a href="{{ route('allFAQs') }}">FAQs</a></li>
			<li><a href="{{ route('allPosts') }}">Blog</a></li>
			<li><a href="{{ route('allProducts') }}">Store</a></li>
		</ul>
	</nav>
</section>


<section>

	<!-- Side Nav -->
	<nav class="col s12 m6 l4 navigation__side-menu " id="sideMenu">
		<div class="logo white-logo">
			<a href="/">McDaniel Nutrition</a>
		</div>	
		
		<a href="#" class="navigation__side-menu--close-button" id="menu-close-button"><i class="material-icons">close</i></a>
		
		<ul>
			<li><a href="{{ route('patients') }}">Patients</a></li>
			<li><a href="{{ route('corporate') }}">Corporate Wellness</a></li>
			<li><a href="{{ route('allAppearances') }}">Press</a></li>
			<li><a href="{{ route('allAppearances') }}">Speaking</a></li>
			<li><a href="{{ route('about') }}">About Us</a></li>
			<li><a href="{{ route('allFAQs') }}">FAQs</a></li>
			<li><a href="{{ route('allPosts') }}">Blog</a></li>
			<li><a href="{{ route('allProducts') }}">Store</a></li>
		</ul>
	</nav>
</section>

