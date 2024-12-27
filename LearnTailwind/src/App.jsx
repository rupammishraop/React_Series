import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-slate-700 h-screen w-full grid place-content-center'>
     <div className='bg-white p-5 w-full h-full rounded-xl'>
      <div className='' >
        <img className='w-60 h-60 rounded-xl' src="https://avatars.githubusercontent.com/u/102850921?v=4" alt="Github Image" />
      </div>
      <div className='flex flex-col items-center text-2xl mt-2 font-bold'>
        Tailwind Css 
        <p className='text-sm font-light'>By Rupam Mishra</p>
      </div>
      <div className='flex justify-center'>
         <button className='bg-sky-500 text-white p-3 mt-2 rounded-xl w-full hover:bg-slate-400'>Buy now</button>
      </div>
     
     </div>
   </div>
  )
}

export default App
