import { GET_ALL_COUNTRIES } from "./actionTypes";

const initialState = {
    allCountries: [],
    allActivities:[],
}

function rootReducer (state = initialState, action){

    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
        }
        default:
            return state
    }

}

export default rootReducer;