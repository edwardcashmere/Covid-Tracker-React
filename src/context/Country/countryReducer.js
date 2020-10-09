import { GET_COUNTRIES ,GET_COUNTRY_DATA} from '../types'


export default (state,action)=>{

    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries:action.payload.countries
            }
        case GET_COUNTRY_DATA:
            return {
                ...state,
                Cconfirmed:action.payload.confirmed.value,
                Crecovered:action.payload.recovered.value,
                Cdeaths:action.payload.deaths.value,
                ClastUpdate:action.payload.lastUpdate
            }
        default:
            return state
    }
}