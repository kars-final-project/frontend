import React from 'react'
import { iInput } from './interface'
import { StyledFieldset } from './style'

const InputForAd = ({ id, label, register, placeholder, type, error }: iInput) => {
  return (
    <StyledFieldset>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            placeholder={placeholder}
            type={type}
            {...register}
        />
        <small>{error}</small>
    </StyledFieldset>
  )
}

export default InputForAd