<?php

namespace App\Jobs;

use App\Models\Course;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class RestructureHoles implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $course;

    /**
     * Create a new job instance.
     */
    public function __construct($course)
    {
        $this->course = $course;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $layout = $this->course->layout_data;

        // \Log::info($layout);
            
        $layoutNew = [
            'teeboxes' => []
        ];



        foreach ($layout['teeboxes'] as $teebox) {

            $teeboxNew = [
                'order' => $teebox['order'],
                'name' => $teebox['name'],
                'holeCount' => 0,
                'holes' => []
            ];

            foreach ($teebox['holes'] as $key => $hole) {
                array_push($teeboxNew['holes'], [
                    'holeNum' => explode('-', $key)[1],
                    'par' => $hole['par'],
                    'length' => $hole['length']
                ]);
                $teeboxNew['holeCount'] ++;
            }

            array_push($layoutNew['teeboxes'], $teeboxNew);
        }
        
        $c = Course::find($this->course->id);
        $c->layout_data = $layoutNew;
        $c->save();
    }
}
