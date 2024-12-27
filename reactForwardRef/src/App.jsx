import React, {useRef} from 'react'
import './App.css'
import InputBox from './components/InputBox';
function App() {
     
  const inputRef = useRef("");

  const HandleClick = (e) =>{
    e.preventDefault();
    console.log("rupam mishra")
    const inputValue = inputRef.current ? inputRef.current.value : '';
    console.log(inputValue);
  }

  return (
    <>
      <h1>Learn forward Ref</h1>
      <form >
      <InputBox ref={inputRef} />
      <button
      onClick={HandleClick}
      >Click Me</button>
      </form>
      
    </>
  )
}

export default App
