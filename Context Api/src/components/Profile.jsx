import React from 'react'
import useUserContext from '../context/UserContext'

function Profile() {

    const {user} = useUserContext();
    if(!user.username){
        alert("Not valid")
    }else{
        return(
             <div>Welcome {user.username}</div>
        )
       
    }

}

export default Profile