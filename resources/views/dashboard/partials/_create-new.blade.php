<div class="dashboard__subnav-title s8 col">
    <h3>{{ $title }}</h3>
</div>
<div class="dashboard__subnav--create s4 col right-align">
    @if (Entrust::can($permission))
    	<a href="{{ route($route) }}" title="Create a New {{ $title }}" class="btn-floating waves-effect waves-light green"><i class="material-icons">add</i></a>
    @endif
</div>