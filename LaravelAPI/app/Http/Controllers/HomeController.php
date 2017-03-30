<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\TeamLeads;
use Auth;

class HomeController extends Controller
{
    /** Retrieve Data*/
    public function getData(Request $request)
    {
        $data = TeamLeads::all();
        return $data;
    }

    /** Add a New Data */
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
            if($request->confirmPassword == $request->password) {
                $data->name = $request->name;
                $data->teamId = $request->teamId;
                $data->teamName = (TeamLeads::where('teamId', '=', $request->teamId)->first())->teamName;
                $data->sex = $request->sex;
                $data->email = $request->email;
                $data->password = bcrypt($request->password);
                // $data->isAdmin = $request->isAdmin;
                // $data->isTeamLead = $request->isTeamLead;
                // $data->accountStatus = $request->accountStatus;
                // $data->addedBy = $request->addedBy;
                
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
            } else {
                return response()->json([
                    'statusIs' => false,
                    'message' => "Password didnot Match!"
                ]);
            }
        }
    }

    /** Check Validity of a Data */
    public function checkData(Request $request)
    {
        /** Attempt to authenticate the user */
        if (auth()->attempt(request(['email','password']))) {
            $user = User::where('email', '=', $request->email)->first();
            if ($user->isAdmin) {
                return response()->json([
                    'statusIs' => true,
                    'message' => "Admin"
                ]);
            } else if($user->isTeamLead) {
                return response()->json([
                    'statusIs' => true,
                    'message' => "TeamLead"
                ]);
            } else {
                return response()->json([
                    'statusIs' => true,
                    'message' => "Member"
                ]);
            }
        } else {
            return response()->json([
                'statusIs' => false,
                'message' => "Invalid Credentials!"
            ]);
        }
    } 

    /** Log out a session */
    public function logout()
    {
        Auth::logout();
        return redirect()->route('home');
    }

}
