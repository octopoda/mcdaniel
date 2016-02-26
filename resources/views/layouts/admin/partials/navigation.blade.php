<ul>
    <!-- <li><a href="{{ url('/dashboard') }}">Dashboard</a></li> -->
    
    @if (Entrust::hasRole('admin'))
	    <li>
	        <a href="#" class="dropdown-button" data-activates="dropdownRole" data-beloworigin="true" data-align="right">Roles/Permissions</a>
	        <ul id="dropdownRole" class="dropdown-content">
	            <li><a href="{{ URL::route('dashboard.roles.index') }}">Roles</a></li>
	            <li><a href="{{ URL::route('dashboard.permissions.index') }}">Permissions</a></li>
	        </ul>
	    </li>
	    <li><a href="{{ URL::route('dashboard.users.index') }}">Users</a></li>
    @endif

    @if (Entrust::can('manage_posts'))
	    <li><a href="{{ URL::route('dashboard.posts.index') }}">Posts</a></li>
	    <li><a href="{{ URL::route('dashboard.categories.index') }}">Categories</a></li>
	@endif
  	
  	@if(Entrust::can('manage_appearances'))
    	<li><a href="{{ URL::route('dashboard.appearances.index') }}">Appearances</a></li>
    @endif
    
    @if (Entrust::can('manage_faqs'))
    	<li><a href="{{ URL::route('dashboard.faqs.index') }}">Faqs</a></li>
    @endif

    @if (Entrust::can('manage_products'))
    	<li><a href="{{ URL::route('dashboard.products.index') }}">Products</a></li>
    @endif 
</ul>
	






