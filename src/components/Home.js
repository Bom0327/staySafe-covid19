import React from 'react';
import map from '../images/map.png';
import CovidData from './Screens/Tab';

const Home = () => {
  return (
    <div>
    <img className='map-img' src={map} alt='map' />
    <CovidData />
    </div>
  )
};

export default Home;
