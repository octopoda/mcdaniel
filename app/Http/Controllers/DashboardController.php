<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Repositories\PostRepository as Post;
use App\Repositories\ContactRepository as Contact;
use App\Repositories\TransactionRepository as Transaction;

use App\Repositories\Criteria\Post\TopReadPosts;
use App\Repositories\Criteria\Post\TrendingPosts;
use App\Repositories\Criteria\Contact\GetNumberOfContacts;
use App\Repositories\Criteria\Transaction\LatestTransactions;
use App\Repositories\Criteria\Transaction\TotalIncome;

class DashboardController extends Controller
{
    
    /**
     * Post Model
     * @var \App\Post
     */
    protected $post;

    /**
     * Contact Model
     * @var \App\Contact
     */
    protected $contact;

    /**
     * Transaction Model
     * @var \App\Transaction
     */
    protected $transaction;


    public function __construct(Post $post, Contact $contact, Transaction $transaction) {
        $this->post = $post;
        $this->contact = $contact;
        $this->transaction = $transaction;
        $this->duh = $post;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $latestContacts = $this->contact->pushCriteria(new GetNumberOfContacts(5))->all();
        $trendingPosts = $this->post->pushCriteria(new TrendingPosts(5))->all();
        $topPosts = \App\Post::orderBy('reads', 'DESC')->take(5)->get();
        $latestTransactions = $this->transaction->pushCriteria(new LatestTransactions(5))->all();
        $totalIncome = \App\Transaction::sum('total');
        return view('dashboard.index', compact('topPosts', 'trendingPosts', 'latestContacts', 'latestTransactions', 'totalIncome'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
}
