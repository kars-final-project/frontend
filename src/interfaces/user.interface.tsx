import { z } from 'zod'
import { loginSchema, responseUserSchema } from '../schemas/users.schema'
import { ReactNode, Dispatch, SetStateAction } from 'react'
import { iLogin } from './login.interfaces'

export type iUser = z.infer<typeof loginSchema>
export type iUserReturn = z.infer<typeof responseUserSchema>

export interface iAuthProps {
	children: ReactNode
}

export interface iUserContext {
	user: iUserReturn | null
	login: (data: iLogin) => Promise<void>
	registerUser: (data: iLogin) => Promise<void>
	setUser: Dispatch<SetStateAction<iUserReturn | null>>
}
