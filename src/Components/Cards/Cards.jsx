import React, { useContext, useEffect } from 'react';
import CovidContext from '../../context/Global/covidContext';
import CountryContext from '../../context/Country/countryContext';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames'

const Cards = () => {
  const covidContext = useContext(CovidContext);
  const countryContext = useContext(CountryContext);
  const { fetchData, confirmed, deaths, recovered,lastupdate } = covidContext;
  const { Cconfirmed,Crecovered,Cdeaths,ClastUpdate } = countryContext;
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  },[]);
  return (
    
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
      <Typography variant="h3" component="h2" gutterBottom className={styles.heading}>
        Global Covid Data
      </Typography>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5"><CountUp start ={0} end={confirmed} duration={2.5} separator="," /></Typography>
             <Typography color="textSecondary">{new Date(lastupdate).toDateString()}</Typography>
            <Typography variant="body2">Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5"><CountUp start ={0} end={recovered} duration={2.5} separator="," /></Typography>
            <Typography color="textSecondary">{new Date(lastupdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of recoveries from covid 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5"><CountUp start ={0} end={deaths} duration={2.5} separator="," /></Typography>
            <Typography color="textSecondary">{new Date(lastupdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of deaths caused by covid19
            </Typography>
          </CardContent>
        </Grid>



        <Typography variant="h3" component="h2" gutterBottom className={styles.heading}>
        Country Covid Data
      </Typography>     
         <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5"><CountUp start ={0} end={Cconfirmed} duration={2.5} separator="," /></Typography>
            <Typography color="textSecondary">{new Date(ClastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of deaths caused by covid19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5"><CountUp start ={0} end={Crecovered} duration={2.5} separator="," /></Typography>
            <Typography color="textSecondary">{new Date(ClastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of deaths caused by covid19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5"><CountUp start ={0} end={Cdeaths} duration={2.5} separator="," /></Typography>
            <Typography color="textSecondary">{new Date(ClastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of deaths caused by covid19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
