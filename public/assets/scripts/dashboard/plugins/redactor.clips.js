(function($)
{
	$.Redactor.prototype.clips = function()
	{
		return {
			init: function()
			{
				var items = [
					['Twitter Callout', '<div class="m-post-content__callout" data-twitter-callout> Enter 80-100 Chars </div>'],
					['Image Right', '<figure class="m-post-content__image-right"><img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/posts/article-right.jpg" alt="Explain the Image"><figcaption>Add caption to image</figcaption></figure>'],
					['Image Left', '<figure class="m-post-content__image-left"><img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/posts/article-left.jpg" alt="Explain the Image"><figcaption>Add caption to image</figcaption></figure>'],
					['Image Full', '<figure class="m-post-content__image-full"><img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/posts/article-full.jpg" alt="Explain the Image"><figcaption>Add caption to image</figcaption></figure>' ],
					['Recipe', '<div class="m-post-content__recipe"> <div class="m-post-content__recipe--image"> <figure> <img src="https://s3-us-west-2.amazonaws.com/mcdaniel-staging/posts/article-full.jpg" alt="Explain the Image"/></strong></p> </figure> </div> <h3>Spiced Sweet Potato, Peanut Butter &amp; Coconut Milk Soup</h3> <ul class="m-post-content__recipe--time"> <li><strong>Total Time:</strong>  25 minutes</li> <li><strong>Prep Time:</strong>  10 minutes</li> <li><strong>Serves:</strong>  8 </li> <li><strong>Cooking Time:</strong>  15 minutes</li> </ul> <div class="m-post-content__recipe--ingredients"> <h4>Ingredients:&nbsp;</h4> <ul class="m-post-content__ingredients--list"> <li>1 T. olive oil</li> <li>1 clove garlic, minced</li> <li>1 medium yellow onion, diced</li> <li>1 Red Bell Pepper, diced</li> </ul> </div> <div class="m-post-content__recipe--directions"> <h4>Directions:</h4> <p>Saut&eacute; garlic, onion, and red bell pepper in olive oil over medium heat. Once onion is translucent in color, add cubed sweet potatoes and saut&eacute; a few more minutes. Add the rest of the ingredients and simmer 30 minutes until sweet potatoes are soft. Blend soup with a blender/immersion blender. Simmer pureed soup for a few more minutes. Serve with sliced avocado &amp; crusty sourdough bread.&nbsp;</p> </div> </div>']
				];

				this.clips.template = $('<ul id="redactor-modal-list">');

				for (var i = 0; i < items.length; i++)
				{
					var li = $('<li>');
					var a = $('<a href="#" class="redactor-clips-link">').text(items[i][0]);
					var div = $('<div class="redactor-clips">').hide().html(items[i][1]);

					li.append(a);
					li.append(div);
					this.clips.template.append(li);
				}

				this.modal.addTemplate('clips', '<div class="modal-section">' + this.utils.getOuterHtml(this.clips.template) + '</div>');

				var button = this.button.add('clips', 'Clips');

				this.button.addCallback(button, this.clips.show);

			},
			show: function()
			{
				this.modal.load('clips', 'Insert Clips', 500);

				$('#redactor-modal-list').find('.redactor-clips-link').each($.proxy(this.clips.load, this));

				this.modal.show();
			},
			load: function(i,s)
			{
				$(s).on('click', $.proxy(function(e)
				{
					e.preventDefault();
					this.clips.insert($(s).next().html());

				}, this));
			},
			insert: function(html)
			{
				this.buffer.set();
				this.air.collapsedEnd();
				this.insert.html(html);
				this.modal.close();
			}
		};
	};
})(jQuery);

