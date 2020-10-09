import { GET_GLOBAL_DATA,FETCH_ERROR} from '../types.js';


export default (state,action)=>{
    switch(action.type){
        case GET_GLOBAL_DATA:
            return{
                ...state,
                confirmed:action.payload.confirmed.value,
                recovered:action.payload.recovered.value,
                deaths:action.payload.deaths.value,
                lastupdate:action.payload.lastUpdate
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