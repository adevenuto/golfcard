<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $path = storage_path('app/courses_2024-02-07.sql');
    DB::unprepared(file_get_contents($path));
    $this->command->info('Courses table seeded!');
  }
}
