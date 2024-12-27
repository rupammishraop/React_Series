import React, { useState } from 'react'
import './BgApp.css'
import ButtonBox from './components/ButtonBox';
function BgApp() {
  
    let [color, setColor] = useState("white") 
    console.log(color);
    let setColorButton = (value)=>{
       setColor(value);
    }

  return (
    <>
      <div className="container"
      style={{
        backgroundColor : color,
      }}>
        <div className="appContainer">
           
            <ButtonBox 
            color="black"
            setColorButton={(value)=>setColor(value)}
            />
            <ButtonBox 
            color="red"
            setColorButton={(value)=>setColor(value)}
            />
            <ButtonBox 
            color="yellow"
            setColorButton={(value)=>setColor(value)}
            />
            <ButtonBox 
            color="orange"
            setColorButton={(value)=>setColor(value)}
            />
            <ButtonBox 
            color="green"
            setColorButton={(value)=>setColor(value)}
            />
            <ButtonBox 
            color="skyblue"
            setColorButton={(value)=>setColor(value)}
            />
            
            
            
        </div>
      </div>
    </>
  )
}

export default BgApp