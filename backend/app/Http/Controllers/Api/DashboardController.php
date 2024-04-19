<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function favoriteCourses()
    {   
        // $favoriteCourses = User::find(1)->favoriteCourses()
        // ->join('courses c', 'users.' )    
        // ->get();
        // return response()->json(['favorite_courses' => $favoriteCourses], 200);
    }
}
