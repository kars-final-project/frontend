import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string()
		.email('Deve ser um e-mail')
		.nonempty('E-mail é obrigatório'),
	password: z
		.string()
		.min(8, 'A senha precisa ter no mínimo 8 caracteres')
		.nonempty('Senha é obrigatória'),
})

export type LoginData = z.infer<typeof loginSchema>

export const registerSchema = z.object({
	name: z.string().nonempty('Nome é obrigatório'),
	email: z
		.string()
		.email('Deve ser um e-mail')
		.nonempty('E-mail é obrigatório'),
	cpf: z.string().nonempty('CPF é obrigatório'),
	phone: z.string().nonempty('Celular é obrigatório'),
	birthday: z.string().nonempty('Data de aniversário é obrigatório'),
	description: z.string().nonempty('Descrição é obrigatória'),
	password: z.string().nonempty('Senha é obrigatória'),
	zip_code: z.string().nonempty('CEP é obrigatório'),
	state: z.string().nonempty('Estado é obrigatório'),
	city: z.string().nonempty('Cidade é obrigatória'),
	street: z.string().nonempty('Rua é obrigatória'),
	number: z.string().nonempty('Número é obrigatório'),
	complement: z.string().nonempty('Complemento é obrigatório'),
})

export type RegisterData = z.infer<typeof registerSchema>

export const responseUserSchema = registerSchema
	.extend({
		id: z.number(),
		createdAt: z.string(),
		updatedAt: z.string(),
		deletedAt: z.string().nullable(),
	})
	.omit({ password: true })
    .partial()

export type responseUserData = z.infer<typeof responseUserSchema>