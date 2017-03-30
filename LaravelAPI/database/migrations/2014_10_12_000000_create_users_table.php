<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('teamId')->nullable();
            $table->string('teamName')->nullable();
            $table->integer('sex')->comment('Male = 1, Female = 0');
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('isAdmin')->default('0');
            $table->integer('isTeamLead')->default('0');
            $table->integer('acountStatus')->default('0');
            $table->integer('addedBy')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
