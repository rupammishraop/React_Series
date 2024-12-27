import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {

   let [password, setPassword] = useState("");
   let [passLength, setPasswordLength] = useState(8);
   let [numberAllowed, setNumberAllowed] = useState(false);
   let [characterAllowed, setCharacterAllowed] = useState(false);

   let passwordGenerator = useCallback(() => {

      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) {
         str += "0123456789";
      }
      if (characterAllowed) {
         str += "@$!&";
      }
      for (let i = 0; i < passLength; i++) {
         let ichar = Math.floor(Math.random() * str.length + 1)
         if(str[ichar] === undefined){
            i--;
            continue;
         }
         pass += str[ichar]
      }
      setPassword(pass)

   }, [passLength, numberAllowed, characterAllowed, setPassword])

    useEffect(()=>{
      passwordGenerator()
    },[passLength, numberAllowed,characterAllowed,setPassword])

    let passRefrence = useRef(null)
    let copyPassword = useCallback(()=>{
         passRefrence.current?.select();
         window.navigator.clipboard.writeText(password)
    },[password])

   return (
      <div>
         <div className='bg-blue-200 h-screen w-full flex justify-center '>
            <div className='bg-blue-100 mt-5 border-2 flex items-center flex-col self-start p-5'  >
               <h1 className='text-black m-5  text-3xl'>Password Generator </h1>
               <div>
                  <input className='border-2 w-96 h-10 rounded-md p-5'
                     value={password}
                     placeholder='password'
                     ref={passRefrence}
                     readOnly
                     type="text" />
                  <button className='text-black border-2 h-10 bg-blue-400 w-20 rounded-md'
                  onClick={copyPassword}
                  >Copy</button>

               </div>
               <div className='flex m-5 '>
                  <div className='mr-5'>
                     <input
                        min={8}
                        max={16}
                        onChange={(e) => setPasswordLength(e.target.value)}
                        type="range" />
                     <label className='text-xl'>Length :{passLength}</label>
                  </div>
                  <div className='mr-5'>
                     <input className='h-4 w-3'
                        onChange={() => {
                           setNumberAllowed((prev) => (!prev))
                        }}
                        type="checkbox" />
                     <label className='ml-1 text-xl'>Number</label>
                  </div>
                  <div className='mr-5'>
                     <input className='h-4 w-3'
                        onChange={() => {
                           setCharacterAllowed((prev) => (!prev))
                        }} type="checkbox" />
                     <label className='ml-1 text-xl'>Character</label>
                  </div>
               </div>

            </div>

         </div>
      </div>
   )
}

export default App
