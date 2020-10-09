import React ,{useReducer} from 'react';
import DailyCovidContext from './dailyCovidContext';
import dailyCovidReducer from './dailyCovidReducer.js';
import axios from 'axios';
import { FETCH_ERROR,GET_DAILY_DATA } from '../types.js'

const DailyCovidState =(props)=>{
    const initialState ={
        confirmed: null,
        recovered:null,
        deaths:null,
        
        

    }

    const [state,dispatch] =useReducer(dailyCovidReducer,initialState)

const url ='https://disease.sh/v3/covid-19/historical/all?lastdays=70';

//get daily data
const dailyData=async ()=>{
    try {
        const res = await axios.get(`${url}`)
        dispatch({type:GET_DAILY_DATA,payload:res.data})
        //console.log(res.data)
    } catch (error) {
        dispatch({type:FETCH_ERROR,payload:error.message})
        
    }
}






return (
    <DailyCovidContext.Provider 
    value={{
        confirmed:state.confirmed,
        recovered:state.recovered,
        deaths:state.deaths,
        dailyData,


    }}>
        {props.children}
    </DailyCovidContext.Provider>
)
    



}

export default DailyCovidState;