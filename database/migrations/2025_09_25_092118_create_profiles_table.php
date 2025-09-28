<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('business_name');
            $table->string('owner_name');
            $table->string('commercial_registeration_number')->unique();
            $table->date('establishment_date');
            $table->string('city');
            $table->string('district');
            $table->text('business_description');
            
            $table->string('employees_count');
            $table->string('capital');
            $table->string('economic_activity');
            $table->string('experience_years');
            
            $table->string('email');
            $table->string('phone');
            $table->string('fax')->nullable();
            $table->string('website')->nullable();
            $table->string('address');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
