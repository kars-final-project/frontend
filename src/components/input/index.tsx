import React from 'react'
import { iInput } from './interface'
import { StyledFieldset } from './style'

const Input = ({ id, label, register, placeholder, type, disabled, error, defaultValue }: iInput) => {
  return (
    <StyledFieldset>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            placeholder={placeholder}
            type={type} 
            disabled={disabled}
            {...register}
            defaultValue={defaultValue}
        />
        <small>{error}</small>
    </StyledFieldset>
  )
}

export default Input