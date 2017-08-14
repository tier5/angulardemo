<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;
use Response;

class HomeController extends Controller
{
    public function index() {
    	//return 123;
    	$employee = Employee::all();
    	if ($employee) {
    		return Response::json(array(
	            'status' => true,
	            'status_code' => 200,
	            'response' => $employee,
	            'message' => 'Successfully fetched all record!'
	        ));
    	} else {
    		return Response::json(array(
	            'status' => true,
	            'status_code' => 200,
	            'response' => NULL,
	            'message' => 'Sorry! No record found.'
	        ));
    	}
    }
    public function postSaveEmployee(Request $request) {
    	//dd($request->ajax());
    	try {

    		$employee = new Employee();
    		$employee->employee_name  = $request->emp_name;
    		$employee->employee_email = $request->emp_email;
    		$employee->phone_number   = $request->ph_no;
    		$employee->address        = $request->address;
    		$employee->role       	  = $request->role;
    		$employee->password       = $request->password;

    		if($employee->save()){
    			return Response::json(array(
	    			'status' => true,
	    			'status_code' => 200,
	    			'response' => $employee,
	    			'message' => "Successfully saved!"
	    		));
    		} else {
    			return Response::json(array(
	    			'status' => false,
	    			'status_code' => 500,
	    			'response' => NULL,
	    			'message' => "Internal Server Error!"
	    		));
    		}
    	} catch (Exception $e) {
    		return Response::json(array(
    			'status' => false,
    			'status_code' => 500,
    			'response' => NULL,
    			'message' => $e->getMessage()
    		));
    	}
    }
}
