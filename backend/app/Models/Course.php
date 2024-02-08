<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
  protected $casts = [
    'layout_data' => 'array',
  ];

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
      'city_id',
      'state_id',
      'name',
      'street',
      'state',
      'postal_code',
      'layout_data',
      'url'
  ];
}
