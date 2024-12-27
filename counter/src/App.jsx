import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  let addValue = () => {
    if(counter <= 20){
      setCounter(counter++)
    }
  }
  let removeValue = () => {
    if(counter > 0){
       setCounter(counter--)
    }
   
  }
  return (
    <>
      <p id='count'>Count Value : {counter}</p>
      <button  onClick={addValue}>addValue {counter}</button>
      <br />
      <button onClick={removeValue}>removeValue {counter}</button>
    </>
  )
}

export default App
