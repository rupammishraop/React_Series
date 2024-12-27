
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { UserContextProvider } from './context/UserContext'

function App() {
    let [user, setUser] = useState({});

  return (
    <div className="flex  flex-col">
      <UserContextProvider value={{user, setUser}} >
      <Login />
      <Profile />
    </UserContextProvider>
    </div>
    
  )
}

export default App
