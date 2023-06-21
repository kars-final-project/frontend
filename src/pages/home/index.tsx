import Header from '../../components/header/index'
import { useState } from 'react'
import { StyledHome } from './style'
import CarCard from '../../components/CarCard'
import FilterList from '../..//components/FilterList'
import Footer from '../../components/footer/index'
import FilterModal from '../..//components/modals/filterModal'

function Home() {
  const [showFilter, setShowFilter] = useState(false)

  function openFilter () {
    setShowFilter(true)
  }

  function closeFilter() {
    setShowFilter(false)
  }

  return (
    <StyledHome>
        <Header/>
        <div className='bigImg'>
          <h1>Motors Shop</h1>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </div>
        <div className='cards-filters'>
            <FilterList showFilter={false}/> 
            <div className='card-container'>
                <CarCard/>
                <button onClick={openFilter} className='filter-button'>Filtros</button>
                <div className="pages">
                  <span>1 de 2</span>
                  <button>Seguinte {">"}</button>
                </div>
            </div>
        </div>
        {showFilter && <FilterModal showFilter={showFilter} closeModal={closeFilter}/>}
        <Footer/>
    </StyledHome>
  )
}

export default Home