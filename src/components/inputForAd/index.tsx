import React from 'react'
import { iInput } from './interface'
import { StyledFieldset } from './style'

const InputForAd = ({ id, label, register, placeholder, type, error, disabled }: iInput) => {

  return (
    <StyledFieldset>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            placeholder={placeholder}
            type={type}
            {...register}
            disabled={disabled}
        />
        <small>{error}</small>
    </StyledFieldset>
  )
}

export default InputForAd