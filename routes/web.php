<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('admin')->group(function () {

    Route::middleware(['auth'])->group(function () {
        
        Route::get('/', function () {
            return view('dashboard');
        })->name('dashboard');

        Route::get('/about', function () {
            return view('about');
        })->middleware('admin')->name('about');

    });

    Route::middleware(['auth','admin'])->group(function () {

        Route::get('/about', function () {
            return view('about');
        })->name('about');

    });

    require __DIR__.'/auth.php';

    Route::get('/{any}', function () {
        abort(404);
    })->middleware('auth')->where('any', '.*');
    
});

Route::get('/{any}', [SpaController::class, 'index'])->where('any', '.*');

