import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom' 

//COMPONENTES
import Landing from './views/landing/landing'
import Home from './views/home/home'
import Details from './views/details/details'
import About from './views/about/about'
import Error from './views/error/error'


function App() { 
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<Details />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/error' element={<Error />}/>
      </Routes>
    </div>
  )
}

export default App
