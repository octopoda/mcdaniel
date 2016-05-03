(function($)
{
	$.Redactor.prototype.clips = function()
	{
		return {
			init: function()
			{
				var items = [
					['Twitter Callout', '<div class="m-post-content__callout" data-twitter-callout> Enter 80-100 Chars </div>'],
					['Recipe', '<div class="m-post-content__recipe"> <div class="m-post-content__recipe--image"> Add Image Here </div> <h3>Spiced Sweet Potato, Peanut Butter &amp Coconut Milk Soup</h3> <section> <ul class="m-post-content__recipe--time"> <li><strong>Total Time:</strong> 25 minutes</li> <li><strong>Prep Time:</strong> 10 minutes</li> <li><strong>Serves:</strong> 8 </li> <li><strong>Cooking Time:</strong> 15 minutes</li> </ul> </section> <section class="m-post-content__recipe--ingredients"> <h4>Ingredients:&nbsp;</h4> <ul class="m-post-content__ingredients--list"> <li>1 T. olive oil</li> <li>1 clove garlic, minced</li> <li>1 medium yellow onion, diced</li> <li>1 Red Bell Pepper, diced</li> </ul> </section> <section class="m-post-content__recipe--directions"> <h4>Directions:</h4> <p>Saut&eacute; garlic, onion, and red bell pepper in olive oil over medium heat. Once onion is translucent in color, add cubed sweet potatoes and saut&eacute; a few more minutes. Add the rest of the ingredients and simmer 30 minutes until sweet potatoes are soft. Blend soup with a blender/immersion blender. Simmer pureed soup for a few more minutes. Serve with sliced avocado &amp; crusty sourdough bread.&nbsp;</p> </section> <section class="m-post-content__recipe--nutrition"> <h4>Nutrition Facts:</h4> <ul> <li><i>Calories:</i> 90</li> <li><i>Fat:</i> 6 g</li> <li><i>Sat fat:</i> 1 g</li> <li><i>Carb:</i> 7.5 g</li> <li><i>Fiber:</i> 2.5 g</li> <li><i>Sugars:</i> 4 g</li> <li><i>Protein:</i> 4 g</li> <li><i>Sodium:</i> 54 mg</li> </ul> </section> </div>']
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

