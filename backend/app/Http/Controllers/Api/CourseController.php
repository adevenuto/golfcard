<?php

namespace App\Http\Controllers\Api;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Jobs\RestructureHoles;

class CourseController extends Controller
{
    public function search(Request $request) 
    {
        $query = $request['query'];
        $courses = Course::where([['name','like','%'.$query.'%']])
            ->whereNotNull('layout_data')
            ->limit(10)
            ->get();

        foreach ($courses as $course) {
            // order teeboxes
            $t = $course->layout_data['teeboxes'];
            $key_values = array_column($t, 'order'); 
            array_multisort($key_values, SORT_ASC, $t);
            $course->layout_data = ['teeboxes' => $t];
        }
        
        return $courses;
    }

    // public function updateHolesStructure(Request $request) 
    // {   
    //     ini_set('max_execution_time', 999999999999999999);
    //     $courses = Course::whereNotNull('layout_data')->get();
    //     foreach ($courses as $course) {
    //         RestructureHoles::dispatch($course);
    //     }
    // }
}
