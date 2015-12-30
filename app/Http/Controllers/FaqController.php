<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\FaqRequest;
use App\Http\Controllers\Controller;

use App\Repositories\FaqRepository as Faq;

use App\Repositories\Criteria\Faq\SearchFAQs;
use App\Repositories\Criteria\Faq\StaredFAQs;


class FaqController extends Controller
{
    
        
    /**
     * Faq Model
     * App\Faq
     */
    protected $faq;

    public function __construct(Faq $faq) {
        $this->faq = $faq;
    }



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $faqs  = $this->faq->paginate(25);
        return view('dashboard.faqs.index', compact('faqs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       return view('dashboard.faqs.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->faq->create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $faq = $this->faq->find($id);
        return view('dashboard.faqs.show', compact('faq'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $faq = $this->faq->find($id);
        return view('dashboard.faqs.edit', compact('faq'));
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
        $faq = $this->faq->find($id);
        $faq->update($request->all());

        return view('dashboard.faqs.show', compact('faq'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->faq->delete($id);
        return redirect('/dashboard/faqs');
    }


/*
|--------------------------------------------------------------------------
| API Methods
|--------------------------------------------------------------------------
|
|
*/

    /**
     * Star A FAQ for the front Page
     * @param  int $id 
     * @return boolean
     */
    public function starFAQ($id) {
        $faq = $this->faq->find(id);
        $faq->stared = 1;
        if ($faq->update())  {
            return true;
        } else {
            return false;
        }
    }


    /**
     * Search the FAQs
     * @param  [string] $query 
     * @return [JSON]
     */
    public function searchFaqs($query) {
        $faqs = $this->faq->pushCriteria(new SearchFAQs($query))->all();
        return $faqs;
    }


/*
|--------------------------------------------------------------------------
| View Methods
|--------------------------------------------------------------------------
|
|
*/    

    /**
     * Get the stared FAQs fror a view.
     * @return \Illuminate\Http\Response
     */
    public function staredFAQs() {
        $faqs = $this->faq->pushCriteria(new StaredFAQs())->all();
        return view('faqs.index', compact('faqs'));
    }

    /**
     * Get the FAQ by the tTiel
     * @param  string $title 
     * @return \Illuminate\Http\Response
     */
    public function faqByTitle($title) {
        $title = str_replace('-', " ", $title);
        $faq = $this->faq->findBy('question', $title);
        return view('faqs.faq', compact('faq'));
    }
}
