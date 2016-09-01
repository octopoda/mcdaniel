<?php

namespace App\Listeners;

use App\Events\ContactFormSubmitted;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Mail;

class EmailAdminContactForm
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
      
    }

    /**
     * Handle the event.
     *
     * @param  ContactFormSubmitted  $event
     * @return void
     */
    public function handle(ContactFormSubmitted $event)
    {
        Mail::send('mail.contactForm', ['mailRequest' => $event->mailRequest], function ($message) use ($event) {
            $message->to(env('MAIL_SEND'))
                    ->to('zack@octopodainteractive.com')
                    ->from('no-reply@mcdanielnutrition.com')
                    ->subject($event->mailRequest['subject']);
        });
    }
}
