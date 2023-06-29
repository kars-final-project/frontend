import { z } from 'zod'

export const carAdSchema = z.object({
	brand: z.string().min(3).max(125),
	model: z.string().max(125),
	fuel: z.string().max(125),
	mileage: z.string().max(45),
	color: z.string().max(45),
	description: z.string().max(45),
	year: z.string().max(4),
	fipe_list_price: z.string(),
	price: z.string(),
	is_active: z.boolean().optional().default(true),
	cover_image: z.string(),
})

export const sellerCarAdSchema = carAdSchema
	.extend({
		gallery_image_1: z.string(),
		gallery_image_2: z.string()
	})

export const updateAdvertisementSchema = sellerCarAdSchema

export type iUpdateAdvertisement = z.infer<typeof updateAdvertisementSchema>

export type carAdData = z.infer<typeof carAdSchema>

export const responseCarAdSchema = carAdSchema
	.extend({
		id: z.number(),
	})
	.partial()

export type responseCarAdData = z.infer<typeof responseCarAdSchema>
