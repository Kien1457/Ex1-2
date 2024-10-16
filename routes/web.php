<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\googleController;
use App\Http\Controllers\StripeController;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('auth/google', [App\Http\Controllers\googleController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('auth/google/callback', [App\Http\Controllers\googleController::class, 'handleGoogleCallback'])->name('auth.google.callback');


Route::post('stripe',[StripeController::class, 'stripe'])->name('stripe');
Route::get('success',[StripeController::class, 'success'])->name('success');
Route::get('cancel',[StripeController::class, 'cancel'])->name('cancel');