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
    		$employee->password       = bcrypt($request->password);

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
    	} catch (\Exception $e) {
    		return Response::json(array(
    			'status' => false,
    			'status_code' => 500,
    			'response' => NULL,
    			'message' => $e->getMessage()
    		));
    	}
    }
    public function postUpdateEmployee(Request $request) {
        //return $request;
        try {
            $find_row = Employee::findOrFail($request->id);
            if ($find_row) {
                $find_row->employee_name    = $request->employee_name;
                $find_row->employee_email   = $request->employee_email;
                $find_row->phone_number     = $request->phone_number;
                $find_row->address          = $request->address;
                if (isset($request->new_password) && strlen($request->new_password)) {
                    $find_row->password     = bcrypt($request->new_password);
                }
                $find_row->role             = $request->role;
                if ($find_row->save()) {
                    return Response::json(array(
                        'status' => true,
                        'status_code' => 200,
                        'response' => $find_row,
                        'message' => "Successfully updated!"
                    ));
                } else {
                    return Response::json(array(
                        'status' => false,
                        'status_code' => 500,
                        'response' => NULL,
                        'message' => "Internal Server Error!"
                    ));
                }
            }
        } catch (\Exception $e) {
            return Response::json(array(
                'status' => false,
                'status_code' => 404,
                'response' => NULL,
                'message' => $e->getMessage()
            ));
        }
    }
    public function postDeleteEmployee(Request $request) {
        //return $request->id;
        try {
            $delete_employee = Employee::findOrFail($request->id);
            if ($delete_employee) {
                if($delete_employee->delete()) {
                    return Response::json(array(
                        'status' => true,
                        'status_code' => 200,
                        'response' => $delete_employee,
                        'message' => "Successfully deleted!"
                    ));
                } else {
                    return Response::json(array(
                        'status' => false,
                        'status_code' => 500,
                        'response' => NULL,
                        'message' => "Internal Server Error!"
                    ));
                }
            }
        } catch (\Exception $e) {
            return Response::json(array(
                'status' => false,
                'status_code' => 404,
                'response' => NULL,
                'message' => $e->getMessage()
            ));
        }
    }
}
