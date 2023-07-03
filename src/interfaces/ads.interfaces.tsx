import { z } from 'zod'
import { carAdData, carAdSchema, responseCarAdData } from '../schemas/ads.schema'

export type iAd = z.infer<typeof carAdSchema>
export type iAdsArray = Array<carAdData>
export type iOrderedPartialAdsArray = Array<responseCarAdData>
export interface CardsProps {
	arr: iAdsArray | iOrderedPartialAdsArray
}

export interface iSellerAd extends iAd {
	gallery_image_1: string;
	gallery_image_2: string;
}

export interface iCar {
	id: string;
	name: string;
	brand: string;
	year: string;
	fuel: number;
	value: number;
}
  
export type iAdStatus = {
	is_active: boolean
}


interface model {
	name: string;
}

export interface iData {
	chevrolet: model[];
	citroën: model[];
	fiat: model[];
	ford: model[];
	honda: model[];
	hyundai: model[];
	nissan: model[];
	peugeot: model[];
	renault: model[];
	toyota: model[];
	volkswagen: model[];
}


export interface iBrand {
	id: number
	name: string
}

export interface iModel {
	id: number
	name: string
}

export interface iColor {
	id: number
	name: string
}

export interface iYear {
	id: number
	year: number
}

export interface iFuel {
	id: number
	name: string
}

export interface iAdsProps {
	children: React.ReactNode
}

export interface iAdValues {
	showNewAdForm: boolean
	allAdsArray: iAd[]
	getAllAdsArray: () => void
	adsById: unknown
	getAdsById: unknown
	sellerAds: iAd[]
	getSellerAds: () => void
	createAd: any
	updateAd: any
	deleteAd: any
	updateAdStatus: any
	setShowNewAdState: () => void
	filterBrand: string[]
	setFilterBrand: React.Dispatch<React.SetStateAction<string[]>>
	filterModel: string[]
	setFilterModel: React.Dispatch<React.SetStateAction<string[]>>
	filterColor: string[]
	setFilterColor: React.Dispatch<React.SetStateAction<string[]>>
	filterYear: string[]
	setFilterYear: React.Dispatch<React.SetStateAction<string[]>>
	filterFuel: string[]
	setFilterFuel: React.Dispatch<React.SetStateAction<string[]>>
	filterKm: string
	setFilterKm: React.Dispatch<React.SetStateAction<string>>
	filterPrice: string
	setFilterPrice: React.Dispatch<React.SetStateAction<string>>
	showModalEditAd: boolean
	setShowModalEditAd: React.Dispatch<React.SetStateAction<boolean>>
	adData: any
	setAdData: React.Dispatch<React.SetStateAction<any>>
}


export interface iFilterFunctions {
	brandSelected: iBrand | null
	showAllBrands: boolean
	selectBrand: (brand: iBrand) => void

	modelSelected: iModel | null
	showAllModels: boolean
	selectModel: (model: iModel) => void

	colorSelected: iColor | null
	showAllColors: boolean
	selectColor: (color: iColor) => void

	yearSelected: iYear | null
	showAllYears: boolean
	selectYear: (year: iYear) => void

	fuelSelected: iFuel | null
	showAllFuels: boolean
	selectFuel: (fuel: iFuel) => void

	minKm: number | null
	SetMinKm: (km: number) => void

	maxKm: number | null
	SetMaxKm: (km: number) => void

	minPrice: number | null
	SetMinPrice: (price: number) => void

	maxPrice: number | null
	SetMaxPrice: (price: number) => void
}

export interface iFilterProps {
	children: React.ReactNode
}
