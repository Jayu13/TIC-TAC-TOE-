import React from 'react'
import './App.css'
import { Game, Quotes } from './Components/Index'


function App() {

  return (
    <>
      <div id='game'>
        <Game/>
      </div>
      <div id="quote">
        <Quotes/>
      </div>
    </>
  )
}

export default App