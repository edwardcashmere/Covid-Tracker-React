import React,{useState,useEffect,useContext} from 'react';
import { FormControl,NativeSelect} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import CountryContext from '../../context/Country/countryContext';


const CountryPicker = () => {
    const [Country,setCountry] =useState('Angola');
    const countryContext =useContext(CountryContext)
    const { getCountries,countries,getCountryData} = countryContext
    useEffect(()=>{
        getCountries()
        if(Country){
            getCountryData(Country)
        }
       // console.log(Country)
        //eslint-disable-next-line
    },[Country])
    const onChange = (e)=>{
        setCountry(e.target.value);
    }
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue={countries && countries[0]} onChange={onChange}>
            {countries && countries.map((country,i) => (<option key={i} value={country.name}>{country.name}</option>))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
