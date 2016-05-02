<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\CategoryRequest;
use App\Http\Controllers\Controller;

use App\Repositories\CategoryRepository as Category;

class CategoryController extends Controller {


    /**
     * Category Model
     * @var /App/Category
     */
    protected $category; 


    public function __construct(Category $category) 
    {
        $this->category = $category;
    }       


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = $this->category->paginate(25);
        return view('dashboard.categories.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.categories.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $category = $this->category->create($request->all());

        if ($request->hasfile('category_image')) {
            $filePath = $this->category->saveImageForPost($request, 'category_image');

            $category->category_image = $filePath;
            $category->update();
       }

        flash()->success('', 'The category was created');
        return redirect('dashboard/categories');
    }

    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)  {
        $category = $this->category->find($id);
        return view('dashboard.categories.edit', compact('category'));
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
        $category = $this->category->find($id);
        $category->update($request->all());

        if ($request->hasfile('category_image')) {
            $filePath = $this->category->saveImageForPost($request, 'category_image');
            $category->category_image = $filePath;
            $category->update();
       }
        
        flash()->success('', 'The category was updated');
        return redirect('dashboard/categories');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $this->category->delete($id);

        if ($request->ajax()) {
            return $id;
        } 

        flash()->success('', 'The category has been deleted');
        return redirect('dashboard/categories');
    }
}
