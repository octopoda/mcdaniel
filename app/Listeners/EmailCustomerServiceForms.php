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
        

        switch($event->mailRequest['category']) {
            case 'weight' :
                $template = 'mail.toCustomer.weight';
                break;
            case 'sports' :
                $template = 'mail.toCustomer.sports';
                break;
            case 'maternal' :
                $template = 'mail.toCustomer.maternal';
                break;
            case 'metabolic' :
                $template = 'mail.toCustomer.rmr';
                break;
            case 'corporate' : 
                $template = 'mail.toCustomer.corporate';
                break;
            case 'sustain' :
                $template = 'mail.toCustomer.corporate';
                break;
            case 'default':
                $template = "mail.toCustomer.rmr";
                break;
        }

        
        Mail::send($template, ['mailRequest' => $event->mailRequest], function ($message) use ($event) {
            $message->to($event->mailRequest['email'])
                    ->from('jennifer@mcdanielnutrition.com')
                    ->subject('Thanks for Contacting McDaniel Nutrition');
        });
    }
}
