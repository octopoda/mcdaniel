<?php 

namespace App\Http\Requests;

use App\Http\Requests\Request;

class ProductRequest extends Request {

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
						'title' => 'required|unique:products|min:3',
						'description' => 'required',
						'price' => 'required',
					];
				}
				case 'PUT' :
				case 'PATCH' : {
					return [
						'title' => 'required|min:3',
						'description' => 'required',
						'price' => 'required',
					];
				}
				default:break;
			}
	}

}
