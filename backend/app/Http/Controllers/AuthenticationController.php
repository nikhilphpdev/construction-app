<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthenticationController extends Controller
{
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
        $user = User::where('email', $request->email)->first();


        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 401,
                'message' => 'Invalid email or password'
            ], 401);
        }

        // optional: old tokens delete
        $user->tokens()->delete();

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'status' => 200,
            'token' => $token,
            'user' => $user
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Logout Successfully'
        ], 200);

    }
}
