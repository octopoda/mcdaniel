<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppearancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appearances', function (Blueprint $table) {
            $table->increments('id');
            $table->string('link')->index();
            $table->string('video_url')->nullable();
            $table->string('title')->index();
            $table->tinyInteger('published')->index()->unsigned();
            $table->string('direct_link')->index();
            $table->string('publication');
            $table->string('appearance_date');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::drop('appearances');
    }
}
