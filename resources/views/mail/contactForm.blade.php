
<p>Jennifer, </p>

<p>The contact form on your site has been submitted.  </p>

@foreach($mailRequest as $key=>$value)
		<h4> {{ ucwords(str_replace("_", " ", $key)) }}: </h4> 
		<p> {{ $value }}</p>
@endforeach
</ul>

<p>Thanks,</p>

<p>Black Ink</p>