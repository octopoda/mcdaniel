<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->unique();
            $table->text('content');
            $table->text('searchable');
            $table->text('summary');
            $table->datetime('publish_date')->index();
            $table->boolean('published')->index()->unsigned();
            $table->string('direct_link')->unique();
            $table->string('post_image');
            $table->string('post_thumbnail');
            $table->string('post_facebook');
            $table->tinyInteger('video')->unsigned();
            $table->string('video_url');
            $table->integer('blog_id')->unsigned();
            $table->foreign('blog_id')->references('id')->on('blogs')->onDelete('cascade');
            $table->integer('post_type')->unsigned()->index();
            $table->string('tiny_url')->index()->unique();
            $table->timestamps();
        });

        DB::statement('ALTER TABLE posts ADD FULLTEXT full(title, content)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropForeign('posts_blog_id_foreign');
        });

        Schema::drop('posts');
    }
}
