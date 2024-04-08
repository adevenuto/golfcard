<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegisterRequest $request) 
    {   
        $data = $request->validated();

        /**  @var \App\Models\User $user */
        $user = User::create([
            'first_name'=> $data['first_name'],
            'last_name'=> $data['last_name'],
            'email'=> $data['email'],
            'password'=> bcrypt($data['password'])
        ]);
        $token = $user->createToken('userToken')->plainTextToken;

        return response()->json(compact('user', 'token'), 200);
    }

    public function login(LoginRequest $request) 
    {
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Sorry, those credentials are incorrect'], 400);
        }   

        /**  @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('userToken')->plainTextToken;

        return response()->json(compact('user', 'token'), 200);
    }

    public function logout(Request $request) 
    {   
        /**  @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response()->json('', 204);

    }
}
