import { useContext } from 'react'
import { AdsContext } from '../../../contexts/ads.context'
import Input from '../../inputForAd/index'
import { FormNewAd } from './styles'
import { useForm } from 'react-hook-form'
import { carAdSchema } from '../../../schemas/ads.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { iAd } from '../../../interfaces/ads.interfaces'

export const NewAdModal = () => {
	const { setShowNewAdState, createAd, getSellerAds } = useContext(AdsContext)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iAd>({ resolver: zodResolver(carAdSchema) })

	const onSubmit = async (data: any) => {
		data.price = parseInt(data.price)
		data.table_price = parseInt(data.table_price)
		await createAd(data)
		setShowNewAdState()
		getSellerAds()
	}

	return (
		<div>
			<FormNewAd
				noValidate
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='divTitleAndCloseButton'>
					<h2>Criar anúncio</h2>
					<button onClick={setShowNewAdState}>X</button>
				</div>

				<div className='divInputs'>
					<h3>Informações do veículo:</h3>
					<Input
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
					)}
					<Input
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
					)}
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
							id='table_price'
							type='text'
							placeholder='48000'
							label='Preço tabela FIPE'
							register={register('table_price')}
						/>
						{errors.table_price && (
							<span className='alert-span'>
								{errors.table_price.message}
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
			</FormNewAd>
		</div>
	)
}
