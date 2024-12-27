import React from 'react'
import { useState } from 'react'
export const TodoForm = () => {

  const [input, setInput] = useState("")

  const handleAddBtn = () => {
    if (input === "") {
      alert("Empty todo not allowed")
    } else {
      // add item to the list
    }
    setInput('')
  }

  return (
    <div className='border w-1/2 my-7 bg-gray-700 rounded '>

      <div className='w-half border-cyan-100 flex justify-between p-2' >
        <input className='w-96 outline-none rounded p-4 text-white text-2xl shadow bg-transparent'
          type="text"
          spellCheck="false"
          placeholder='Enter todo'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='border-gray-700 mx-5 bg-slate-300 w-20  border-yellow'
          onClick={handleAddBtn}
        >Add</button>
      </div>
    </div>
  )
}

