<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    public function Category(){
        return $this->belongsTo(Category::class);
    }
}
