import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api/korea';
import { Grid } from '@material-ui/core';
import CardDetails from './Card/CardDetails';
import styles from './Cards.module.css';
import covid from '../../images/covid19.png';

const KrCard = () => {

  const [apiData, setApiData] = useState({});
  const {confirmed, newConfirmed, recovered, deaths, newDeaths, active, tested} = apiData;

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetchData();
      
      setApiData({
        confirmed :res[0].confirmed.toLocaleString(),
        newConfirmed :res[0].newConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        recovered :res[0].recovered.toLocaleString(),
        deaths :res[0].deaths.toLocaleString(),
        newDeaths :res[0].newDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        active :res[0].active.toLocaleString(),
        tested :res[0].tested.toLocaleString()
      });
      
    };

    fetchApi();
  }, []);

  return (
    <div className={styles.cardContainer}>
     <img className='covid-img' src={covid} alt='covid' />
      <Grid container spacing={1} justify="center">
        <CardDetails
          className={styles.confirmed}
          cardTitle="Confirmed"
          totalValue={confirmed}
          value={newConfirmed}
        />
        <CardDetails
          className={styles.recovered}
          cardTitle="Recovered"
          totalValue={recovered}
        />
        <CardDetails
          className={styles.deaths}
          cardTitle="Deaths"
          totalValue={deaths}
          value={newDeaths}
        />
        <CardDetails
          className={styles.active}
          cardTitle="Active"
          totalValue={active}
        />
        <CardDetails
          className={styles.tested}
          cardTitle="Tested"
          totalValue={tested}
        />
      </Grid>
    </div>
  )
};

export default KrCard;
