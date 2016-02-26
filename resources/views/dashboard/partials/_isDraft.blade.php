@if (Entrust::can($permission))
	  <div class="dashboard__content--draft {{ ($model->isPublished()) ? '' : 'unpublished' }}"></div>
@endif