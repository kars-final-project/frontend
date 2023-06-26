import { createContext, useEffect, useState } from 'react'
import { iAd, iAdStatus, iAdValues, iAdsProps } from '../interfaces/ads.interfaces'
import { localAPI } from '../services/index'


export const AdsContext = createContext({} as iAdValues)

export const AdsProvider = ({
	children,
}: iAdsProps) => {
	const [filterBrand, setFilterBrand] = useState<string[]>([])
	const [filterColor, setFilterColor] = useState<string[]>([])
	const [filterYear, setFilterYear] = useState<string[]>([])
	const [filterKm, setFilterKm] = useState<string>("")
	const [filterPrice, setFilterPrice] = useState<string>("")
	const [filterFuel, setFilterFuel] = useState<string[]>([])
	const [filterModel, setFilterModel] =useState<string[]>([])
	const [showNewAdForm, setShowNewAdForm] =
		useState<boolean>(false)

	const [allAdsArray, setallAdsArray] = useState<iAd[]>([])

	const [adsById, setAdsById] = useState<iAd>()

	const [sellerAds, setSellerAds] = useState<Array<iAd>>([])

	const setShowNewAdState = () => {
		setShowNewAdForm((prevState) => !prevState)
	}

	useEffect(() => {
		getAllAdsArray()
		getSellerAds()
	}, [])

	const getAllAdsArray = async () => {
		try {
			const response = await localAPI.get<iAd[]>('advertisements')
			setallAdsArray(response.data)
		} catch (error) {
			console.error('Erro ao obter os anúncios', error)
		}
	}

	const getAdsById = async (id: number) => {
		try {
			const jwtToken = localStorage.getItem('@kars_login')
			if (!jwtToken) return

			const response = await localAPI.get<iAd>(`advertisements/${id}`, {
				headers: {
					Authorization: `Bearer ${jwtToken}`,
				},
			})
			setAdsById(response.data)
		} catch (error) {
			console.error('Erro ao obter o anúncio', error)
		}
	}

	const getSellerAds = async () => {
		try {
			const jwtToken = localStorage.getItem('@kars_login')
			if (!jwtToken) return

			const response = await localAPI.get<iAd[]>(`advertisements`, {
				headers: {
					Authorization: `Bearer ${jwtToken}`,
				},
			})
			setSellerAds(response.data)
		} catch (error) {
			console.error('Erro ao obter os anúncios', error)
		}
	}

	const createAd = async (body: unknown) => {
		try {
			const jwtToken = localStorage.getItem('@kars_login')
			if (!jwtToken) return

			const response = await localAPI.post('advertisements', body, {
				headers: {
					Authorization: `Bearer ${jwtToken}`,
				},
			})

			return response.data
		} catch (error) {
			console.error('Erro ao criar o anúncio', error)
		}
	}

	const updateAd = async (id: number, body: unknown) => {
		try {
			const jwtToken = localStorage.getItem('@kars_login')
			if (!jwtToken) return

			const response = await localAPI.patch<iAd>(
				`advertisements/${id}`,
				body,
				{
					headers: {
						Authorization: `Bearer ${jwtToken}`,
					},
				},
			)

			return response.data
		} catch (error) {
			console.error('Erro ao atualizar o anúncio', error)
		}
	}

	const updateAdStatus = async (id: number, body: iAdStatus) => {
		try {
			const jwtToken = localStorage.getItem('@kars_login')
			if (!jwtToken) return

			const response = await localAPI.patch<iAdStatus>(
				`advertisements/status/${id}`,
				body,
				{
					headers: {
						Authorization: `Bearer ${jwtToken}`,
					},
				},
			)
			return response.data
		} catch (error) {
			console.error('Erro ao atualizar status do anúncio', error)
		}
	}

	const deleteAd = async (id: number) => {
		try {
			const jwtToken = localStorage.getItem('@kars_login')
			if (!jwtToken) return

			await localAPI.delete(`advertisements/${id}`, {
				headers: {
					Authorization: `Bearer ${jwtToken}`,
				},
			})
		} catch (error) {
			console.error('Erro ao deletar o anúncio', error)
		}
	}

	return (
		<AdsContext.Provider
			value={{
				showNewAdForm,
				allAdsArray,
				getAllAdsArray,
				adsById,
				getAdsById,
				sellerAds,
				getSellerAds,
				createAd,
				updateAd,
				updateAdStatus,
				deleteAd,
				setShowNewAdState,
				filterBrand,
				setFilterBrand,
				filterColor,
				setFilterColor,
				filterYear,
				setFilterYear,
				filterKm,
				setFilterKm,
				filterPrice,
				setFilterPrice,
				filterFuel,
				setFilterFuel,
				filterModel,
				setFilterModel,
			}}
		>
			{children}
		</AdsContext.Provider>
	)
}
