import React, { useContext, ChangeEvent } from 'react'
import { Props } from './interface'
import { StyledSelect } from './style'
import { AdsContext } from '../../../contexts/ads.context'

const SelectModel: React.FC<Props> = ({ options, label }) => {
    const { selectedOptionModel, setSelectedOptionModel } = useContext(AdsContext)

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionModel(event.target.value)
    }

    return (
        <StyledSelect>
            <label>{label}</label>
            <select value={selectedOptionModel} onChange={handleChange}>
                <option value=''>Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.name} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </StyledSelect>
  )
}

export default SelectModel