<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Services\AuthService;

class AuthenticationController extends Controller
{

    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    public function authenticate(Request $request)
    {
        //Apply validatiom
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        $result = $this->authService->login($request->only('email', 'password'));
        if (!$result) {
            return response()->json([
                'status' => 401,
                'message' => 'Invalid email or password'
            ], 401);
        }

        return response()->json([
            'status' => 200,
            'token' => $result['token'],
            'user' => $result['user']
        ], 200);
    }


    public function logout(Request $request)
    {

        $this->authService->logout($request->user());

        return response()->json([
            'status' => 200,
            'message' => 'Logout Successfully'
        ], 200);

    }
}
