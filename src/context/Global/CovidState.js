import React ,{useReducer} from 'react';
import CovidContext from './covidContext';
import covidReducer from './covidReducer';
import axios from 'axios';
import { GET_GLOBAL_DATA,FETCH_ERROR } from '../types.js'

const CovidState =(props)=>{
    const initialState ={
        confirmed: 0,
        recovered:0,
        deaths:0,
        lastupdate:new Date()
        
        

    }

    const [state,dispatch] =useReducer(covidReducer,initialState)

//get initial global data
const url ='https://covid19.mathdro.id/api';

const fetchData =async ()=>{
    try {
        const res = await axios.get(url)
        dispatch({type:GET_GLOBAL_DATA,payload:res.data})
      //  console.log(res.data)
    } catch (error) {
        dispatch({type:FETCH_ERROR,payload:error.message})
        
    }
}











return (
    <CovidContext.Provider 
    value={{
        confirmed:state.confirmed,
        recovered:state.recovered,
        deaths:state.deaths,
        lastupdate:state.lastupdate,
        fetchData,


    }}>
        {props.children}
    </CovidContext.Provider>
)
    



}

export default CovidState;