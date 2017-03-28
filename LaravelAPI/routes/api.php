<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'cors'], function () {
    Route::get('/get-data', [
        'uses' => 'APIController@getData',
        'as' => 'get.app.getData'
    ]);

    Route::post('/add-data', [
        'uses' => 'APIController@addData',
        'as' => 'get.app.getData'
    ]);

    Route::patch('/update-data', [
        'uses' => 'APIController@updateData',
        'as' => 'get.app.getData'
    ]);

    Route::put('/update-data', [
        'uses' => 'APIController@updateData',
        'as' => 'get.app.getData'
    ]);

    Route::post('/delete-data', [
        'uses' => 'APIController@deleteData',
        'as' => 'get.app.getData'
    ]);
});