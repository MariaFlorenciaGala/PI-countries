import React from 'react';
import { useState , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from '../../redux/actions'

export default function Home (){
  const dispatch = useDispatch();
  const allCountries = useSelector((state)=> state.allCountries)

  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])


  return (
    <div>
      <div>home</div>

    </div>

  )
}

