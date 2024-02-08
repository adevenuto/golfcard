<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('courses', function (Blueprint $table) {
      $table->id();
      $table->string('city_id');
      $table->string('state_id');
      $table->string('name');
      $table->string('street')->nullable();
      $table->string('state')->nullable();
      $table->string('postal_code')->nullable();
      $table->json('layout_data')->nullable();
      $table->string('url');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('courses');
  }
};
