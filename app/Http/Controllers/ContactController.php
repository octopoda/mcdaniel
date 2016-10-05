<?php

namespace App\Http\Controllers;

use Event;
use App\Events\ContactFormSubmitted;
use App\Events\ContactFormResend;
use App\Events\AlertSubmitted;
use App\Events\ServiceFormSubmited;
use App\Events\TestEmail;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Repositories\ContactRepository as Contact;
use App\Repositories\Criteria\Contact\AscendingOrder;
use App\Repositories\Criteria\Contact\RemoveTesting;
use App\Repositories\Criteria\Contact\GetNumberOfContacts;

use Exception;

class ContactController extends Controller
{
    

    /**
     * Contact Model
     * @var App\Contact
     */
    protected $contact;


    /**
     * @param Contact $contact 
     */
    public function __construct(Contact $contact) {
        $this->contact = $contact;
    }

    /**
     * Display only non test listings in Database
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = $this->contact->pushCriteria(new RemoveTesting())->paginate(25);
        return view('dashboard.contacts.index', compact('contacts'));
    }

    

    /**
     * Display all contacts in Databse
     * @return \Illuminate\Http\Response
     */
    public function allContacts() 
    {
        $contacts = $this->contact->pushCriteria(new AscendingOrder())->paginate(25);
        return view('dashboard.contacts.all', compact('contacts'));
    }

    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request['formType'] == 'alertMessage') {
            Event::fire(new AlertSubmitted($request->except('_token')));
            return;
        }

        $request['message'] = $request->except('_token', 'interestedService', 'category');
        $contact = $this->contact->create($request->except('_token', 'category'));
        
        try {
       
            Event::fire(new contactFormSubmitted( $request->except('_token', 'message', 'serviceType'))); 
            if ($request->get('formType') == 'get-started-page') {
                Event::fire(new ServiceFormSubmited( $request->except('_token', 'message')));             
            }

        } catch (Exception $e) {
            $mailRequest = [
                "subject" => "contact form Error",
                "error" => $e->getMessage(),
                "Email of Error" => $contact->email,
                "Time of Error" => \Carbon\Carbon::now()
            ];
            $contact->status = 1;
            $contact->error_log = $mailRequest;
            $contact->save();


            Event::fire(new AlertSubmitted($mailRequest));
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contact = $this->contact->find($id);
        return view('dashboard.contacts.show', compact('contact'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Get the lastest number of Contacts and resend their emails.
     * @return string
     */
    public function getLatest() {
        $contacts = $this->contact->pushCriteria(new GetNumberOfContacts(20))->all();

        $allContacts = [];
        foreach ($contacts as $contact) {
            if ($contact->email == "zack@2721west.com" || $contact->email == 'jennifer@mcdanielnutrition.com' || $contact->email == "zack@octopodamedia.com" || $contact->email == "zack@octopodainteractive.com") continue;
            Event::fire(new ContactFormResend(json_decode($contact->message, true))); 
        }
        
        echo 'done';
    }


    public function testEmail() {
        Event::fire(new TestEmail());
    }

    


}
