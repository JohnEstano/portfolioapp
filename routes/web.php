<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');


Route::get('contact', function() {
    return Inertia::render('contact');
})->name('contact');

Route::get('blogs', function() {
    return Inertia::render('blogs');
})->name('blogs');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
   
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
