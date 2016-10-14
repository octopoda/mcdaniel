<?php

namespace App\Listeners;

use App\Events\StoreTransactionError;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Mail;

class EmailAdminTransactionError
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
     * @param  StoreTransactionError  $event
     * @return void
     */
    public function handle(StoreTransactionError $event)
    {
        Mail::send('mail.adminTransactionError', ['transaction_id' => $event->transaction_id], function ($message) {
            $message->to(env('MAIL_SEND'))
                    ->from('no-reply@mcdanielnutrition.com')
                    ->subject('A Transaction has Errored out');
        });
    }
}
