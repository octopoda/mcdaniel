<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSiteOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('sites', function (Blueprint $table){
            $table->increments('id');
            $table->text('description');
            $table->string('keywords');
            $table->string('site_name')->index();
            $table->string('google_code');
            $table->string('site_url')->index();    
            $table->string('site_email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sites');
    }
}
