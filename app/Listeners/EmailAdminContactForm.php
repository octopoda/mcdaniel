<?php

namespace App\Listeners;

use App\Events\ContactFormSubmitted;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Htpp\Controllers\ContactController;

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
        
        $template = 'mail.contactForm'; //Service Contact

        if ($event->mailRequest['formType'] == 'faqForm') {
            $template = 'mail.contactQuestion'; //FAq Contact
        } else if ($event->mailRequest['formType'] == 'contactForm') {
            $template = 'mail.contactRequest'; //Normal Contact
        }

        Mail::send($template, ['mailRequest' => $event->mailRequest], function ($message) use ($event) {
            $message->to(env('MAIL_SEND'))
                    ->from($event->mailRequest['email'])
                    ->subject($event->mailRequest['subject']);
        });

    }
}
