<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskCMSController extends Controller
{
    /* 
        Display all task in CMS on home page
     */
    public function index()
    {
        return view('home',['data' => Task::orderBy('created_at', 'asc')->get()]);
    }
}
