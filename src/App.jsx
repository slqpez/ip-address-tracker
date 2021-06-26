import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Results from './components/Results/Results'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header/>
     <Results/>
    </div>
  )
}

export default App
