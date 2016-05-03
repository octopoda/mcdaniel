<!DOCTYPE html>
<html lang="en">
	@include('layouts.admin.partials.head')

<body>
		
		
		<div class="row">
		
			<div class="side-nav  dashboard__side-navigation" id="slide-out">
				@include('layouts.admin.partials.navigation')
			</div> 
 

 
		    <section class="dashboard__main-wrapper">
		        <header class="row dashboard__alert-header z-depth-1">
					@include('layouts.admin.partials.header')
				</header>

				<main>
		        	<div class="row dashboard__alert">
						@yield('alert')
					</div>
		        	
		        	<div class="row dashboard__subnav">
						@yield('subnav')
		        	</div>

		        	<div class="row dashboard__content">
		        		@yield('content')
		        	</div>
		        </main>

		        <footer class="row dashboard__footer"></footer>
		    </div>
	    </section>
    </section>

	
	<!-- Scripts -->
	<script src="/assets/scripts/dashboard/vendor.min.js"></script>
  	<script src="/assets/scripts/dashboard/redactor.min.js"></script>
  	<script src="/assets/scripts/dashboard/dashboard.min.js"></script>
	
	
	@include('layouts.admin.partials.flash')
	
	@yield('extra-scripts')

</body>
</html>
