import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
     
     const {setUser} = useContext(UserContext)
    const handleSubmit = ()=>{
             setUser({username, password})
    }
  return (
    <>
       <h1>Login</h1>
       <input 
       value={username}
       onChange={(event)=>{
          setUsername(event.target.value);
       }}
       type="text" placeholder='username'/>

       <input 
       value={password}
       onChange={(event)=>{
          setPassword(event.target.value);
       }}
       type="text" placeholder='password'/>
       <button
       onClick={handleSubmit}
       >Submit</button>
    </>
  )
}

export default Login