<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

// use MailChimp;

class MailChimpController extends Controller
{
   protected $mailchimp;
   protected $listId = "a3ce4cebc0";

   public function __construct(\Mailchimp $mailchimp)
    {
        $this->mailchimp = $mailchimp;
    }


   /**
    * Subsribe a user to the mailchimp list
    * @param  Request $request [description]
    * @return JSON           
    */
    public function subscribeToMailChimp(Request $request) {
        try {
            $this->mailchimp->lists->subscribe($this->listId, ['email' => $request->get('email')] );        
            return  'Thanks for your interest, you have been subscribed';
        } catch (\Mailchimp_List_AlreadySubscribed $e) {
             return "Oops, Looks like you are already subscribed to the newsletter.";
        } catch (\Mailchimp_Error $e) {
            return  'Oops,  Looks like there was an error connecting to Mailchimp';
        }
    }




}
