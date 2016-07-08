<?php

namespace App\Listeners;

use App\Events\ServiceFormSubmited;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Mail;

class EmailCustomerServiceForms
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ServiceFormSubmited  $event
     * @return void
     */
    public function handle(ServiceFormSubmited $event)
    {
          Mail::send('mail.formEmail', ['mailRequest' => $event->mailRequest], function ($message) use ($event) {
            $message->to($event->mailRequest['email'])
                    ->from('jennifer@mcdanielnutrition.com')
                    ->subject('Thanks for Contact McDaniel Nutrition');
        });
    }
}
