<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                'id',
                'password',
                'nickname', 
                'country_code',
                'language_code', 
                'gender', 
                'birth',
                'sex',
                'sweet', 
                'bitter', 
                'hot', 
                'sour', 
                'salty'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'remeber_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */

    // JWT 인증
    public function getJWTIdentifier() {
        // 토큰 습득
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        // 수정하여 jwt토큰에 정보 추가 가능
        return [];
    }

    //  나중에 해제하기

    public function Language_code(){
        return $this->belongsTo(Language::class);
    }
    public function Country(){
        return $this->belongsTo(Country::class);
    }
}
