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
    Route::get('/getting-data', [
        'uses' => 'APIController@getData',
        'as' => 'get.app.getData'
    ]);

    Route::post('/adding-data', [
        'uses' => 'APIController@addData',
        'as' => 'get.app.getData'
    ]);

    Route::patch('/updateing-data/{id}', [
        'uses' => 'APIController@updateData',
        'as' => 'get.app.getData'
    ]);

    Route::put('/updateing-data/{id}', [
        'uses' => 'APIController@updateData',
        'as' => 'get.app.getData'
    ]);

    Route::delete('/deleteing-data/{id}', [
        'uses' => 'APIController@deleteData',
        'as' => 'get.app.getData'
    ]);
});

/** API calls For Authentication Functionality */
Route::get('/auth/get-data', [
    'uses' => 'HomeController@getData',
    'as' => 'get.app.getData'
]);

Route::post('/auth/check-data', [
    'uses' => 'HomeController@checkData',
    'as' => 'get.app.checkData'
]);

Route::post('/auth/add-data', [
    'uses' => 'HomeController@addData',
    'as' => 'get.app.getData'
]);

Route::patch('/auth/update-data/{id}', [
    'uses' => 'HomeController@updateData',
    'as' => 'get.app.getData'
]);

Route::put('/auth/update-data/{id}', [
    'uses' => 'HomeController@updateData',
    'as' => 'get.app.getData'
]);

Route::delete('/auth/delete-data/{id}', [
    'uses' => 'HomeController@deleteData',
    'as' => 'get.app.getData'
]); 

/** API calls For Admin Functionality */
Route::group(['middleware' => 'auth'], function () {

    Route::get('/admin/get-data', [
        'uses' => 'AdminController@getData',
        'as' => 'get.app.getData'
    ]);

    Route::post('/admin/check-data', [
        'uses' => 'AdminController@checkData',
        'as' => 'get.app.checkData'
    ]);

    Route::post('/admin/add-data', [
        'uses' => 'AdminController@addData',
        'as' => 'get.app.getData'
    ]);

    Route::patch('/admin/update-data/{id}', [
        'uses' => 'AdminController@updateData',
        'as' => 'get.app.getData'
    ]);

    Route::put('/admin/update-data/{id}', [
        'uses' => 'AdminController@updateData',
        'as' => 'get.app.getData'
    ]);

    Route::delete('/admin/delete-data/{id}', [
        'uses' => 'AdminController@deleteData',
        'as' => 'get.app.getData'
    ]); 
});