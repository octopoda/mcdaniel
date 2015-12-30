<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\ProductRequest;
use App\Http\Controllers\Controller;


use App\Repositories\ProductRepository as Product;

class ProductController extends Controller
{
    

    /**
     * Product
     * @var App\Product
     */
    protected $product;


    /**
     * Direct Inject Projdct
     * @param Product $product [description]
     */
    public function __construct(Product $product) {
        $this->product = $product;
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
        return view('dashboard.products.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = $this->product->create($request->all());

        //Upload Image
        if ($request->hasFile('product_image')) {
            $filePath = $this->product->saveProductToAmazon($request, 'product_image');
            $product->product_image = $filePath;
            $product->update();
        }

        //Upload Product
        if ($request->hasFile('product_download')) {
            $productPath = $this->product->saveProductToAmazon($request, 'product_download');
            $product->url = $productPath;
            $product->update();
        }

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
        return view('dashboard.products.show', compact('product'));
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
    public function update(Request $request, $id)
    {
        $product = $this->product->find($id);
        $product->update($request->all());

        //Upload Image
        if ($request->hasFile('product_image')) {
            $filePath = $this->product->saveImageForProduct($request);
            $product->product_image = $filePath;
            $product->update();
        }

        //Upload Product
        if ($request->hasFile('product_download')) {
            $productPath = $this->product->saveProductToAmazon($request, 'product_download');
            $product->url = $productPath;
            $product->update();
        }

        return view('dashboard.products.show', compact('product'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->product->delete($id);
        return redirect('/dashboard/products');
    }
}
