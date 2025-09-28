<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    //
    protected $fillable = [
        'user_id',
        'business_name',
        'owner_name',
        'commercial_registeration_number',
        'establishment_date',
        'city',
        'district',
        'business_description',
        'employees_count',
        'capital',
        'economic_activity',
        'experience_years',
        'email',
        'phone',
        'fax',
        'website',
        'address',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
