<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Profile;
use App\Http\Requests\RegisterRequest;
class AuthController extends Controller
{
    //

    public function register(RegisterRequest $request)
    {
        
        

        $user = User::create($validatedData);

        return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
    }

}
