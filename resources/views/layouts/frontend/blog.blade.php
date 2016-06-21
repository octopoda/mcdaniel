<?php 
  $pageTitle = (isset($header['title'])) ? $header['title'] : 'McDaniel Nutrition Therapy – St Louis, Missouri';
  $pageDescription =  (isset($header['description'])) ? $header['description'] : "McDaniel Nutrition Therapy delivers corporate wellness, weight loss management, and sports nutrition programs tailored to your personal needs and goals.";
  $pageKeywords =  (isset($header['keywords'])) ? $header['keywords'] : "Nutrition, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition"; 
  $navigation_style = (isset($header['navigation_style'])) ? $header['navigation_style'] : '';
  $tiny = (isset($header['tiny'])) ? $header['tiny'] : '';
  $shareImage = (isset($header['shareImage'])) ? $header['shareImage'] : 'images/icons/facebook.jpg';
?>


<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
  <!-- General Site Info -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title> {{ $pageTitle }} </title> <!-- TODO -->
  <meta name="description" content="{{ $pageDescription }}">
  <meta name="keywords" content="{{ $pageKeywords }}"> <!-- TODO -->
  <meta name="tiny" content={{ $tiny }}>

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

  <!-- Facebook Metadata /-->
  <meta property="og:image" content="{{ $shareImage }}">
  <meta property="og:description" content="{{ $pageDescription }}">
  <meta property="og:title" content="{{ $pageTitle }}">
  <meta property="og:url" content="{{ Request::url() }}" />
  
  <!-- Google+ Metadata /-->
  <meta itemprop="name" content="{{ $pageTitle }}">
  <meta itemprop="description" content="{{ $pageDescription }}">
  <meta itemprop="image" content="{{ $shareImage }}">



  <!-- Twitter Card Metadata /-->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="{{ '@mcdaniel' }}" /> <!-- Add Site Social Media Profile -->
  <meta name="twitter:title" content="{{ $pageTitle }}" />
  <meta name="twitter:description" content="{{ $pageDescription }}" />
  <meta name="twitter:image" content="{{ $shareImage }}" /> <!-- TODO -->
  <meta name="twitter:url" content="{{ Request::url() }}" />

  <!-- iOS Integration -->
  <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png">
  <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/touch-icon-ipad.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/touch-icon-iphone-retina.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/touch-icon-ipad-retina.png">

  <!-- IE Integration -->
  <meta name="application-name" content="McDaniel Nutrition"/>
  <meta name="msapplication-TileColor" content="#000000"/>
  <meta name="msapplication-square70x70logo" content="/images/icons/tiny.png"/>
  <meta name="msapplication-square150x150logo" content="/images/icons/square.jpg"/>
  <meta name="msapplication-wide310x150logo" content="/images/icons/wide.jpg"/>
  <meta name="msapplication-square310x310logo" content="/images/icons/large.jpg"/>
  
  <!-- CSS: implied media="all" -->
  <link rel="stylesheet" href="/assets/css/app.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  <link href='https://fonts.googleapis.com/css?family=Material+Icons' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Source+Serif+Pro' rel='stylesheet' type='text/css'>
<!--[if lt IE 9]>
  <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
<!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->

  <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1557556577872786',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

</head>

<body data-ng-app="mcdaniel">
  <div data-mcdaniel-flash class="m-flash" role="alert"></div>
  
  <section>
      <header>
        @include('layouts.frontend.partials.navigation-blog', ['navigation_style' => $navigation_style])
         @yield('subnav')
      </header>
      
      <main class="sitewide_content_wrapper" id="contentWrapper">
            @yield('content')
      </main>

      <footer class="page-footer">
          @include('layouts.frontend.partials.footer')
      </footer>
  </section>

  
@if($app->environment(['local']))
  <script src="/tmp/vendor-file.js"></script>
  <script src="/tmp/templates.js"></script>
  <script src="/tmp/angular.js"></script>
@elseif ($app->environment('production')) 
  <script src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/scripts/app.min.js"></script> 
 @endif
  
  @yield('extra-scripts')

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-70379828-1', 'auto');
  ga('send', 'pageview');

</script>

  
</body>
</html>


