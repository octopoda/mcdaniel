<?php 
  $pageTitle = (isset($header['title'])) ? $header['title'] : 'McDaniel Nutrition Therapy – St Louis, Missouri';
  $pageDescription =  (isset($header['description'])) ? $header['description'] : "McDaniel Nutrition Therapy delivers corporate wellness, weight loss management, and sports nutrition programs tailored to your personal needs and goals.";
  $pageKeywords =  (isset($header['keywords'])) ? $header['keywords'] : "Nutrition, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition"; 
  $fixed = (isset($header['fixed']) && $header['fixed']) ? 'glued in-view fixed' : null;
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<!-- General Site Info -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title> {{ $pageTitle }} </title> <!-- TODO -->
  <meta name="description" content="{{ $pageDescription }}">
  <meta name="keywords" content="{{ $pageKeywords }}"> <!-- TODO -->
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

  <!-- Facebook Metadata /-->
  <meta property="fb:page_id" content=""> <!-- TODO -->
  <meta property="og:image" content="images/icons/facebook.jpg">
  <meta property="og:description" content="{{ $pageDescription }}">
  <meta property="og:title" content="{{ $pageTitle }}">

  <!-- Google+ Metadata /-->
  <meta itemprop="name" content="">
  <meta itemprop="description" content="{{ $pageDescription }}">
  <meta itemprop="image" content="/images/icons/facebook.jpg">

  <!-- Twitter Card Metadata /-->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="" /> <!-- Add Site Social Media Profile -->
  <meta name="twitter:title" content="{{ $pageTitle }}" />
  <meta name="twitter:description" content="{{ $pageDescription }}" />
  <meta name="twitter:image" content="" /> <!-- TODO -->
  <meta name="twitter:url" content="http://mcdanielnutrition.com" />

  <!-- iOS Integration -->
  <link rel="apple-touch-icon" href="images/icons/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="76x76" href="images/icons/touch-icon-ipad.png">
  <link rel="apple-touch-icon" sizes="120x120" href="images/icons/touch-icon-iphone-retina.png">
  <link rel="apple-touch-icon" sizes="152x152" href="images/icons/touch-icon-ipad-retina.png">

  <!-- IE Integration -->
  <meta name="application-name" content="McDaniel Nutrition"/>
  <meta name="msapplication-TileColor" content="#000000"/>
  <meta name="msapplication-square70x70logo" content="images/icons/tiny.png"/>
  <meta name="msapplication-square150x150logo" content="images/icons/square.jpg"/>
  <meta name="msapplication-wide310x150logo" content="images/icons/wide.jpg"/>
  <meta name="msapplication-square310x310logo" content="images/icons/large.jpg"/>
	
  <!-- CSS: implied media="all" -->
  <link rel="stylesheet" href="/css/app.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  <link href='https://fonts.googleapis.com/css?family=Merriweather:400,700|Lora|Material+Icons' rel='stylesheet' type='text/css'>

<!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
<!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->

</head>

<body class="{{ $fixed }}">
  @include('layouts.frontend.partials.contact-modal')
  
  <section>
      <header>
         @include('layouts.frontend.partials.navigation', ['fixed' => $fixed ])
         @yield('subnav')
      </header>
      
      <main class="sitewide_content_wrapper" id="contentWrapper">
            @yield('content')
      </main>

      <footer class="page-footer">
          @include('layouts.frontend.partials.footer')
      </footer>
  </section>

  

  <script src="/js/vendor.min.js"></script>
  <script src="/js/app.min.js"></script>
  
  @yield('extra-scripts')

  
</body>
</html>


