<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $path = storage_path('app/cities_2024-02-07.sql');
      DB::unprepared(file_get_contents($path));
      $this->command->info('Cities table seeded!');
    }
}
