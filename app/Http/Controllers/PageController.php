<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    /**
     * Home Page Route
     * @return \Illuminate\Http\Response
     */
    public function home() {
        return view('pages.index');
    }
}
