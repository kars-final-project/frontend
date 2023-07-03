import { z } from 'zod'
import { loginSchema, responseUserSchema } from '../schemas/users.schema'
import { ReactNode, Dispatch, SetStateAction } from 'react'
import { iLogin } from './login.interfaces'
import jwtDecode, { JwtPayload } from "jwt-decode";

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

export interface iUserResponse {
	id: number,
	name: string,
	email: string,
	cpf: string,
	phone: string,
	birthday: string,
	type: string,
	reset_token: string | null
}

export interface TokenData extends JwtPayload {
	type: string;
	email: string;
	iat: number;
	exp: number;
	sub: string;
  }