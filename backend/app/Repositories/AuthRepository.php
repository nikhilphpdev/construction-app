<?php
namespace App\Repositories;

use App\Models\User;
use App\Repositories\Interfaces\AuthRepositoryInterface;


class AuthRepository implements AuthRepositoryInterface
{

    public function findEmail(string $email): ?User
    {
        return User::where('email', $email)->first();
    }
    public function createToken(User $user): string|null
    {
        return $user->createToken('api-Token')->plainTextToken;
    }
    public function deleteTokens(User $user): void
    {
        $user->tokens()->delete();
    }

}