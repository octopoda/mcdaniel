


<?php
// config
$link_limit = 7; // maximum number of links (a little bit inaccurate, but will be ok for now)
?>

@if ($paginator->lastPage() > 1)
    <ul class="pagination" role="navigation" aria-label="Pagination">
        <li>
            <a  class="pagination-previous {{ ($paginator->currentPage() == 1) ? ' disabled' : '' }}" href="{{ $paginator->url(1) }}"><i class="material-icons">chevron_left</i></a>
         </li>
        @for ($i = 1; $i <= $paginator->lastPage(); $i++)
            <?php
            $half_total_links = floor($link_limit / 2);
            $from = $paginator->currentPage() - $half_total_links;
            $to = $paginator->currentPage() + $half_total_links;
            if ($paginator->currentPage() < $half_total_links) {
               $to += $half_total_links - $paginator->currentPage();
            }
            if ($paginator->lastPage() - $paginator->currentPage() < $half_total_links) {
                $from -= $half_total_links - ($paginator->lastPage() - $paginator->currentPage()) - 1;
            }
            ?> 

            @if ($from < $i && $i < $to)
                <li class=" waves-effect {{ ($paginator->currentPage() == $i) ? 'active' : '' }}" >
                    <a  href="{{ $paginator->url($i) }}" aria-label="Page {{ $i }}">{{ $i }}</a>
                </li>
            @endif
        @endfor
        <li>
            <a class="pagination-next {{ ($paginator->currentPage() == $paginator->lastPage()) ? ' disabled' : '' }}" href="{{ $paginator->url($paginator->currentPage() + 1) }}"><i class="material-icons">chevron_right</i></a>
        </li>
    </ul>
@endif