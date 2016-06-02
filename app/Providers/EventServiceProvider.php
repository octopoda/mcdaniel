<?php

namespace App\Providers;

use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

use App\Events\ContactFormSubmitted;
use App\Events\StoreTransactionComplete;
use App\Events\AlertSubmitted;

use App\Listeners\EmailAdminContactForm;
use App\Listeners\EmailAdminTransaction;
use App\Listeners\EmailUserTransaction;
use App\Listeners\EmailWebMaster;


class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        ContactFormSubmitted::class => [
            EmailAdminContactForm::class
        ],
        StoreTransactionComplete::class => [
            EmailAdminTransaction::class,
            EmailUserTransaction::class
        ],
        AlertSubmitted::class => [
            EmailWebMaster::class
        ]
    ];

    /**
     * Register any other events for your application.
     *
     * @param  \Illuminate\Contracts\Events\Dispatcher  $events
     * @return void
     */
    public function boot(DispatcherContract $events)
    {
        parent::boot($events);

        //
    }
}
