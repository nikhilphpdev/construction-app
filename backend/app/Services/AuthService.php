<?php

namespace App\Services;

use Illuminate\Support\Facades\Hash;
use App\Repositories\Interfaces\AuthRepositoryInterface;

class AuthService
{
    protected $authRepository;

    public function __construct(AuthRepositoryInterface $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    public function login(array $data)
    {
        $user = $this->authRepository->findEmail($data['email']);

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return null;
        }
        // Delete Old Tokens
        $this->authRepository->deleteTokens($user);

        $token = $this->authRepository->createToken($user);
        return [
            'token' => $token,
            'user' => $user
        ];
    }

    public function logout($user)
    {
        $user->currentAccessToken()->delete();
    }
}