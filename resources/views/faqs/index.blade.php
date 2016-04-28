<?php
$header = [
	"title" => "Support Center  McDaniel Nutrition Therapy St Louis Missouri",
	"description" => "Wnat to know more about our nutrition services. Frequently asked questions for McDaniel",
	"Keywords" => "FAQS, Frequently Asked Questions,  St. Louis, Missouri, corporate wellness, weight loss management, sports nutrition, maternal nutrition, dietitian, consultation, nutritionist, speaking, media",
	"fixed" => true
	];

?>


@extends('layouts.frontend.page', compact('header'))

@section('content')
	<!-- Header -->
	<div class="faqs__hero hero">
		<section class="row">
			<h1>Questions About <br> Getting Healthy</h1>
		</section>
	</div>

<div class="faq" data-ng-controller="FaqController as vm">
	<div class="faq__question__search">
			<form action="index_submit" method="get" accept-charset="utf-8" class="row">
				<input type="text" placeholder="Search">
				<div class="search-icon"><i class="material-icons">search</i></div>
			</form>
	</div>

	<div class="faqs__questions__wrapper">
		<div class="row">
			<section class="faqs__questions">
				<h2 class="underlined">Popular Questions</h2>
				
				<ul class="collapsible faq__wrapper" id="faqQuestions">
					<li class="faq__question" data-faq-block>
						<i class="material-icons">chevron_right</i>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, commodi!
						<div class="faq__answer">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sunt, eos unde commodi atque quos quia dolores vitae neque iusto modi iste labore fugiat non excepturi nisi sint aut, exercitationem fuga rem consectetur ad. Placeat corporis odio sit cupiditate quis eum reprehenderit porro quasi odit aperiam eveniet harum, tempora excepturi!</p>
						</div>
					</li>
					<li class="faq__question"  data-faq-block>
						<i class="material-icons">chevron_right</i>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, voluptatibus.
						<div class="faq__answer">
							<p>Sit adipisci facilis ad, quia! Magnam odio ad itaque animi, earum eligendi libero iusto dolores. Explicabo molestias, neque esse veritatis. Necessitatibus distinctio voluptates nisi tempora maiores praesentium, in sint iste vitae beatae sit mollitia optio, sunt architecto. Explicabo fugiat a unde, ex ea accusantium laudantium nisi eligendi blanditiis commodi enim?</p>
						</div>
					</li>
					<li class="faq__question"  data-faq-block>
						<i class="material-icons">chevron_right</i>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, totam?
						<div class="faq__answer">
							<p>Accusamus dignissimos vero tempore quod corporis maiores molestiae, culpa quisquam nisi voluptatum illum ut ullam perspiciatis adipisci iste, suscipit, pariatur laborum facere voluptates, quam voluptas. Corporis facere saepe, repudiandae rerum et voluptatibus libero alias fugit accusantium soluta laborum neque dolore, inventore beatae expedita repellat quia sint fuga harum veniam. Magnam.</p>
						</div>
					</li>
					<li class="faq__question"  data-faq-block>
						<i class="material-icons">chevron_right</i>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, ipsum.
						<div class="faq__answer">
							<p>Quos possimus excepturi distinctio qui quisquam incidunt labore ipsam recusandae dicta, rem sapiente tempora odit obcaecati accusamus cumque eaque quibusdam, ipsa dignissimos cupiditate! Aliquam rerum autem sed ab tempore odio aperiam laborum suscipit nemo, alias? Molestias ea nulla ut. Sunt ipsum, unde debitis autem ab ratione iure libero maxime enim.</p>
						</div>
					</li>
					<li class="faq__question"  data-faq-block>
						<i class="material-icons">chevron_right</i>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, at.
						<div class="faq__answer">
							<p>Est velit, quam aspernatur officia! Recusandae dolor aperiam a eveniet laboriosam, quaerat at obcaecati quisquam nobis minima. Sed tempore blanditiis maxime libero tempora modi aspernatur perspiciatis velit repellat. Quo repellendus beatae veniam nostrum eligendi minus optio illum mollitia saepe ducimus, quas perferendis suscipit aperiam sit labore ullam sequi deleniti officiis.</p>
						</div>
					</li>
					<li class="faq__question"  data-faq-block>
						<i class="material-icons">chevron_right</i>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nostrum.
						<div class="faq__answer">
							<p>Repudiandae, similique. Ad atque fuga corrupti minima? Consequuntur eum sapiente in ab perspiciatis cupiditate, vel doloribus ad quibusdam aperiam, delectus possimus, ratione pariatur rem nisi nostrum deserunt, et laborum molestiae hic autem! Aperiam sed magni tempore cumque ad exercitationem aut laborum delectus animi debitis veritatis ducimus magnam, voluptates minus! Similique.</p>
						</div>
					</li>
					<li class="faq__question"  data-faq-block>
						<i class="material-icons">chevron_right</i>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fuga!
						<div class="faq__answer">
							<p>Enim pariatur non soluta eos nisi velit, amet quia, rem adipisci sunt fugiat labore quasi. Dolorum, obcaecati exercitationem, architecto rerum aliquam quibusdam nulla, perspiciatis sint possimus culpa quis deleniti. Fugit nihil doloribus facere ab maxime perferendis iusto doloremque dolore ad molestias, assumenda veniam odit. Dignissimos assumenda sed asperiores nam nulla.</p>
						</div>
					</li>
					<li class="faq__question"  data-faq-block>
						<i class="material-icons">chevron_right</i>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, provident!
						<div class="faq__answer">
							<p>A ratione tenetur, culpa sed similique dicta numquam quo iusto ducimus nemo vero qui sit enim iste fugiat, assumenda recusandae consequatur. Velit commodi, odit, cupiditate ab magnam soluta, doloribus error dolore distinctio assumenda deserunt? Corrupti a voluptatum maxime at quas quis voluptates modi nisi error fuga ipsam voluptatibus, nulla consectetur.</p>
						</div>
					</li>
					<li class="faq__question"  data-faq-block>
						<i class="material-icons">chevron_right</i>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, sunt.
						<div class="faq__answer">
							<p>Aliquid tenetur quas ducimus nam incidunt, qui explicabo nesciunt dolorem odit! Asperiores explicabo blanditiis libero reprehenderit, animi atque ratione, at laudantium reiciendis nesciunt error illum deleniti, dolore saepe accusamus. Alias eius consectetur doloremque qui doloribus harum, in quod est rerum laudantium optio natus corporis recusandae porro at expedita, atque incidunt.</p>
						</div>
					</li>
					<li class="faq__question"  data-faq-block>
						<i class="material-icons">chevron_right</i>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, adipisci!
						<div class="faq__answer">
							<p>Officiis laboriosam quis est possimus sint ipsam corrupti dolores soluta eius provident cupiditate quo debitis a odio dolorum itaque ut, maiores. Doloribus, iusto magnam fugiat consequatur tenetur asperiores a tempora, debitis dicta, commodi, deserunt libero! Quasi amet quae facere error obcaecati quod, corporis ducimus sit voluptatibus, iure natus iusto eos.</p>
						</div>
					</li>
				</ul>
			</section>

			<section class="faqs__contact">
				<h3 class="underlined">Get in Touch</h3>
				
				<ul class="no-bullet">
					<li><a href="#contactModal" class="modal-trigger"><i class="material-icons">email</i> Email Us</a></li>
					<li><a href="{{ route('contact') }}"><i class="material-icons">phone_iphone</i> Call Us</a></li>
				</ul>

				</ul>
			</section>
		</div>
	</div>
</div> <!-- Div -->

<div class="faqs__more">
	<div class="row">
		<section>
			<h3>Still have Questions?</h3>
			<p>Fill out the form below and we will help you find an answer.</p>	
			
			<div class="faq__more--form">
				@include('forms.faq')
			</div>
		</section>
	</div>
</div>
	
@endsection


@section('extra-scripts')
 	
@endsection