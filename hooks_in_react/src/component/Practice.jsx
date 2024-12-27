import React, { useCallback, useEffect, useState } from 'react'

function Practice() {

    let [counter, setCounter] = useState(0);

    let increment = ()=>{
         setCounter(counter++);
    }
    let decrement = ()=>{
         setCounter(counter--);
    }
 
    let alertFunction = ()=>{
        alert("Something Changed")
    }
    useEffect(()=>{
       change();
    },[counter])
    let change = useCallback(()=>{
       alertFunction();
    },[counter])
    
    return (
        <div className='h-screen w-full flex justify-center'>
            <div className='m-5 border-4 p-4 self-start'>
                <p className='text-center text-xl mb-4'>{counter}</p>
                <button className=' border-4 border-black p-3 mr-5 rounded-md'
                 onClick={increment}
                >
                    Increment
                </button>
                <button className=' border-4 border-black p-3  rounded'
                onClick={decrement}
                >
                    Decrement
                </button>
            </div>

        </div>

    )
}

export default Practice