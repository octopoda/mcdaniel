<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->unique()->index();
            $table->text('description');
            $table->text('searchable');
            $table->float('price')->index();
            $table->string('paypal_url');
            $table->string('product_image');
            $table->string('direct_link');
            $table->string('url');
            $table->tinyInteger('published')->index();
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
        Schema::drop('products');
    }
}
