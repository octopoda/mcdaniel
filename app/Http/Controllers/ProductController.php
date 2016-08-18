<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\ProductRequest;
use App\Http\Controllers\Controller;


use App\Repositories\ProductRepository as Product;
use App\Repositories\TransactionRepository as Transaction;

use App\Repositories\Criteria\Transaction\SearchProducts;

class ProductController extends Controller
{
    

    /**
     * Product
     * @var App\Product
     */
    protected $product;

    /**
     * Transaction
     * @var App\Transaction
     */
    protected $transaction;


    /**
     * Direct Inject Projdct
     * @param Product $product [description]
     */
    public function __construct(Product $product, Transaction $transaction) {
        $this->product = $product;
        $this->transaction = $transaction;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = $this->product->paginate(25);
        return view('dashboard.products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $product = \App\Product::orderBy('id', 'desc')->limit('1')->get();
        
        if ($product) {
            $id = $product[0]->id + 1;   
        } else {
            $id = 1;
        }

        dd($id);
        
        return view('dashboard.products.create', compact('id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $product = $this->product->create($request->all());

        //Upload Image
        if ($request->hasFile('product_image')) {
            $filePath = $this->product->saveProductToAmazon($request, 'product_image');
            $product->product_image = $filePath;
            $product->update();
        }

        //Upload Product
        if ($request->hasFile('url')) {
            $productPath = $this->product->saveProductToAmazon($request, 'url');
            $product->url = $productPath;
            $product->update();
        }

        flash()->success('', 'The product was created');

        return view('dashboard.products.show', compact('product'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = $this->product->find($id);
        $transactions = $this->transaction->pushCriteria(new SearchProducts($product->id))->all();
        return view('dashboard.products.show', compact('product', 'transactions'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = $this->product->find($id);
        return view('dashboard.products.edit', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, $id)
    {
        $product = $this->product->find($id);
        $product->update($request->all());

        //Upload Image
        if ($request->hasFile('product_image')) {
            $filePath = $this->product->saveProductToAmazon($request, 'product_image');
            $product->product_image = $filePath;
            $product->update();
        }

        //Upload Product
        if ($request->hasFile('url')) {
            $productPath = $this->product->saveProductToAmazon($request, 'url');
            $product->url = $productPath;
            $product->update();
        }

        flash()->success('', 'The product has been updated');
        return view('dashboard.products.show', compact('product'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        //Delete the Product files
        $this->product->delete($id);
        
        if ($request->ajax()) {
            return $id;
        }

        flash()->success('', 'The product has been deleted');
        return redirect('/dashboard/products');
    }
}
