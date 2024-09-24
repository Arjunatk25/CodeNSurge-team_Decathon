import React from 'react'
import NavBar from '../../components/NavBar'
import StockNews from '../Stock news/StockNews'
import WeatherNews from '../wether news/WeatherNews'


const Home = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <StockNews />
      <div className="mt-3">
        <WeatherNews />
      </div>


    </div>
  )
}

export default Home