import React from 'react'
import axios from 'axios';
import { GET_ALL_COUNTRIES } from './actionTypes'




export function getAllCountries(){
    return async (dispatch) =>{
        const response = await axios.get("http://localhost:5000/countries/")
        return dispatch({
            type: GET_ALL_COUNTRIES,
            payload:response.data 
        })
    }
}

