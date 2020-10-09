import React from 'react';
import { Card,Chart,CountryPicker } from './Components';
import styles from './App.module.css';
import CovidState from './context/Global/CovidState.js';
import DailyCovidState from './context/Daily/DailyCovidState';
import CountryState from './context/Country/CountryState';
import CovidImg from './Images/covid.png'


function App() {
  return (
    <CovidState>
      <CountryState>
        <DailyCovidState>
          <div className={styles.container} >
            <img  className={styles.image} src={CovidImg} alt="Covid-19"/>
            < Card />
            < CountryPicker />
            < Chart />
          </div>
        </DailyCovidState>
      </CountryState>
    </CovidState>
  );
}

export default App;
