<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactsController;

Route::get('get_contacts', [ContactsController::class,'getContacts']);  
Route::post('add_contacts', [ContactsController::class,'addContacts']);  

