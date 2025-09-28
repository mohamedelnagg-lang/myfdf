<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // User fields
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'      => 'required|email|unique:users,email',
            'phone'      => 'required|string|max:20|unique:users,phone',
            'password'   => 'required|string|min:6|confirmed',
            'role'       => 'required|in:individual,company,admin',

            // Profile fields
            'business_name'                  => 'required|string|max:255',
            'owner_name'                     => 'required|string|max:255',
            'commercial_registeration_number' => 'required|string|unique:profiles,commercial_registeration_number',
            'establishment_date'             => 'required|date',
            'city'                           => 'required|string|max:255',
            'district'                       => 'required|string|max:255',
            'business_description'           => 'required|string',
            'employees_count'                => 'required|string',
            'capital'                        => 'required|string',
            'economic_activity'              => 'required|string',
            'experience_years'               => 'required|string',
            'email'                          => 'required|email',
            'phone'                          => 'required|string|max:20',
            'fax'                            => 'nullable|string|max:20',
            'website'                        => 'nullable|string|max:255',
            'address'                        => 'required|string|max:255',
        ];
    }
}
