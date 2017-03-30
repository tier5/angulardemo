<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class APIController extends Controller
{
    //

    public function getData(Request $request)
    {
        $data = User::all();
        return $data;
    }

    public function addData(Request $request)
    {
        $data = new User();

        $findEmail = User::where('email', '=', $request->email)->first();

        if($findEmail) {
            return response()->json([
                'statusIs' => false,
                'message' => "Email Already Added!"
            ]);       
        } else {
            $data->name = $request->name;
            $data->email = $request->email;
            /** Saving Data to Database*/
            if($data->save()) {
                return response()->json([
                    'statusIs' => true,
                    'message' => "New Data Added!"
                ]);
            } else {
                    return response()->json([
                    'statusIs' => false,
                    'message' => "Something Unexpected Happened!"
                ]);
            }
        }
    }

    public function updateData(Request $request, $id)
    {
        $findUser = User::find($id);

        if($findUser) {
            $finduser->name = $request->name;
            $finduser->email = $request->email;
            /** Saving Data to Database*/
            if($finduser->save()) {
                return response()->json([
                    'statusIs' => true,
                    'message' => "Data Updated!"
                ]);
            } else {
                    return response()->json([
                    'statusIs' => false,
                    'message' => "Something Unexpected Happened!"
                ]);
            }
        } else {
            return response()->json([
                'statusIs' => false,
                'message' => "Data Not Found!"
            ]); 
        }
    }

    public function deleteData(Request $request, $id)
    {
         $findUser = User::find($id);

         if($findUser->delete()){
            return response()->json([
                'statusIs' => true,
                'message' => "Data Deleted!"
            ]);
         } else {
            return response()->json([
                'statusIs' => false,
                'message' => "Something Unexpected Happened!"
            ]);
         }
    }

}
