import Header from '../../components/header/index'
import React from 'react'
import { StyledHome } from './style'
import Footer from '../../components/footer/index'

function Home() {
  return (
    <StyledHome>
        <Header/>
        <div className='bigImg'>
          <h1>Motors Shop</h1>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </div>
        <Footer/>
    </StyledHome>
  )
}

export default Home