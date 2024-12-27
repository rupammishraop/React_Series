import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='flex justify-center m-4 text-black'>User : {userid}</div>
  )
}

export default User