import React from 'react'
import './App.css'
import RandomColors from './components/index'


const App = () => {
  return (
    <div>
    <h1>Generate Random Colors</h1>
      {/* <button>Click me</button> */}
      <RandomColors />
    </div>
  )
}

export default App