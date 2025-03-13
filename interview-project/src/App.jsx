import React from 'react'
import './App.css'
import './components/accordians/style.css'
import Accordians from './components/accordians'
import RandomColors from './components/random'


const App = () => {
  return (
    <div className='App'>
      {/* Accordian components */}
      {/* <Accordians /> */}

      {/* Random components */}
      <RandomColors />
    </div>
  )
}

export default App