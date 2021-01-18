import React from 'react';
import AusCard from '../Cards/AusCard';
import { AusMixChart, AusCharts } from '../Charts/AusChart';

const AusScreen = () => {
  return (
    <div>
      <AusCard />
      <AusCharts />
      <AusMixChart />
    </div>
  )
};

export default AusScreen;
