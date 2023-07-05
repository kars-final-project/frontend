import { UseFormRegisterReturn } from 'react-hook-form'

type tRegister =
	| 'brand'
	| 'model'
	| 'fuel'
	| 'mileage'
	| 'color'
	| 'year'
	| 'description'
	| 'fipe_list_price'
	| 'price'
	| 'is_active'
	| 'cover_image'
	| 'gallery_image_1'
	| 'gallery_image_2'
    

export interface iInput {
	id: string
	label: string
	placeholder: string | undefined
	type: string
	register: UseFormRegisterReturn<tRegister>
	error?: string
	disabled?: boolean
}
