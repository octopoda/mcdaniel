<?php

namespace App\Listeners;

use App\Events\TestEmail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Mail;

class SendTestEmail
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
     * @param  TestEmail  $event
     * @return void
     */
    public function handle(TestEmail $event)
    {
        Mail::send('mail.testEmail', ["event" => $event ], function ($message) {
            $message->to(env('MAIL_SEND'))
                    ->from('blackink@mcdanielnutrition.com')
                    ->subject('Email Tested');
        });
    }
}
