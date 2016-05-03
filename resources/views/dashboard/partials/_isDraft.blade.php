
@if (Entrust::can($permission) && $model->title != false)
		<div class="dashboard__content--draft {{ (isset($model)  && $model->isPublished()) ? '' : 'unpublished' }}"></div>
@endif