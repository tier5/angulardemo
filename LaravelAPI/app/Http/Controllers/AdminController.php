<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\TeamLeads;

class AdminController extends Controller
{
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
 
            $flag = 0; 

            /** Adding new Team Leader */
            $newTeamLead = new User();

            $newTeamLead->name = $request->name;
            $newTeamLead->teamName = request->newTeamName;
            $newTeamLead->sex = $request->sex;
            $newTeamLead->email = $request->email;
            $newTeamLead->password = bcrypt($request->password);
            $newTeamLead->isTeamLead = 1;
            
            /** Saving Team Leader Data to Database*/
            if($newTeamLead->save()) {
                flag++;
            }

            /** Addmin New Team Name */
            $newTeamName = new TeamLeads();
            $latestId =  User::orderBy('id', 'desc')->first();  // Getting id of the last user added

            $newTeamName->teamName = request->newTeamName;
            $newTeamName->teamId = $latestId;

            /** Saving Team Name */
            if($newTeamName->save()){
                flag++;
            }

            $latestTeamId = TeamLeads::orderBy('teamId', 'desc')->first();  // Getting id of the last team added
             
            $findUser = User::where('id', '=', $latestId)->first();
            $findUser->teamId = $latestTeamId;

            /** Saving Team Name */
            if($findUser->save()){
                flag++;
            }

            /** Checking Team Name */
            if($flag == 3){
                return response()->json([
                    'statusIs' => true
                    'message' => "New Data Added!"
                ]);
            }


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
            $findUser->name = $request->name;
            $findUser->teamId = $request->teamId;
            $findUser->teamName = (TeamLeads::where('teamId', '=', $request->teamId)->first())->teamName;
            $findUser->sex = $request->sex;
            $findUser->email = $request->email;
            $findUser->password = bcrypt($request->password);
            // $findUser->isAdmin = $request->isAdmin;
            $findUser->isTeamLead = 1;
            // $findUser->accountStatus = $request->accountStatus;
            // $findUser->addedBy = $request->addedBy

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
        $findTeam = TeamLeads::where('teamLeadsId','=',$id)->first();

        $findUsers = User::where('addedBy','=',$id);

        foreach ($findUsers as $user) {
            $user->acountStatus = 0;
            $user->save();
        }

        if($findUser->delete() && $findTeam->delete()){
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
