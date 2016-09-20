<?php

namespace App\Listeners;

use App\Events\ContactFormResend;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Mail;

class EmailAdminResend
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
     * @param  ContactFormResend  $event
     * @return void
     */
    public function handle(ContactFormResend $event)
    {
           
        Mail::send('mail.contactForm', ['mailRequest' => $event->mailRequest], function ($message) use ($event) {
            $message->to(env('MAIL_SEND'))
                    ->from($event->mailRequest['email'])
                    ->subject($event->mailRequest['subject']);
        });
    }
}
