import { FETCH_ERROR,GET_DAILY_DATA} from '../types.js';


export default (state,action)=>{
    switch(action.type){
        case GET_DAILY_DATA:
            return {
            ...state,
            confirmed: action.payload.cases,
            recovered: action.payload.recovered,
            deaths: action.payload.deaths,

        }
        case FETCH_ERROR:
            return {
                ...state,
                error:action.payload

        }
        default:
            return state
    }
}