import { z } from 'zod'

export const schema = z.object({
    name: z.string().nonempty('Nome é obrigatório'),
    email: z.string().email('Deve ser um e-mail'),
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
    complement: z.string().nonempty('Complemento é obrigatório')
})

export type RegisterData = z.infer<typeof schema>