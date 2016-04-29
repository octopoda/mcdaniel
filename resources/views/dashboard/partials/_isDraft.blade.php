@if (Entrust::can($permission))
		{{ $model->isPublished() }}
		<div class="dashboard__content--draft {{ ($model->isPublished()) ? '' : 'unpublished' }}"></div>
@endif