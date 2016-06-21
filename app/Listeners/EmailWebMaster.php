<?php

namespace App\Listeners;

use App\Events\AlertSubmitted;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Mail;

class EmailWebMaster
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
     * @param  AlertSubmitted  $event
     * @return void
     */
    public function handle(AlertSubmitted $event)
    {
        Mail::send('mail.contactForm', ['mailRequest' => $event->mailRequest], function ($message) use ($event) {
            $message->to(env('MAIL_SEND'))
                    ->from('no-reply@mcdanielnutrition.com')
                    ->subject($event->mailRequest['subject']);
        });
    }
}
