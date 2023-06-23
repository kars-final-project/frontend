import { UseFormRegisterReturn } from 'react-hook-form'

type tRegister =
	| 'brand'
	| 'model'
	| 'fuel'
	| 'mileage'
	| 'color'
	| 'year'
	| 'description'
	| 'table_price'
	| 'price'
	| 'is_active'
	| 'cover_image'
    

export interface iInput {
	id: string
	label: string
	placeholder: string
	type: string
	register: UseFormRegisterReturn<tRegister>
	error?: string
}
