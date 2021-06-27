import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Results from './components/Results/Results'
import Map from './components/Map/Map'

function App() {

  return (
    <div className="App">
     <Header/>
     <Results/>
     <Map/>
    </div>
  )
}

export default App
