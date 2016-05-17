<?php

namespace App\Listeners;

use App\Events\StoreTransactionComplete;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Mail;

class EmailUserTransaction
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
     * @param  StoreTransactionComplete  $event
     * @return void
     */
    public function handle(StoreTransactionComplete $event)
    {
     
        Mail::send('mail.userTransaction', ['transaction' => $event->transaction, 'products' => $event->products], function ($message) use ($event) {
            $message->to($event->transaction->email)
                    ->from('no-reply@mcdanielnutrition.com')
                    ->subject('Thank You for Your Purchase');
        });
    }
}
