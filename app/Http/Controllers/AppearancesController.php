<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\AppearanceRequest;

use App\Http\Controllers\Controller;
use App\Repositories\AppearanceRepository as Appearance;
use App\Repositories\RoleRepository as Role;

use App\Repositories\Criteria\Appearance\AscendingOrder;
use App\Repositories\Criteria\Appearance\AppearanceWithAuthor;
use App\Repositories\Criteria\Role\UsersWithAppearances;
use App\Repositories\Criteria\User\UsersWithRoles;
use App\Repositories\Criteria\Appearance\VideosPublishedAcending;
use App\Repositories\Criteria\Appearance\NoVideosPublishedAcending;
use App\Repositories\Criteria\Appearance\Published;

class AppearancesController extends Controller
{
    
    /**
     * Appearance Model
     * @var App\Appearance
     */
    protected $appearance;


    /**
     * User Model
     * @var App\User
     */
    protected $role;


    /**
     * Inject the Repository
     * @param /App/Repositories/AppearanceRepository $apperance 
     */
    public function __construct(Appearance $appearance, Role $role) 
    {
        $this->appearance = $appearance;
        $this->role = $role;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $appearances = $this->appearance->pushCriteria(new AscendingOrder())->paginate(20);
        return view('dashboard.appearances.index', compact('appearances'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users = $this->role->findBy('name', 'appearance')->users;
        return view('dashboard.appearances.create', compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AppearanceRequest $request)
    {
        $appearance = $this->appearance->create($request->all());
        flash()->success('', 'The Appearance was created');
        return view('dashboard.appearances.show', compact('appearance'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $appearance = $this->appearance->find($id);
        return view('dashboard.appearances.show', compact('appearance'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $appearance = $this->appearance->find($id);
        $users = $this->role->findBy('name', 'appearance')->users;

        return view('dashboard.appearances.edit', compact('appearance', 'users'));   
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AppearanceRequest $request, $id)
    {
        $appearance = $this->appearance->find($id);
        $appearance->update($request->all());
        flash()->success('', 'The appearance was updated');
        return view('dashboard.appearances.show', compact('appearance'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $this->appearance->delete($id);

        if ($request->ajax()) {
            return $id;
        }
        
        return redirect()->route('dashboard.appearances.index');
    }


/*
|--------------------------------------------------------------------------
| Front End Methods
|--------------------------------------------------------------------------
|
|
*/

    /**
     * Get the Top 5 Video Appearances
     * @return \Illuminate\Http\Response
     */
    public function topVideoAppearances() {
        $appearances = $this->appearance->pushCriteria(new VideosPublishedAcending())->paginate(4);
        return view('appearances.index', compact('appearances'));
    }

    /**
     * Get the Top 5 Non Video Appearances
     * @return \Illuminate\Http\Response
     */
    public function topNonVideoAppearances() {
        $appearances = $this->appearance->pushCriteria(new NoVideosPublishedAcending())->paginate(5);
        return view('appearances.index', compact('appearances'));
    }

    /**
     * Get Appearanaces by Pagination
     * @return \Illuminate\Http\Response
     */
    public function getPaginatedAppearances() {
        $appearances = $this->appearance->pushCriteria(new Published())->paginate(25);
        return view('appearances.archive', compact('appearances'));
    }

    /**
     * Get all Appearanees
     * @return  \Illuminate\Http\Response
     */
    public function allAppearances() {
        $appearances = $this->appearance->pushCriteria(new Published())->all();
        return view('appearances.index', compact('appearances'));
    }


    /**
     * Get Single Appearnace by Title
     * @param  string $title 
     * @return \Illuminate\Http\Response
     */
    public function appearanceByTitle($title) {
        $appearance = $this->appearance->findBy('direct_link', $title);
        $moreAppearances = $this->appearance->pushCriteria(new VideosPublishedAcending())->paginate(4);
        
        // if ($appearance->published == 0) {
        //     abort(404);
        // }
        return view('appearances.appearance', compact('appearance', 'moreAppearances'));
    }


}
