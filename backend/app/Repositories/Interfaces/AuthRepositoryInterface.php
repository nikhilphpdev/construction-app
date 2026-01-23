<?php
namespace App\Repositories\Interfaces;
use App\Models\User;

interface AuthRepositoryInterface{
         
       public function findEmail(string $email):? User;

       public function createToken(User $user): ? string;

       public function deleteTokens(User $user):  void;
}