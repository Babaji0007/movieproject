import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movies from './Movies'
const MovieShow = () => {
const [data,setData]=useState([])
useEffect(()=>{
    getdata()
},[])

const getdata=()=>{
    axios.get("http://localhost:1222/movie").then((res)=>{
     setData(res.data);
     console.log(res.data);
    })
    .catch((e)=>{
  console.log(e.message)
    })
}


  return (
    <div className='movie_container' >
        {data.map((e,i)=>{
            return (
                <div >
                <Movies movies={e} key={i}  />

               </div>
            )
        })}
    </div>
  )
}

export default MovieShow