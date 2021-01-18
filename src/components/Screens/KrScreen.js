import React from 'react';
import KrCard from '../Cards/KrCard';
import { KrMixChart, KrCharts } from '../Charts/KrChart';

const KrScreen = () => {
  return (
    <div>
      <KrCard />
      <KrCharts/>
      <KrMixChart />
    </div>
  )
};

export default KrScreen;
