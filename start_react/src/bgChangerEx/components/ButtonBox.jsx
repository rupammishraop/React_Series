import React from 'react'

function ButtonBox({
    color,
    setColorButton
}) {
  return (
   <>
     <button className='btn' 
       onClick={()=>{
          setColorButton(color);
       }}
       style={{backgroundColor  : color}}
     >
       {color}
     </button>
   </>
  )
}

export default ButtonBox