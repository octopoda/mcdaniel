<li class="phone-only"><a class="mobile-navigation-button"><span class="navigation__menu"></span></a></li>

<nav id="navigation" class="navigation">
  <div class="navigation__row">
      <div class="site-branding">
    		<a href="\">McDaniel Nutrition</a>
    	</div>

    	<div class="main-navigation">
          <ul class="main-navigation__menu">
        		<li class="dropdown-trigger"><a href="#" title="Indivduals">Individuals</a>
              <ul class="dropdown-menu">
                <li><a href="{{ route('weight-loss') }}">Weight Loss</a></li>
                <li><a href="{{ route('sports-nutrition') }}">Sports Nutrition</a></li>
                <li><a href="{{ route('maternal-nutrition') }}">Maternal Nutrition</a></li>
                <li><a href="{{ route('rmr') }}">RMR Testing</a></li>
              </ul>
            </li>
        		<li><a href="{{ route('corporate') }}" title="Corporate">Corporate</a></li>
        		<li><a href="{{ route('allPosts') }}" title="Blog" >Blog</a></li>
        		<li><a href="{{ route('allAppearances') }}" title="Media" >Media</a></li>
        		<li class="dropdown-trigger"><a href="{{ route('about') }}" title="About" >About</a>
                <ul class="dropdown-menu">
                  <li><a href="{{ route('jennifer') }}">Jennifer McDaniel</a></li>
                  <li><a href="{{ route('allFAQs') }}">FAQs</a></li>
                </ul>
            </li>
        		<li><a href="#" title="Store" >Store</a></li>
      	 </ul>


        	<ul class="main-navigation__cta">
            <li class="button"> <a href="{{ route('contact') }}">Get Started</a> </li> 
          </ul>
    </div>
  </div>
</nav>
