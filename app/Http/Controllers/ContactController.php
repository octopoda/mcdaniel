<?php

namespace App\Http\Controllers;

use Event;
use App\Events\ContactFormSubmitted;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Repositories\ContactRepository as Contact;
use App\Repositories\Criteria\Contact\AscendingOrder;

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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $request['message'] = $request->except('_token');
        $contact = $this->contact->create($request->except('_token'));
        Event::fire(new contactFormSubmitted( $request->except('_token', 'message') )); 

        // return view('forms.formTest');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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




    public function testContact() {
        return view('forms.formTest');
    }
}
