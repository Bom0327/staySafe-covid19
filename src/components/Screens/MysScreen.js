import React from 'react';
import MysCard from '../Cards/MysCard';
import { MysMixChart, MysCharts } from '../Charts/MysChart';


const MysScreen = () => {
  return (
    <div>
      <MysCard />
      <MysCharts />
      <MysMixChart />
    </div>
  )
};

export default MysScreen;
