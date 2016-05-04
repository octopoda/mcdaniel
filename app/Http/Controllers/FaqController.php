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
        //Show Flash
        flash()->success("", "The faq was created");
        $faq = $this->faq->create($request->all());
        return view('dashboard.faqs.show', compact('faq'));
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
        
        //Show Flash
        flash()->success("", "The faq was updated");
        return view('dashboard.faqs.show', compact('faq'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        
        $this->faq->delete($id);
        
        if ($request->ajax()) {
            return $id;
        }   

        //Show Flash
       flash()->success("", "The faq was destroyed");
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
    public function toggleStar($id) {
        $faq = $this->faq->find($id);
        
        
        if ($faq->stared != null) {
            $faq->stared = 0;    
            $message = "The FAQ is unfeatured";
            $featured = false;
        } else {
            $faq->stared = 1;    
            $message = "The FAQ is featured";
            $featured = true;
        }
        
        $faq->update();

        return compact('message', 'featured');
    }


    /**
     * Search the FAQs
     * @param  [string] $query 
     * @return [JSON]
     */
    public function searchFaqs(Request $request) {
        $faqs = $this->faq->pushCriteria(new SearchFAQs($request->get('query')))->all();
        return compact('faqs');
    }


    /**
     * Get the Stared Faqs
     * @return [type] [description]
     */
    public function staredFaqs() {
        $faqs = $this->faq->pushCriteria(new StaredFAQs())->all();
        return compact('faqs');
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
    public function staredFAQsWithView() {
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
