<?php

namespace App\Providers;

use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

use App\Events\ContactFormSubmitted;
use App\Events\ContactFormResend;
use App\Events\StoreTransactionComplete;
use App\Events\AlertSubmitted;
use App\Events\ServiceFormSubmited;
use App\Events\TestEmail;


use App\Listeners\EmailAdminContactForm;
use App\Listeners\EmailAdminResend;
use App\Listeners\EmailAdminTransaction;
use App\Listeners\EmailUserTransaction;
use App\Listeners\EmailWebMaster;
use App\Listeners\EmailCustomerServiceForms;
use App\Listeners\SendTestEmail;


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
        ContactFormResend::class => [
            EmailAdminResend::class
        ],
        StoreTransactionComplete::class => [
            EmailAdminTransaction::class,
            EmailUserTransaction::class
        ],
        AlertSubmitted::class => [
            EmailWebMaster::class
        ],
        ServiceFormSubmited::class => [
            EmailCustomerServiceForms::class
        ],
        TestEmail::class => [
            SendTestEmail::class
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
