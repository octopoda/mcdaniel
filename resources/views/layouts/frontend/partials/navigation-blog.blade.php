<li class="phone-only"><a class="mobile-navigation-button"><span class="navigation__menu"></span></a></li>

<nav id="navigation" class="navigation blog {{ $navigation_style }}" data-blog-navigation>
  <div class="navigation__row">
      <div class="site-branding blog" data-go-blog>
        <a href="\">McDaniel Nutrition</a>
      </div>

      <div class="main-navigation">
          <ul class="main-navigation__menu">
            <li class="dropdown-trigger" data-dropdown>
              <a href="#" title="Indivduals">Individuals</a>
              <ul class="dropdown-menu">
                <li><a href="{{ route('weight-loss') }}">Weight Loss</a></li>
                <li><a href="{{ route('sports-nutrition') }}">Sports Nutrition</a></li>
                <li><a href="{{ route('maternal-nutrition') }}">Maternal Nutrition</a></li>
                <li><a href="{{ route('rmr') }}">RMR Testing</a></li>
              </ul>
            </li>
            <li><a href="{{ route('corporate') }}" title="Corporate">Corporate</a></li>
            <li class="dropdown-trigger" data-dropdown>
              <a href="#" title="Blog" >Blog</a>
              <ul class="dropdown-menu">
                  <li><a href="{{ route('allPosts') }}">Articles</a></li>
                  <li><a href="{{ route('recipePosts') }}">Recipes</a></li>
                </ul>
            </li>
            <li><a href="{{ route('allAppearances') }}" title="Media" >Media</a></li>
            
            <li class="dropdown-trigger" data-dropdown>
                <a href="#" title="About" >About</a>
                <ul class="dropdown-menu">
                  <li><a href="{{ route('about') }}">Jennifer McDaniel</a></li>
                  <li><a href="{{ route('allFAQs') }}">FAQs</a></li>
                </ul>
            </li>
            <!-- <li><a href="{{ route('allProducts') }}" title="Store" >Store</a></li> -->
         </ul>


          <ul class="main-navigation__cta blog">
            <li class="navigation_search"><div data-search-input data-always-open="true"></div></li>
            <li class="button get_started"> <a   data-remove-services-button  href="{{ route('get-started') }}">Get Started</a> </li> 
          </ul>
    </div>
  </div>
</nav>
