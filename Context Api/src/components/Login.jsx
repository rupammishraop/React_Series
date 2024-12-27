import React, { useState } from 'react'
import useUserContext from '../context/UserContext';

function Login() {
   
     let [username, setUsername] = useState('');
     let [password, setPassword] = useState('')
     

     const {user,setUser} = useUserContext();
     const handleLogin =()=>{
        setUser({username, password})
        console.log(user.username);
     }


  return (
    <div className='flex flex-col align-middle'>
        <h1 className='text-3xl'>Sign In</h1>
        <input className='text-center'
         type="text" placeholder='username' spellCheck='false'
        value={username}
        onChange={(event)=>setUsername(event.target.value)}
        />
        <input type="text" placeholder='password' spellCheck='false' 
         value={password}
         onChange={(event)=>setPassword(event.target.value)}
        />
        <button
         onClick={handleLogin}
        >Login</button>
    </div>
  )
}

export default Login