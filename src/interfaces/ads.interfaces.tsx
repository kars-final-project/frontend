import { z } from "zod";
import {
  carAdData,
  carAdSchema,
  responseCarAdData,
} from "../schemas/ads.schema";
import { model } from '../components/select/selectModel/interface'

export type iAd = z.infer<typeof carAdSchema>;
export type iAdsArray = Array<carAdData>;
export type iOrderedPartialAdsArray = Array<responseCarAdData>;
export interface CardsProps {
  arr: iAdsArray | iOrderedPartialAdsArray;
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
  is_active: boolean;
};

interface iName {
	name: string;
}

export interface iData {
	chevrolet: iName[];
	citroën: iName[];
	fiat: iName[];
	ford: iName[];
	honda: iName[];
	hyundai: iName[];
	nissan: iName[];
	peugeot: iName[];
	renault: iName[];
	toyota: iName[];
	volkswagen: iName[];
}

export interface iBrand {
  id: string;
  name: string;
}

export interface iModel {
  id: string;
  name: string;
}

export interface iColor {
  id: string;
  name: string;
}

export interface iYear {
  id: string;
  year: number;
}

export interface iFuel {
  id: string;
  name: string;
}

export interface iAdsProps {
  children: React.ReactNode;
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
	brands: string[]
	selectedOptionBrand: string
	setSelectedOptionBrand: React.Dispatch<React.SetStateAction<string>>
	selectedOptionModel: string
	setSelectedOptionModel: React.Dispatch<React.SetStateAction<string>>
	getBrands: () => Promise<void>
	getModels: () => Promise<void>
	models: model[]
	valueFipe: number
	setValueFipe: React.Dispatch<React.SetStateAction<number>>
	getValueFipe: () => Promise<void>
	fuelType: string
	setFuelType: React.Dispatch<React.SetStateAction<string>>
    
export interface iModel {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export interface iAdValues {
  showNewAdForm: boolean;
  allAdsArray: iAd[];
  getAllAdsArray: () => void;
  adsById: iSellerAd;
  setAdsById:React.Dispatch<React.SetStateAction<iSellerAd>>;
  getAdsById: (id: string) => void;
  sellerAds: iSellerAd[];
  getSellerAds: () => void;
  createAd: any;
  updateAd: any;
  deleteAd: any;
  updateAdStatus: any;
  setShowNewAdState: () => void;
  filterBrand: string[];
  setFilterBrand: React.Dispatch<React.SetStateAction<string[]>>;
  filterModel: string[];
  setFilterModel: React.Dispatch<React.SetStateAction<string[]>>;
  filterColor: string[];
  setFilterColor: React.Dispatch<React.SetStateAction<string[]>>;
  filterYear: string[];
  setFilterYear: React.Dispatch<React.SetStateAction<string[]>>;
  filterFuel: string[];
  setFilterFuel: React.Dispatch<React.SetStateAction<string[]>>;
  filterKm: string;
  setFilterKm: React.Dispatch<React.SetStateAction<string>>;
  filterPrice: string;
  setFilterPrice: React.Dispatch<React.SetStateAction<string>>;
  showModalEditAd: boolean;
  setShowModalEditAd: React.Dispatch<React.SetStateAction<boolean>>;
  adData: any;
  setAdData: React.Dispatch<React.SetStateAction<any>>;
  brands: string[]
  setBrands: React.Dispatch<React.SetStateAction<string[]>>
  selectedOptionBrand: string
  setSelectedOptionBrand: React.Dispatch<React.SetStateAction<string>>
  selectedOptionModel: string
  setSelectedOptionModel: React.Dispatch<React.SetStateAction<string>>
  showEditAddressModal: boolean
  setShowEditAddressModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface iFilterFunctions {
  brandSelected: iBrand | null;
  showAllBrands: boolean;
  selectBrand: (brand: iBrand) => void;

  modelSelected: iModel | null;
  showAllModels: boolean;
  selectModel: (model: iModel) => void;

  colorSelected: iColor | null;
  showAllColors: boolean;
  selectColor: (color: iColor) => void;

  yearSelected: iYear | null;
  showAllYears: boolean;
  selectYear: (year: iYear) => void;

  fuelSelected: iFuel | null;
  showAllFuels: boolean;
  selectFuel: (fuel: iFuel) => void;

  minKm: number | null;
  SetMinKm: (km: number) => void;

  maxKm: number | null;
  SetMaxKm: (km: number) => void;

  minPrice: number | null;
  SetMinPrice: (price: number) => void;

  maxPrice: number | null;
  SetMaxPrice: (price: number) => void;

  brandList: string[];
  getModel: (brand: string) => void;
  modelList: iModel[]
  setModelList: React.Dispatch<React.SetStateAction<iModel[]>>;
}

export interface iFilterProps {
  children: React.ReactNode;
}
