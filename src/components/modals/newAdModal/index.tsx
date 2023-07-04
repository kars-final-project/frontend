import { useContext, useState, useEffect } from 'react'
import { AdsContext } from '../../../contexts/ads.context'
import Input from '../../inputForAd/index'
import { StyledForm } from './styles'
import { useForm } from 'react-hook-form'
import { sellerCarAdSchema } from '../../../schemas/ads.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { iSellerAd } from '../../../interfaces/ads.interfaces'
import { carsAPI } from '../../../services'
import SelectBrand from '../../../components/select/selectBrand'
import SelectModel from '../../../components/select/selectModel'
import { model } from '../../../components/select/selectModel/interface'

export const NewAdModal = () => {
	const { setShowNewAdState, createAd, getSellerAds, selectedOptionBrand, selectedOptionModel } = useContext(AdsContext)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iSellerAd>({ resolver: zodResolver(sellerCarAdSchema) })

	const onSubmit = async (data: any) => {
		await createAd(data)
		setShowNewAdState()
		getSellerAds()
	}

	const [brands, setBrands] = useState<string[]>([])
	
    const getBrands = async () => {
		try {
			const response = await carsAPI.get('/cars')
			const allBrands = Object.keys(response.data).map((brand) => brand)
			setBrands(allBrands)
		} catch (error) {
			console.error(error)
		}
	}
	
	interface model {
		id: string
		name: string
		brand: string
		year: string
		fuel: number
		value: number
	}

	const [models, setModels] = useState<model[]>([])
	const [valueFipe, setValueFipe] = useState<model[]>([])

    const getModels = async () => {
		try {
			const response = await carsAPI.get(`/cars?brand=${selectedOptionBrand}`)
			const allModels = response.data.map((model: model) => model)
			setModels(allModels)
			console.log(response.data)
		} catch (error) {
			console.error(error)
		}
	}

    const getValueFipe = async () => {
		try {
			const response = await carsAPI.get(`/cars?brand=${selectedOptionBrand}`)
			const filterValueFipe = response.data.filter((model: model) => model.name == selectedOptionModel)
			setValueFipe(filterValueFipe)
			console.log(filterValueFipe)
		} catch (error) {
			console.error(error)
		}
	}

	// useEffect(() => {
	// 	getValueFipe()
	// }, [valueFipe])

	useEffect(() => {
		getBrands()
		getModels()
		getValueFipe()
	},[selectedOptionBrand])

	// function valueFipeFunc() {
	// 	if (valueFipe[0].value !== 0){
	// 		return valueFipe[0].value.toString()
	// 	}
	// 	return '0'
	// }

	return (
		<div>
			<StyledForm
				noValidate
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='divTitleAndCloseButton'>
					<h2>Criar anúncio</h2>
					<button onClick={setShowNewAdState}>X</button>
				</div>

				<div className='divInputs'>
					<h3>Informações do veículo:</h3>
					{/* <Input
						id='brand'
						type='text'
						placeholder='Mercedez-Benz'
						label='Marca'
						register={register('brand')}
					/>
					{errors.brand && (
						<span className='alert-span'>
							{errors.brand.message}
						</span>
					)} */}
					<SelectBrand options={brands} label='Marca'/>
					<SelectModel options={models} label='Modelo'/>
					{/* <Input
						id='model'
						type='text'
						placeholder='A 200 CGI ADVANCE SEDAN'
						label='Modelo'
						register={register('model')}
					/>
					{errors.model && (
						<span className='alert-span'>
							{errors.model.message}
						</span>
					)} */}
					<div className='divTwoInputs'>
						<Input
							id='year'
							type='number'
							placeholder='2018'
							label='Ano'
							register={register('year')}
						/>
						{errors.year && (
							<span className='alert-span'>
								{errors.year.message}
							</span>
						)}
						<Input
							id='fuel'
							type='text'
							placeholder='Gasolina / Etanol'
							label='Combustível'
							register={register('fuel')}
						/>
						{errors.fuel && (
							<span className='alert-span'>
								{errors.fuel.message}
							</span>
						)}
					</div>

					<div className='divTwoInputs'>
						<Input
							id='mileage'
							type='number'
							placeholder='3000'
							label='Quilometragem'
							register={register('mileage')}
						/>
						{errors.mileage && (
							<span className='alert-span'>
								{errors.mileage.message}
							</span>
						)}
						<Input
							id='color'
							type='text'
							placeholder='Branco'
							label='Cor'
							register={register('color')}
						/>
						{errors.color && (
							<span className='alert-span'>
								{errors.color.message}
							</span>
						)}
					</div>

					<div className='divTwoInputs'>
						<Input
							id='fipe_list_price'
							type='text'
							// placeholder={valueFipe[0].value.toString()}
							placeholder='48000'
							label='Preço tabela FIPE'
							register={register('fipe_list_price')}
						/>
						{errors.fipe_list_price && (
							<span className='alert-span'>
								{errors.fipe_list_price.message}
							</span>
						)}

						<Input
							id='price'
							type='text'
							placeholder='50000'
							label='Preço'
							register={register('price')}
						/>
						{errors.price && (
							<span className='alert-span'>
								{errors.price.message}
							</span>
						)}
					</div>

					<Input
						id='description'
						type='text'
						placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						label='Descrição'
						register={register('description')}
					/>
					{errors.description && (
						<span className='alert-span'>
							{errors.description.message}
						</span>
					)}

					<Input
						id='cover_image'
						type='text'
						placeholder='https://image.com'
						label='Imagem da capa'
						register={register('cover_image')}
					/>
					{errors.cover_image && (
						<span className='alert-span'>
							{errors.cover_image.message}
						</span>
					)}

					<Input 
						id='gallery_image_1'
						type='text'
						placeholder='https://image.com/01'
						label='Imagem da galeira'
						register={register('gallery_image_1')}
					/>
					{errors.gallery_image_1 && (
						<span className='alert-span'>
							{errors.gallery_image_1.message}
						</span>
					)}

					<Input 
						id='gallery_image_2'
						type='text'
						placeholder='https://image.com/02'
						label='Imagem da galeira'
						register={register('gallery_image_2')}
					/>
					{errors.gallery_image_2 && (
						<span className='alert-span'>
							{errors.gallery_image_2.message}
						</span>
					)}

					<div className='divButtonCancelAndSubmit'>
						<button
							className='buttonCancel'
							onClick={setShowNewAdState}
						>
							Cancelar
						</button>
						<button
							type='submit'
							className='buttonSubmit'
						>
							Criar Anúncio
						</button>
					</div>
				</div>
			</StyledForm>
		</div>
	)
}
