import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
   
  return (
    <div>
       <p>Welcome {user.username}</p>
    </div>
  )
}

export default Profile