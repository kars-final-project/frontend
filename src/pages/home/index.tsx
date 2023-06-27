import Header from "../../components/header/index";
import { useContext, useState } from "react";
import { StyledHome } from "./style";
import CarCard from "../../components/CarCard";
import FilterList from "../..//components/FilterList";
import Footer from "../../components/footer/index";
import FilterModal from "../..//components/modals/filterModal";
import { AdsContext } from "../../contexts/ads.context";

function Home() {
  const {
    sellerAds,
    filterBrand,
    filterColor,
    filterYear,
    filterKm,
    filterPrice,
    filterFuel,
    filterModel,
  } = useContext(AdsContext);
  const [showFilter, setShowFilter] = useState(false);

  console.log(sellerAds)

  let adsFitlered = sellerAds.filter(
    (item) =>
      (filterBrand.length === 0 ||
        filterBrand.includes(item.brand.toLowerCase())) &&
      (filterYear.length === 0 ||
        filterYear.includes(item.year.toLowerCase())) &&
      (filterColor.length === 0 ||
        filterColor.includes(item.color.toLowerCase())) &&
      (filterFuel.length === 0 ||
        filterFuel.includes(item.fuel.toLowerCase())) &&
      (filterModel.length === 0 ||
        filterModel.includes(item.model.toLowerCase()))
  );

  if (filterKm === "min") {
    adsFitlered = adsFitlered.sort(
      (a, b) => Number(a.mileage) - Number(b.mileage)
    );
  } else if (filterKm === "max") {
    adsFitlered = adsFitlered.sort(
      (a, b) => Number(b.mileage) - Number(a.mileage)
    );
  }

  if (filterPrice === "min") {
    adsFitlered = adsFitlered.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (filterPrice === "max") {
    adsFitlered = adsFitlered.sort((a, b) => Number(b.price) - Number(a.price));
  }

  function openFilter() {
    setShowFilter(true);
  }

  function closeFilter() {
    setShowFilter(false);
  }

  return (
    <StyledHome>
      <Header />
      <div className="bigImg">
        <h1>Motors Shop</h1>
        <p>A melhor plataforma de anúncios de carros do país</p>
      </div>
      <div className="cards-filters">
        <FilterList closeModal={closeFilter} showFilter={false} />
        <div className="card-container">
          {adsFitlered.length !== 0 ? (
            <CarCard ads={adsFitlered} />
          ) : (
            <h5>Nenhum anuncio foi encontrado</h5>
          )}
          <button onClick={openFilter} className="filter-button">
            Filtros
          </button>
          {adsFitlered.length > 12 ? (
            <div className="pages">
              <span>1 de 2</span>
              <button>Seguinte {">"}</button>
            </div>
          ) : null}
        </div>
      </div>
      {showFilter && (
        <FilterModal showFilter={showFilter} closeModal={closeFilter} />
      )}
      <Footer />
    </StyledHome>
  );
}

export default Home;
