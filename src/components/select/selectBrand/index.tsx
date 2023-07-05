import React, { useContext, ChangeEvent } from 'react'
import { Props } from './interface'
import { StyledSelect } from './style'
import { AdsContext } from '../../../contexts/ads.context'

const SelectBrand: React.FC<Props> = ({ options, label }) => {
    const { selectedOptionBrand, setSelectedOptionBrand } = useContext(AdsContext)

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionBrand(event.target.value)
    }

    return (
        <StyledSelect>
            <label>{label}</label>
            <select value={selectedOptionBrand} onChange={handleChange}>
                <option value=''>Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </StyledSelect>
  )
}

export default SelectBrand