<?php

namespace App\Listeners;

use App\Events\SilentAlert;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Mail;

class SendSilentAlert
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
     * @param  SilentAlert  $event
     * @return void
     */
    public function handle(SilentAlert $event)
    {
         Mail::send('mail.silentAlert', ["mailRequest" => $event->mailRequest ], function ($message) use ($event) {
            $message->to(env('MAIL_ERROR'))
                    ->from('blackink@mcdanielnutrition.com')
                    ->subject('McDaniel Nutrition Alert');
        });
    }
}
