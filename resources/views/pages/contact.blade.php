<?php
$header = [
	"title" => "Contact McDaniel Nutrition Therapy St Louis Missouri",
	"description" => "Contact McDaniel Nutrition Therapy for corporate wellness, weight loss management, sports nutrition, maternal nutrition, or speaking / media engagements.",
	"Keywords" => "Contact us, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition, dietitian, consultation, nutritionist, speaking, media",
	"fixed" => true
	];

?>

@extends('layouts.frontend.page', compact('header'))


@section('content')


	<div class="contact-map__wrapper">
        <div class="contact-map__cover"></div>
       	<div class="contact-map__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.1000800536117!2d-90.33918828462295!3d38.64657907961008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8cad61ca46907%3A0x89792ba0df69d2e!2s230+S+Bemiston+Ave+%23430%2C+St+Louis%2C+MO+63105!5e0!3m2!1sen!2sus!4v1457639783664" width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </div>


	<h1>We Want to Get To Know You.</h1>
	<p>Please contact us to discuss your corporate needs, set up a media appearance, or schedule a consultation. </p>



	<div class="contact">
		<div class="container">
			<div class="row">
				<div class="s12 m6 col contact__forms">
				</div> 
				<div class="s12 m6 col contact__address">
				</div> 
			</div>
		</div>
	</div>





@endsection


@section('extra-scripts')
	<script type="text/javascript">
	    var feed = new Instafeed({
	        get: 'tagged',
	        tagName: 'awesome',
	        clientId: '0d31d74e63da4ef28a15986302562504'
	    });
	    feed.run();
</script>
@endsection