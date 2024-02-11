<?php

namespace App\Http\Controllers\Api;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
            $t = $course->layout_data['teeboxes'];
            $c = $course->layout_data['hole_count'];
            $key_values = array_column($t, 'order'); 
            array_multisort($key_values, SORT_ASC, $t);


            $course->layout_data = ['teeboxes' => $t, 'hole_count' => $c];
        }
        
        return $courses;
    }
}
