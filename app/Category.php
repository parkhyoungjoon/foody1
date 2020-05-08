<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function Material(){
        return $this->hasMany(Material::class);
    }
}
