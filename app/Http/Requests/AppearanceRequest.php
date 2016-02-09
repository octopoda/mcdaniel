<?php 

namespace App\Http\Requests;

use App\Http\Requests\Request;

class AppearanceRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'link' => 'required|min:3',
			'title' => 'required|min:3',
			'publication' => 'required'
		];
	}

}