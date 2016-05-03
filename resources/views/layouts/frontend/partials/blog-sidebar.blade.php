<div class="article-list__categories">
	<div class="article-list__search">
		<div data-search-input></div>
	</div>
	<div class="article-list__topics">
		<h3>Topics</h3>
		<ul>
			<li><a href="/posts/types/recipes">Recipes</a></li>
			<li><a href="/post/types/videos">Videos</a></li>
			@foreach($categories as $category)
				<li>
					<a href="/posts/category/{{ $category->direct_link }}">{{ $category->title }}</a>
				</li>
			@endforeach
		</ul>
	</div>
</div>