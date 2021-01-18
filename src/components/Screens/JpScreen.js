import React from 'react';
import JpCard from '../Cards/JpCard';
import { JpMixChart, JpCharts } from '../Charts/JpChart';
import JpTable from '../Tables/Tab';

const JpScreen = () => {
  return (
    <div>
      <JpCard />
      <JpCharts/>
      <JpMixChart />
      <JpTable />
    </div>
  )
};

export default JpScreen;






