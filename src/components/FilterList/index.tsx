import { useContext } from "react";
import StyledFilterList from "./style";
import { AdsContext } from "../../contexts/ads.context";

interface iFilterListProps {
  showFilter: boolean;
  closeModal: () => void;
}

function FilterList({ showFilter, closeModal }: iFilterListProps) {
  const {
    filterBrand,
    setFilterBrand,
    filterColor,
    setFilterColor,
    filterKm,
    setFilterKm,
    filterYear,
    setFilterYear,
    filterPrice,
    setFilterPrice,
    filterFuel,
    setFilterFuel,
    filterModel,
    setFilterModel,
    allAdsArray,
  } = useContext(AdsContext);

  const handleClickBrand = (value: string) => {
    const optionExists = filterBrand.includes(value);

    if (optionExists) {
      const updatedBrand = filterBrand.filter((option) => option !== value);
      setFilterBrand(updatedBrand);
    } else {
      const updateBrand = [...filterBrand, value];
      setFilterBrand(updateBrand);
    }
  };

  const handleClickModel = (value: string) => {
    const optionExists = filterModel.includes(value);

    if (optionExists) {
      const updatedModel = filterModel.filter((option) => option !== value);
      setFilterModel(updatedModel);
    } else {
      const updateModel = [...filterModel, value];
      setFilterModel(updateModel);
    }
  };

  const handleClickColor = (value: string) => {
    const optionExists = filterColor.includes(value);

    if (optionExists) {
      const updatedColor = filterColor.filter((option) => option !== value);
      setFilterColor(updatedColor);
    } else {
      const updateColor = [...filterColor, value];
      setFilterColor(updateColor);
    }
  };

  const handleClickYear = (value: string) => {
    const optionExists = filterYear.includes(value);

    if (optionExists) {
      const updatedYear = filterYear.filter((option) => option !== value);
      setFilterYear(updatedYear);
    } else {
      const updateYear = [...filterYear, value];
      setFilterYear(updateYear);
    }
  };

  const handleClickFuel = (value: string) => {
    const optionExists = filterFuel.includes(value);

    if (optionExists) {
      const updatedFuel = filterFuel.filter((option) => option !== value);
      setFilterFuel(updatedFuel);
    } else {
      const updateFuel = [...filterFuel, value];
      setFilterFuel(updateFuel);
    }
  };

  const handleClickKm = (value: string) => {
    if (filterKm === value) {
      setFilterKm("");
    } else {
      setFilterKm(value);
    }
  };

  const handleClickPrice = (value: string) => {
    if (filterPrice === value) {
      setFilterPrice("");
    } else {
      setFilterPrice(value);
    }
  };

  const brands: string[] = [...new Set(allAdsArray.map((obj) => obj.brand))];
  const adsFilteredBrand = allAdsArray.filter(
    (item) =>
      filterBrand.length === 0 || filterBrand.includes(item.brand.toLowerCase())
  );

  const models: string[] = [
    ...new Set(adsFilteredBrand.map((obj) => obj.model)),
  ];

  return (
    <StyledFilterList showFilter={showFilter}>
      <section>
        <h2>Marca</h2>
        <div>
          {brands.map((brand) => (
            <button
              onClick={() => handleClickBrand(brand)}
              className={filterBrand.includes(brand) ? "selected" : ""}
            >
              {brand}
            </button>
          ))}
        </div>
      </section>
      <section>
        <h2>Modelo</h2>
        <div>
          {models.map((model) => (
            <button
              onClick={() => handleClickModel(model)}
              className={filterModel.includes(model) ? "selected" : ""}
            >
              {model}
            </button>
          ))}
        </div>
      </section>
      <section>
        <h2>Cor</h2>
        <div>
          <button
            onClick={() => handleClickColor("azul")}
            className={filterColor.includes("azul") ? "selected" : ""}
          >
            Azul
          </button>
          <button
            onClick={() => handleClickColor("branco")}
            className={filterColor.includes("branco") ? "selected" : ""}
          >
            Branco
          </button>
          <button
            onClick={() => handleClickColor("cinza")}
            className={filterColor.includes("cinza") ? "selected" : ""}
          >
            Cinza
          </button>
          <button
            onClick={() => handleClickColor("prata")}
            className={filterColor.includes("prata") ? "selected" : ""}
          >
            Prata
          </button>
          <button
            onClick={() => handleClickColor("preto")}
            className={filterColor.includes("preto") ? "selected" : ""}
          >
            Preta
          </button>
          <button
            onClick={() => handleClickColor("verde")}
            className={filterColor.includes("verde") ? "selected" : ""}
          >
            Verde
          </button>
        </div>
      </section>
      <section>
        <h2>Ano</h2>
        <div>
          <button
            onClick={() => handleClickYear("2022")}
            className={filterYear.includes("2022") ? "selected" : ""}
          >
            2022
          </button>
          <button
            onClick={() => handleClickYear("2021")}
            className={filterYear.includes("2021") ? "selected" : ""}
          >
            2021
          </button>
          <button
            onClick={() => handleClickYear("2018")}
            className={filterYear.includes("2018") ? "selected" : ""}
          >
            2018
          </button>
          <button
            onClick={() => handleClickYear("2015")}
            className={filterYear.includes("2015") ? "selected" : ""}
          >
            2015
          </button>
          <button
            onClick={() => handleClickYear("2013")}
            className={filterYear.includes("2013") ? "selected" : ""}
          >
            2013
          </button>
          <button
            onClick={() => handleClickYear("2012")}
            className={filterYear.includes("2012") ? "selected" : ""}
          >
            2012
          </button>
          <button
            onClick={() => handleClickYear("2010")}
            className={filterYear.includes("2010") ? "selected" : ""}
          >
            2010
          </button>
        </div>
      </section>
      <section>
        <h2>Combustivel</h2>
        <div>
          <button
            onClick={() => handleClickFuel("diesel")}
            className={filterFuel.includes("diesel") ? "selected" : ""}
          >
            Diesel
          </button>
          <button
            onClick={() => handleClickFuel("etanol")}
            className={filterFuel.includes("etanol") ? "selected" : ""}
          >
            Etanol
          </button>
          <button
            onClick={() => handleClickFuel("gasolina")}
            className={filterFuel.includes("gasolina") ? "selected" : ""}
          >
            Gasolina
          </button>
          <button
            onClick={() => handleClickFuel("flex")}
            className={filterFuel.includes("flex") ? "selected" : ""}
          >
            Flex
          </button>
        </div>
      </section>
      <section>
        <h2>Km</h2>
        <div className="max-min-button">
          <button
            onClick={() => handleClickKm("min")}
            className={filterKm.includes("min") ? "selected-box" : ""}
          >
            Minima
          </button>
          <button
            onClick={() => handleClickKm("max")}
            className={filterKm.includes("max") ? "selected-box" : ""}
          >
            Máxima
          </button>
        </div>
      </section>
      <section>
        <h2>Preço</h2>
        <div className="max-min-button">
          <button
            onClick={() => handleClickPrice("min")}
            className={filterPrice.includes("min") ? "selected-box" : ""}
          >
            Minima
          </button>
          <button
            onClick={() => handleClickPrice("max")}
            className={filterPrice.includes("max") ? "selected-box" : ""}
          >
            Máxima
          </button>
        </div>
      </section>
      <button onClick={closeModal} className="see-ads-button">
        Ver anúncios
      </button>
    </StyledFilterList>
  );
}

export default FilterList;