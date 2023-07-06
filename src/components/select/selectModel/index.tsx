import React, { useContext, ChangeEvent, useEffect } from 'react'
import { Props } from './interface'
import { StyledSelect } from './style'
import { AdsContext } from '../../../contexts/ads.context'
import { carsAPI } from '../../../services'
import { model }from './interface'

const SelectModel: React.FC<Props> = ({ options, label }) => {
    const { selectedOptionModel, setSelectedOptionModel, selectedOptionBrand, setValueFipe, setFuelType } = useContext(AdsContext)

    const getCarApi = async () => {
        try {
			const response = await carsAPI.get(`/cars?brand=${selectedOptionBrand}`)
			const filterCar = response.data.filter((model: model) => model.name == selectedOptionModel)
			setValueFipe(filterCar[0].value)
            if (filterCar[0].fuel === 1) {
                setFuelType('flex')
            } else if (filterCar[0].fuel === 2) {
                setFuelType('elétrico')
            } else {
                setFuelType('híbrido')
            }
		} catch (error) {
			console.error(error)
		}
    }
    
    useEffect(() => {
        getCarApi()
    }, [selectedOptionModel])

    const handleChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionModel(event.target.value)
        // try {
		// 	const response = await carsAPI.get(`/cars?brand=${selectedOptionBrand}`)
		// 	const filterCar = response.data.filter((model: model) => model.name == selectedOptionModel)
		// 	setValueFipe(filterCar[0].value)
        //     if (filterCar[0].fuel === 1) {
        //         setFuelType('flex')
        //     } else if (filterCar[0].fuel === 2) {
        //         setFuelType('elétrico')
        //     } else {
        //         setFuelType('híbrido')
        //     }
		// } catch (error) {
		// 	console.error(error)
		// }
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