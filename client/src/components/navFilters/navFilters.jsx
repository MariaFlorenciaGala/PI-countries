import React from 'react'
import { useDispatch } from 'react-redux';
import { getAllCountries } from '../../redux/actions'


export default function navFilters() {
  const dispatch = useDispatch();
  
  function handleClick(e){
    e.preventDefault();
    dispatch(getAllCountries())
  }

  return (
    <div>

      <div>navFilters</div>
      <button onClick= {e=>{handleClick(e)}} >Volver a cargar</button>



    </div>
  )
}

