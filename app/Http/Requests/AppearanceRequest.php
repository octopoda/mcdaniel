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
		  switch($this->method()) {
			case 'GET':
		        case 'DELETE': {
		            return [];
		        }
		        case 'POST': {
					return [
						'link' => 'required|min:3',
						'title' => 'required|min:3|unique:appearances',
						'publication' => 'required'
					];
				}
				case 'PUT' :
				case 'PATCH' : {
					return [
						'link' => 'required|min:3',
						'title' => 'required|min:3',
						'publication' => 'required'
					];
				}
				default:break;
			}
	}

}
