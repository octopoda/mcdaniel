(function($)
{
	$.Redactor.prototype.clips = function()
	{
		return {
			init: function()
			{
				var items = [
					['Callout', '<blockquote class="callout">Enter Callout Here</blockquote>'],
					['Ingredients', '<ul class="ingredients"><li>Ingredient 1</li><li>Ingredient 2</li></ul>']
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

