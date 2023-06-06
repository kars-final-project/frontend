import Header from '../../components/header/index'
import React from 'react'
import { StyledHome } from './style'
import CarCard from '../../components/CarCard'
import FilterList from '../..//components/FilterList'

function Home() {
  return (
    <StyledHome>
        <Header/>
        <div className='cards-filters'>
            <FilterList/>
            <CarCard/>
        </div>
    </StyledHome>
  )
}

export default Home