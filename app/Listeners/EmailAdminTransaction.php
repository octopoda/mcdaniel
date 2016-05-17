<?php

namespace App\Listeners;

use App\Events\StoreTransactionComplete;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Mail;

class EmailAdminTransaction
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
          Mail::send('mail.adminTransaction', ['transaction' => $event->transaction, 'products' => $event->products], function ($message) {
            $message->to(env('MAIL_SEND'))
                    ->from('no-reply@mcdanielnutrition.com')
                    ->subject('A New Transaction has been processed');
        });
    }
}
