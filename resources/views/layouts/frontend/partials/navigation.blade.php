<section class="navigation">
	<div class="navigation__quick-nav row">
		<a href="#" data-activates="main-menu" class="button-collapse menu-button"><i class="material-icons">menu</i></a>
		<a href="#" class="btn-flatten">Get Started</a>
	</div>


	<div class="navigation__logo row">
		<div class="logo">
			<a href="/">McDaniel Nutrition</a>
		</div>
	</div>

	<nav class="col s12 m8 navigation__menu" id="main-menu">
		<a href="#" class="navigation__menu--close-button hide-on-med-and-up"><i class="material-icons">close</i></a>
		<ul>
			<li><a href="{{ route('patients') }}">Patients</a></li>
			<li><a href="{{ route('corporate') }}">Corporate Wellness</a></li>
			<li><a href="{{ route('allAppearances') }}">Appearances</a></li>
			<li><a href="{{ route('about') }}">About Us</a></li>
			<li><a href="{{ route('allFAQs') }}">FAQs</a></li>
			<li><a href="{{ route('allPosts') }}">Blog</a></li>
			<li><a href="{{ route('allProducts') }}">Store</a></li>
		</ul>
	</nav>
</section>