<?php

use App\Http\Controllers\admin\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::post('authenticate', [AuthenticationController::class, 'authenticate']);


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::group(['middleware' => ['auth:sanctum']], function () {
    //protected Routes
    Route::get('dashboard',[DashboardController::class,'index']);
     Route::post('logout', [AuthenticationController::class, 'logout']);
});