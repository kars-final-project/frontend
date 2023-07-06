import { createContext, useEffect, useState } from "react";
import {
  iAd,
  iAdStatus,
  iAdValues,
  iAdsProps,
  iSellerAd,
} from "../interfaces/ads.interfaces";
import { localAPI } from "../services/index";
import { toast } from "react-toastify";
import { iUpdateAdvertisement } from "schemas/ads.schema";

export const AdsContext = createContext({} as iAdValues);

export const AdsProvider = ({ children }: iAdsProps) => {
  const [filterBrand, setFilterBrand] = useState<string[]>([]);
  const [filterColor, setFilterColor] = useState<string[]>([]);
  const [filterYear, setFilterYear] = useState<string[]>([]);
  const [filterKm, setFilterKm] = useState<string>("");
  const [filterPrice, setFilterPrice] = useState<string>("");
  const [filterFuel, setFilterFuel] = useState<string[]>([]);
  const [filterModel, setFilterModel] = useState<string[]>([]);
  const [showNewAdForm, setShowNewAdForm] = useState<boolean>(false);
  const [adData, setAdData] = useState(null);
  const [showModalEditAd, setShowModalEditAd] = useState(false);

  const [allAdsArray, setallAdsArray] = useState<iAd[]>([]);

  const [adsById, setAdsById] = useState<iSellerAd>({
    id: "",
    user_id: "",
    brand: "",
    model: "",
    fuel: "",
    mileage: "",
    color: "",
    description: "",
    year: "",
    fipe_list_price: "",
    price: "",
    is_active: true,
    cover_image: "",
    gallery_image_1: "",
    gallery_image_2: ""
  });

  const [sellerAds, setSellerAds] = useState<Array<iSellerAd>>([]);

  const setShowNewAdState = () => {
    setShowNewAdForm((prevState) => !prevState);
  };

  useEffect(() => {
    getAllAdsArray();
    getSellerAds();
  }, []);

  const getAllAdsArray = async () => {
    try {
      const response = await localAPI.get<iAd[]>("advertisements");
      setallAdsArray(response.data);
    } catch (error) {
      console.error("Erro ao obter os anúncios", error);
    }
  };

  const getAdsById = async (id: string | undefined) => {
    try {
      const jwtToken = localStorage.getItem("@kars_login");
      if (!jwtToken) return;

      const response = await localAPI.get<iSellerAd>(`advertisements/${id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      setAdsById(response.data);
    } catch (error) {
      console.error("Erro ao obter o anúncio", error);
    }
  };

  const getSellerAds = async () => {
    try {
      const response = await localAPI.get<iSellerAd[]>(`advertisements`);
      setSellerAds(response.data);
    } catch (error) {
      console.error("Erro ao obter os anúncios", error);
    }
  };

  const createAd = async (body: unknown) => {
    try {
      const jwtToken = localStorage.getItem("@kars_login");
      if (!jwtToken) return;

      const response = await localAPI.post("advertisements", body, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      toast.success("Anuncio criado com sucesso", {
        autoClose: 1000,
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao criar o anúncio", error);
    }
  };

  const updateAd = async (id: number, body: iUpdateAdvertisement) => {
    try {
      const jwtToken = localStorage.getItem("@kars_login");
      if (!jwtToken) return;

      const response = await localAPI.patch<iAd>(`advertisements/${id}`, body, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      toast.success("Anuncio atualizado com sucesso", {
        autoClose: 1000,
      });

      setShowModalEditAd(false);
    } catch (error) {
      console.error("Erro ao atualizar o anúncio", error);
    }
  };

  const updateAdStatus = async (id: number, body: iAdStatus) => {
    try {
      const jwtToken = localStorage.getItem("@kars_login");
      if (!jwtToken) return;

      const response = await localAPI.patch<iAdStatus>(
        `advertisements/status/${id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar status do anúncio", error);
    }
  };

  const deleteAd = async (id: number) => {
    try {
      const jwtToken = localStorage.getItem("@kars_login");
      if (!jwtToken) return;

      await localAPI.delete(`advertisements/${id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      toast.success("Anuncio deletado com sucesso", {
        autoClose: 1000,
      });

      setShowModalEditAd(false);
    } catch (error) {
      console.error("Erro ao deletar o anúncio", error);
    }
  };

  return (
    <AdsContext.Provider
      value={{
        showNewAdForm,
        allAdsArray,
        getAllAdsArray,
        adsById,
        setAdsById,
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
        showModalEditAd,
        setShowModalEditAd,
        adData,
        setAdData,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
