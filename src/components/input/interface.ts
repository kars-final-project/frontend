import { UseFormRegisterReturn } from "react-hook-form"

type tRegister = "name" | "email" | "phone" | "password" | "cpf" | "birthday" | "description" | "type" | "zip_code" | "state" | "city" | "street" | "number" | "complement" | "confirmPassword"


export interface iInput {
    id: string
    label: string
    placeholder: string
    type: string
    disabled: boolean
    register:  UseFormRegisterReturn<tRegister>
    error?: string
}