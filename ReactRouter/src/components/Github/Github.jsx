import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  let data = useLoaderData();
  // let [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/rupammishraop')
  //     .then(res => res.json())
  //     .then(res => setData(res))
  //   console.log(data)
  // }, [])
  return (
    <div className='flex flex-col bg-gray-300'>
      <div className='flex justify-center p-4 bg-gray-500 text-white text-3xl'>Github followers : {data.followers}
      </div>
      <div className='flex justify-center m-2 w-25 h-25'>
        <img className='w-25 h-25' src={data.avatar_url} alt="Github Pic" width={300} />
      </div>
    </div>

  )
}

export default Github

 export const githubLoaderInfo= async () =>{
      let response = await fetch('https://api.github.com/users/rupammishraop')
      return response.json();
}