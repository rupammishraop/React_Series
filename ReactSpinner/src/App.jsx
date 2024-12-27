import { useEffect, useState } from 'react'

import RiseLoader from "react-spinners/RiseLoader"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
     setTimeout(()=>{
      setLoading(false)
     },5000)
  },[])

  return (
    <>
    {loading ? <RiseLoader
        color={"#36d7b7"}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : <p>Hello World</p>}
      
    </>
  )
}

export default App
