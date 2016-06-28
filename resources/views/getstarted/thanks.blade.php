
<?php
$header = [
	"title" => "Nutrition Services – McDaniel Nutrition Therapy, St Louis MO",
	"description" => "McDaniel Nutrition Therapy provides corporate wellness, weight loss management, sports nutrition, and maternal nutrition tailored to your needs and goals",
	"Keywords" => "Nutrition, St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')

<article>

	<div class="home__hero hero">
		<section class="row">
			<h1>Congratulations</h1>
		</section>
	</div>
	
	<div class="get-started">
		<div class="row">
			<div class="get-started__index" data-ng-controller="ThanksController as vm">
				{! vm.service !}
				<div data-ng-if="vm.service != 'corporate'">
					<div>
						<h2>You’ve made a decision to improve the quality of your life through nutrition therapy.</h2>
						<p> This involves not only addressing what you eat, but also how you think and feel about food and your body. As you may have already read on my website, this is not a one size fits all approach. I will strive understand your needs, preferences, and goals in order to offer realistic and personalized solutions for your nutrition and health concerns. </p>
						<p> Because our habits are deeply engrained, making changes that will last a life time occurs in stages and often takes time. Please be patient. People often wonder how many times we’ll need to meet. That entirely depends on the purpose of our meeting, your goals, your readiness to change, what support systems you have in place, and many other factors. </p>
					</div>
					
					<h4>Please download the following forms</h4>
					
					<ol>
						<li><a href=https://s3-us-west-2.amazonaws.com/mcdaniel-staging/forms/WelcomeLetterClientContract2016.docx>Welcome Letter and Client Contract</a></li>
						<li data-ng-if="vm.service == 'sports'"><a href="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/forms/AthleteAsessmentForm16.doc">Athlete Assessment Form</a></li>
						<li data-ng-if="vm.service == 'sports'"><a href="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/forms/YouthAthleteAssessmentForm16.doc">Youth Athlete Assessment Form</a></li>
						
						<li data-ng-if="vm.service == 'weight' || vm.service == 'rmr' "><a href="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/forms/NutritionAssessmentForm+16.doc">Nutrition Assessment Form</a></li>
						<li data-ng-if="vm.service == 'maternal'"><a href="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/forms/MaternalNutritionAssessmentForm+16.doc">Maternal Nutrition Assessment Form</a></li>
					</ol>

					<p>
						Looking forward to meeting with you,
					</p>
				</div>
				<div data-ng-if="vm.service == 'corporate'">
					<h2>Clearly, you are a progressive company.</h2>
					<p>You are a company that cares about the health of your employees and therefore the health of your company.  A company vested in their employees will always tower over its competitors.</p>
					<p>McDaniel Nutrition’s corporate services can be tailored to your company’s size, employee health needs, and company direction. Whether you need a one-time nutrition presentation or are interested in our 16-week weight loss program, McDaniel Nutrition will tailor our nutrition services to your company's needs and take care of all of the implementation. </p>
					<p>We will contact you to gather more information to help formulate your company’s nutrition plan</p>

					<p>Thank you,</p>
				</div>

				<p>
					Jennifer
				</p>

			</div>	
		</div>
	</div>

	<div data-blog-preview></div>
</article>
	
@endsection


@section('extra-scripts')
 	
@endsection