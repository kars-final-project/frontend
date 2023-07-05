import { UseFormRegisterReturn } from "react-hook-form"

type tRegister = "name" | "email" | "phone" | "password" | "cpf" | "birthday" | "description" | "type" | "zip_code" | "state" | "city" | "street" | "number" | "complement" | "confirmPassword" | "brand" | "model" | "year" | "fuel" | "mileage" | "color" | "fipe_list_price" | "price" | "cover_image" | "gallery_image_1" | "gallery_image_2" | "user_image"


export interface iInput {
    id: string
    label: string
    placeholder: string
    type: string
    disabled: boolean
    register:  UseFormRegisterReturn<tRegister>
    error?: string
    defaultValue?: string
}