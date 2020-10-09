import React,{useReducer} from 'react';
import CountryContext from './countryContext';
import countryReducer from './countryReducer';
import { GET_COUNTRIES,GET_COUNTRY_DATA} from '../types.js'
import axios from "axios";

const CountryState =props =>{
    const initialState ={
        countries:null,
        Cconfirmed:0,
        Crecovered:0,
        Cdeaths:0,
        ClastUpdate:0,
    };

    const [state,dispatch]=useReducer(countryReducer,initialState)

//getCountries
const url ='https://covid19.mathdro.id/api';
const getCountries = async()=>{
try {
    const res = await axios.get(`${url}/countries`)
    dispatch({type:GET_COUNTRIES,payload:res.data})
  //  console.log(res.data)
} catch (error) {
    console.log(error)
    
}
}

const getCountryData =async (country)=>{
    try {
        const res = await axios.get(`${url}/countries/${country}`)
        dispatch({type:GET_COUNTRY_DATA,payload:res.data})
       // console.log(res.data)
    } catch (error) {
        console.log(error)
    }

}


    return (
        <CountryContext.Provider
        value={{
            countries:state.countries,
            Cconfirmed:state.Cconfirmed,
            Crecovered:state.Crecovered,
            Cdeaths:state.Cdeaths,
            ClastUpdate:state.ClastUpdate,
            getCountries,
            getCountryData
        }}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryState;