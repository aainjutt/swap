import React from 'react'
import MoviesPage from '../components/MoviesPage';

// import { Spin } from 'antd';
import VehiclesList from '../components/VehiclesList';
// import StarshipsData from './components/StarshipsData';
import StarshipsList from '../components/StarshipsList';
function StarWars() {
  return (
    <div>
      <MoviesPage />
      <VehiclesList />
      <StarshipsList />
    </div>
  )
}

export default StarWars